from datetime import datetime

from backend.extensions import db


class User(db.Model):

    __tablename__ = "users"

    # ==========================================
    # Primary Key
    # ==========================================

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    # ==========================================
    # User Information
    # ==========================================

    full_name = db.Column(
        db.String(100),
        nullable=False
    )

    username = db.Column(
        db.String(50),
        unique=True,
        nullable=False
    )

    email = db.Column(
        db.String(120),
        unique=True,
        nullable=False
    )

    # Store HASHED password
    password = db.Column(
        db.String(255),
        nullable=False
    )

    # ==========================================
    # Account Status
    # ==========================================

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

    is_active = db.Column(
        db.Boolean,
        default=True
    )

    def __repr__(self):

        return f"<User {self.username}>"