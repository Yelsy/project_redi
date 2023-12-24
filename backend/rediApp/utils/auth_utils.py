from flask import current_app, jsonify, abort, make_response
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from models.user import User
from models.role import Role
from extensions import bcrypt, db# Asegúrate de importar Bcrypt

def generate_access_token(identity):
    """Genera un token de acceso."""
    return create_access_token(identity=identity)

def verify_password(user, password):
    """Verifica la contraseña del usuario."""
    return user and bcrypt.check_password_hash(user.password, password)

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

def create_token_response(user, additional_claims=None):
    """Crea una respuesta con el token de acceso."""
    if additional_claims is None:
        additional_claims = {}

    # Obtener los roles del usuario
    user_roles = [role.name for role in user.roles]

    # Combinar los roles con cualquier reclamación adicional proporcionada
    all_claims = {'roles': user_roles, **additional_claims}

    # Generar el token de acceso con reclamaciones adicionales
    access_token = create_access_token(identity=user.id, additional_claims=all_claims)

    # Devolver la respuesta JSON con el token de acceso
    return make_response(jsonify({'access_token': access_token}), 200)



def user_has_admin_role(user):
    admin_role = Role.query.filter_by(name='admin').first()
    return admin_role in user.roles

"""def assign_admin_role(user_id):
    user = User.query.get(user_id)
    if user:
        admin_role = Role.query.filter_by(name='admin').first()
        if admin_role:
            user.roles.append(admin_role)
            db.session.commit()
            return {'success': True, 'message': 'Admin role assigned successfully'}, 200
    return {'error': 'User not found or admin role not available'}, 404
"""