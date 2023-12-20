from flask import Blueprint, request, jsonify
from controllers.auth_controller import register_user, login_user

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['GET', 'POST'])
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

