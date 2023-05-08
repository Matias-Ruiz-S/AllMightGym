from django.urls import path

from .views import home, login

urlpatterns = [
    path("", home,name="home"),
    path("login.html", login,name="login"),
]

urlpatterns = [
    path("", home,name="home"),
    path("login", login,name="login"),
]