from flask import request, jsonify, current_app, make_response
from extensions import bcrypt, db
from utils.auth_utils import authenticate_user, create_token_response, user_has_admin_role
import re
from utils.patterns import PATTERN_EMAIL, PATTERN_PASSWORD
from models.user import User
from models.role import Role
from werkzeug.exceptions import Unauthorized
import traceback 


def register_user():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        name = data.get('name')
        nationality = data.get('nationality')
        bio = data.get('bio')
        is_admin = data.get('admin', False)

        # Verificar si el correo ya está registrado
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return {'error': 'This email is already registered'}, 400

        if re.search(PATTERN_EMAIL, email) is None:
            return {'message': 'Invalid email format'}, 400

        if re.search(PATTERN_PASSWORD, password) is None:
            return {'message': 'Invalid password format. Minimum 6 characters'}, 400

        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        
        # Obtener el rol "user" por defecto
        default_role = Role.query.filter_by(name='user').first()

        new_user = User(
            email=email,
            password=hashed_password,
            name=name,
            nationality=nationality,
            bio=bio,
            roles=[default_role]  # Asignar el rol por defecto al nuevo usuario
        )


        # Asignar el rol de administrador al nuevo usuario si es necesario
        if is_admin:
            admin_role = Role.query.filter_by(name='admin').first()
            if admin_role:
                new_user.roles.append(admin_role)

        
        db.session.add(new_user)
        db.session.commit()

        token_response = create_token_response(new_user)

        # Retornar un diccionario que puede ser serializado a JSON
        return {
            'success': True,
            'message': 'User registered successfully',
            'token': token_response.get_json()['access_token']
        }, 200

    
    except Exception as e:
        current_app.logger.error(f"Error in register_user: {traceback.format_exc()}")
        return {'error': 'Internal server error'}, 500


def login_user():
    try:
        data = request.get_json()
        email = data.get('email', None)
        password = data.get('password', None)

        if not email or not password:
            return {'error': 'Email and password are required'}, 400
        
        user = authenticate_user(email, password)
        if not user:
            return {'error': 'Invalid email or password'}, 401
    
        if user_has_admin_role(user):
            admin_dashboard_url = '/admin/dashboard'
            return {'success': True, 'message': 'Login successful', 'data': {'admin_dashboard_url': admin_dashboard_url}}, 200
    
        token_response = create_token_response(user).get_json()
           
        return {'success': True, 'message': 'Login successful', 'data': {'token': token_response['access_token']}}, 200
        

    except Unauthorized as e:
        current_app.logger.error(f"Authentication error: {str(e)}")
        return {'error': 'Invalid email or password'}, 401
    except Exception as e:
        current_app.logger.error(f"Error in login_user: {str(e)}")
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


