from django.db import models

class Transaccion(models.Model):
    id_transaccion = models.CharField(max_length=10, primary_key=True)
    monto_transaccion = models.IntegerField(max_length=10)

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
    Transaccion_id_transaccion = models.ForeignKey(Transaccion, on_delete=models.CASCADE)
    Membresia_id_membresia = models.ForeignKey(Membresia, on_delete=models.CASCADE)