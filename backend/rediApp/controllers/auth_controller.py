from flask import request, jsonify, current_app, make_response
from extensions import bcrypt, db
from utils.auth_utils import authenticate_user, create_token_response, extract_user_data
from models.user import User
import traceback 


def register_user():
    try:
        data = request.get_json()
        if not data:
            return {'error': 'Invalid JSON data in the request'}, 400
        email, password, name, nationality, bio, role_id = extract_user_data(data)

        # Verificar si el correo ya está registrado
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return {'error': 'This email is already registered'}, 400
        
        # Crear una instancia del modelo User con los datos proporcionados
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(
            email=email,
            password=hashed_password,
            name=name,
            nationality=nationality,
            bio=bio,
            role_id=role_id
        )

        # Agregar el nuevo usuario a la base de datos
        db.session.add(new_user)
        db.session.commit()

        # Autenticar al usuario recién registrado y generar la respuesta del token
        user = authenticate_user(email, password)
        response = create_token_response(user)

        # Extraer la información necesaria de la respuesta
        token_response = {'token': response.get_json()['access_token']}

        # Retornar un diccionario que puede ser serializado a JSON
        return {'success': True, 'message': 'User registered successfully', 'data': token_response}, 200

    except Exception as e:
        current_app.logger.error(f"Error in register_user: {traceback.format_exc()}")
        return {'error': 'Internal server error'}, 500


def login_user():
    try:
        data = request.get_json()
        email, password = extract_user_data(data, for_registration=False)

        if not email or not password:
            return {'error': 'Email and password are required'}, 400
        
        user_or_error = authenticate_user(email, password)
        if user_or_error is None:
            return {'error': 'Credenciales no válidas'}, 401
        
        user = authenticate_user(email, password)
        if user:
            token_response = create_token_response(user).get_json()
            return {'success': True, 'message': 'Login successful', 'data': {'token': token_response['access_token']}}, 200
        else:
            return {'error': 'Invalid email or password'}, 401

    except Exception as e:
        current_app.logger.error(f"Error in login_user: {traceback.format_exc()}")
        return {'error': 'Internal server error'}, 500




"""def change_password(data):
    try:
        user_id = data.get('user_id')
        current_password = data.get('current_password')
        new_password = data.get('new_password')

        # Validate that required fields are not empty
        if not user_id or not current_password or not new_password:
            return {'error': 'User ID, current password, and new password are required fields'}, 400

        # Find the user by ID
        user = User.query.get(user_id)

        # Check if the user exists and if the current password is correct
        if user and check_password_hash(user.password, current_password):
            # Change the password and update the modification date
            hashed_new_password = generate_password_hash(new_password, method='sha256')
            user.password = hashed_new_password
            user.updatedAt = datetime.utcnow()
            db.session.commit()

            # Successful response
            response = {
                'message': 'Password changed successfully'
            }

            return response, 200
        else:
            return {'error': 'Invalid credentials'}, 401

    except Exception as e:
        # Error handling: Return a detailed error message and a status code of 500
        current_app.logger.error(str(e))
        return {'error': 'Internal server error'}, 500 """


