from django.urls import path

from .views import home, login, membresia, pagar, terminar

urlpatterns = [
    path("", home,name="home"),
    path("login.html", login,name="login"),
    path("membresia.html", membresia,name="membresia"),
    path("pagar/<int:total>/", pagar,name="pagar"),
    path("terminar/", terminar,name="terminar"),
    
]


