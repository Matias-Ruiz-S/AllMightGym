from django.contrib import admin

from .models import Transaccion, Membresia, Cliente

admin.site.register(Transaccion)
admin.site.register(Membresia)
admin.site.register(Cliente)
