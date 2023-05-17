from django.db import models

class Transacciones(models.Model):
    id_transacciones = models.CharField(max_length=10, primary_key=True)
    monto_transacciones = models.IntegerField(max_length=10)

class Membresia(models.Model):
    id_membresia = models.CharField(max_length=10, primary_key=True)
    precio_membresia = models.IntegerField(max_length=10)
    tipo_membresia = models.CharField(max_length=50)
    fecha_membresia = models.DateField()
    #Cliente_rut_cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)

class Cliente(models.Model):
    rut_cliente = models.CharField(max_length=9, primary_key=True)
    nombre_cliente = models.CharField(max_length=50)
    correo_cliente = models.CharField(max_length=50)
    numero_cliente = models.IntegerField(max_length=12)
    fecha_nacimiento_cliente = models.DateField()
    Transacciones_id_transacciones = models.ForeignKey(Transacciones, on_delete=models.CASCADE)
    Membresia_id_membresia = models.ForeignKey(Membresia, on_delete=models.CASCADE)