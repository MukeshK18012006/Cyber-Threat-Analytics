from flask import (
    render_template,
    request,
    redirect,
    url_for,
    flash
)

from werkzeug.security import generate_password_hash

from backend.extensions import db
from backend.authentication import auth_bp
from backend.authentication.models import User


# ==========================================
# Login
# ==========================================

@auth_bp.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        flash(
            "Login functionality will be completed in Module 2.3.2.6",
            "info"
        )

        return redirect(url_for("auth.login"))

    return render_template("login.html")


# ==========================================
# Register
# ==========================================

@auth_bp.route("/register", methods=["GET", "POST"])
def register():

    if request.method == "POST":

        full_name = request.form.get("fullname")
        username = request.form.get("username")
        email = request.form.get("email")
        password = request.form.get("password")
        confirm_password = request.form.get("confirm_password")

        # -------------------------------
        # Password Match
        # -------------------------------

        if password != confirm_password:

            flash("Passwords do not match.", "danger")

            return redirect(url_for("auth.register"))

        # -------------------------------
        # Email Exists
        # -------------------------------

        existing_email = User.query.filter_by(email=email).first()

        if existing_email:

            flash("Email already registered.", "warning")

            return redirect(url_for("auth.register"))

        # -------------------------------
        # Username Exists
        # -------------------------------

        existing_username = User.query.filter_by(username=username).first()

        if existing_username:

            flash("Username already exists.", "warning")

            return redirect(url_for("auth.register"))

        # -------------------------------
        # Password Hashing
        # -------------------------------

        hashed_password = generate_password_hash(password)

        # -------------------------------
        # Create User
        # -------------------------------

        user = User(

            full_name=full_name,

            username=username,

            email=email,

            password=hashed_password

        )

        db.session.add(user)

        db.session.commit()

        flash(

            "Registration Successful! Please login.",

            "success"

        )

        return redirect(url_for("auth.login"))

    return render_template("register.html")


# ==========================================
# Forgot Password
# ==========================================

@auth_bp.route("/forgot-password")
def forgot_password():

    return render_template("forgot_password.html")


# ==========================================
# Profile
# ==========================================

@auth_bp.route("/profile")
def profile():

    return render_template("profile.html")