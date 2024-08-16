from django.db import models

# Create your models here.

class Producto(models.Model):
    nombre =models.CharField(max_length=100)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10,decimal_places=2)
    stock= models.IntegerField()
    categoria = models.CharField(max_length=50)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    imagen =models.URLField(blank=True, null =True)
    
    
class Cliente(models.Model):
    nombre=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    direccion=models.CharField(max_length=250)
    telefono=models.CharField(max_length=15)
    fecha_registro=models.DateTimeField(auto_now_add=True)
    
class Pedido(models.Model):
    ESTADOS_PEDIDO=[
        ('P','Pendiente'),
        ('E','Enviado'),
        ('D', 'Entregado')
    ]
    
    Cliente=models.ForeignKey(Cliente,on_delete=models.CASCADE)
    fecha_pedido=models.DateTimeField(auto_now_add=True)
    estado=models.CharField(max_length=1,choices=ESTADOS_PEDIDO,default='p')
    total=models.DecimalField(max_digits=10,decimal_places=2)
    productos=models.ManyToManyField(Producto,through='PedidoProducto')
    
class PedidoProducto(models.Model):
    pedido=models.ForeignKey(Pedido,on_delete=models.CASCADE)
    Producto=models.ForeignKey(Producto,on_delete=models.CASCADE)
    cantidad=models.IntegerField()