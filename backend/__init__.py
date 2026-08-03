from flask import Flask, render_template

from backend.authentication import auth_bp


def create_app():

    app = Flask(
        __name__,
        template_folder="../frontend/templates",
        static_folder="../frontend/static"
    )

    app.secret_key = "CyberThreatAnalyticsSecretKey"

    app.register_blueprint(auth_bp)

    @app.route("/")
    def home():

        return render_template("index.html")

    return app