from django.contrib import admin

from .models import Transacciones, Membresia, Cliente

admin.site.register(Transacciones)
admin.site.register(Membresia)
admin.site.register(Cliente)
