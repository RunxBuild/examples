import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

DEBUG = os.environ.get("DEBUG", "false").lower() == "true"

SECRET_KEY = os.environ.get("SECRET_KEY", "unsafe-secret")

ALLOWED_HOSTS = ["*"]


INSTALLED_APPS = [
    "django.contrib.contenttypes",
    "django.contrib.staticfiles",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.middleware.common.CommonMiddleware",
]

ROOT_URLCONF = "app.urls"

WSGI_APPLICATION = "app.wsgi.application"

# No DB needed for simple JSON endpoint
LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

STATIC_URL = "static/"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"