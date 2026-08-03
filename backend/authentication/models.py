"""
Authentication Models

Later this file will contain

User Model
Admin Model
Role Model

using SQLAlchemy
"""

class User:

    def __init__(
        self,
        username,
        email,
        password
    ):

        self.username = username

        self.email = email

        self.password = password