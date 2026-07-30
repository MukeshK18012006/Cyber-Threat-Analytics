from flask import Flask


def create_app():
    app = Flask(
        __name__,
        template_folder="../frontend/templates",
        static_folder="../frontend/static"
    )

    app.config.from_object("backend.config.Config")

    from backend.routes import register_routes
    register_routes(app)

    return app