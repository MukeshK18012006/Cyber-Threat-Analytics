from flask import Flask, render_template

from backend.config import Config
from backend.extensions import db

from backend.authentication import auth_bp

# Import Models
from backend.authentication.models import User


def create_app():

    app = Flask(
        __name__,
        template_folder="../frontend/templates",
        static_folder="../frontend/static"
    )

    app.config.from_object(Config)

    db.init_app(app)

    app.register_blueprint(auth_bp)

    @app.route("/")
    def home():

        return render_template("index.html")

    return app