# Generated by Django 4.1.7 on 2023-05-17 14:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Membresia',
            fields=[
                ('id_membresia', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('precio_membresia', models.IntegerField(max_length=10)),
                ('tipo_membresia', models.CharField(max_length=50)),
                ('fecha_membresia', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Transacciones',
            fields=[
                ('id_transacciones', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('monto_transacciones', models.IntegerField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('rut_cliente', models.CharField(max_length=9, primary_key=True, serialize=False)),
                ('nombre_cliente', models.CharField(max_length=50)),
                ('correo_cliente', models.CharField(max_length=50)),
                ('numero_cliente', models.IntegerField(max_length=12)),
                ('fecha_nacimiento_cliente', models.DateField()),
                ('Membresia_id_membresia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='database.membresia')),
                ('Transacciones_id_transacciones', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='database.transacciones')),
            ],
        ),
    ]
