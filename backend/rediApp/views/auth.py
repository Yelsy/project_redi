from flask import Blueprint, request, jsonify, render_template
from controllers.auth_controller import register_user, login_user
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt


auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    try:
        response, status_code = register_user()
        return jsonify(response), status_code
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
        try:
            response, status_code = login_user()
            return jsonify(response), status_code
        except Exception as e:
            return jsonify({'error': str(e)}), 500


@auth_bp.route('/admin/dashboard', methods=['GET'])
@jwt_required()
def admin_dashboard():
    try:
        jwt_claims = get_jwt()

        # Verificar si el usuario tiene el rol de administrador
        if 'admin' in jwt_claims['roles']:
            return jsonify({'message': 'Welcome to the admin dashboard!'}), 200
        else:
            return jsonify({'error': 'Access denied. Admin role required.'}), 403
    except Exception as e:
        return jsonify({'error': str(e)}), 500

"""@auth_bp.route('/change-password', methods=['POST'])
def change_password():
    try:
        data = request.get_json()
        response, status_code = change_password(data)
        if status_code == 200:  # Cambio de contraseña exitoso
            return render_template('change_password.html', message=response['message'])
        else:
            return jsonify(response), status_code
    except Exception as e:
        return jsonify({'error': str(e)}), 500 """

