from flask import current_app, jsonify, abort, make_response
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from models.user import User
from extensions import bcrypt 

def generate_access_token(identity):
    """Genera un token de acceso."""
    return create_access_token(identity=identity)

def verify_password(user, password):
    """Verifica la contraseña del usuario."""
    if user and bcrypt.check_password_hash(user.password, password):
        return True
    return False

@jwt_required()
def get_current_user():
    """Obtiene el usuario actual basado en el token JWT."""
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return user

def authenticate_user(email, password):
    """Autenticación de usuario."""
    user = User.query.filter_by(email=email).first()
    if not user or not verify_password(user, password):
        return None
    return user

def create_token_response(user):
    """Crea una respuesta con el token de acceso."""
    access_token = generate_access_token(identity=user.id)
    return make_response(jsonify({'access_token': access_token}), 200)

def extract_user_data(data, for_registration=True):
    email = data.get('email')
    password = data.get('password')

    if for_registration:
        # Si es para registro, obtener todos los campos
        name = data.get('name')
        nationality = data.get('nationality')
        bio = data.get('bio')
        role_id = data.get('role_id')
        return email, password, name, nationality, bio, role_id
    else:
        return email, password
def get_user_type():
    user_id = get_jwt_identity()

    if user_id:
        user = User.query.get(user_id)
        if user:
            return user.role.name if user.role else 'user'
    
    return 'user' 