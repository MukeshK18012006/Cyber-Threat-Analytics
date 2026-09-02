from backend import create_app
from backend.authentication.models import User

app = create_app()

with app.app_context():

    users = User.query.all()

    print("=" * 50)
    print("REGISTERED USERS")
    print("=" * 50)

    if not users:
        print("No users found.")
    else:
        for user in users:
            print("ID:", user.id)
            print("Full Name:", user.full_name)
            print("Username:", user.username)
            print("Email:", user.email)
            print("Password:", user.password)
            print("Created:", user.created_at)
            print("=" * 50)
