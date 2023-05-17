from django.urls import path

from .views import home, login, membresia

urlpatterns = [
    path("", home,name="home"),
    path("login.html", login,name="login"),
    path("membresia.html", membresia,name="membresia"),
]


