import re


def valid_email(email):

    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'

    return re.match(pattern, email)


def valid_password(password):

    return len(password) >= 8