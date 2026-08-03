from functools import wraps
from flask import redirect


def login_required(function):

    @wraps(function)

    def wrapper(*args, **kwargs):

        return function(*args, **kwargs)

    return wrapper