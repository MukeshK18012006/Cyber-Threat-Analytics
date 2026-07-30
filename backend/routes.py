from flask import render_template


def register_routes(app):

    @app.route("/")
    def dashboard():
        return render_template(
            "dashboard.html",
            page_title="Dashboard"
        )

    @app.route("/login")
    def login():
        return render_template(
            "login.html",
            page_title="Login"
        )