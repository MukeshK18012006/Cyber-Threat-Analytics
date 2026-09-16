from backend import create_app
from backend.extensions import db

app = create_app()

with app.app_context():

    print("=" * 60)
    print("Creating Database...")
    print("=" * 60)

    db.create_all()

    print()
    print("Database Created Successfully")
    print("=" * 60)
