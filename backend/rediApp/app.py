# rediApp/app.py

from flask import Flask
from config import Config, DevelopmentConfig
from extensions import db, jwt, bcrypt
from views.auth import auth_bp
from models.role import Role

def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(Config)

    # Configuración adicional según el entorno
    if config_name == 'development':
        app.config.from_object(DevelopmentConfig)
    else:
        app.config.from_object(Config)

    db.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)

    app.register_blueprint(auth_bp)

    with app.app_context():
        db.create_all()

        # Verificar y agregar roles si no existen
        admin_role = Role.query.filter_by(name='admin').first()
        user_role = Role.query.filter_by(name='user').first()

        if admin_role is None:
            admin_role = Role(name='admin')
            db.session.add(admin_role)

        if user_role is None:
            user_role = Role(name='user')
            db.session.add(user_role)

        db.session.commit()

    return app


