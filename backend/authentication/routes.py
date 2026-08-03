from flask import render_template, request, redirect, url_for, flash

from backend.authentication import auth_bp


@auth_bp.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        email = request.form.get("email")
        password = request.form.get("password")

        print("=" * 60)
        print("LOGIN SUCCESS")
        print("Email :", email)
        print("Password :", password)
        print("=" * 60)

        flash("Login Successful (Demo)", "success")

        return redirect(url_for("home"))

    return render_template("login.html")


@auth_bp.route("/register", methods=["GET", "POST"])
def register():

    if request.method == "POST":

        flash("Registration Successful (Demo)", "success")

        return redirect(url_for("auth.login"))

    return render_template("register.html")


@auth_bp.route("/forgot-password")
def forgot_password():

    return render_template("forgot_password.html")


@auth_bp.route("/profile")
def profile():

    return render_template("profile.html")