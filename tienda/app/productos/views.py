from django.shortcuts import render, redirect
from.forms import ProductoForm
from.models import Producto
from .usuarios import usuarios
# Create your views here.


from django.http import request

# lista=['mango','pera','manzana']
lista = [
        {'nombre':'Pera',     'cantidad':25, 'precio':44},
        {'nombre':'Naranja',  'cantidad':14, 'precio':54},
        {'nombre':'Uva',      'cantidad':55, 'precio':74},
        {'nombre':'Manzana',  'cantidad':24, 'precio':14},
        {'nombre':'Limon',    'cantidad':22, 'precio':34},
        {'nombre':'Pina',     'cantidad':15, 'precio':14}
    ]

# Create your views here.
def renderizar_consulta(request):
    return render(request, 'productos/consulta.productos.html',{'mi_lista':usuarios})

def renderizar_entrada(request):
    return render(request, 'productos/entrada.productos.html')

def renderizar_salida(request):
    return render(request, 'productos/salida.productos.html')

# Vista HOME

def renderizar_home(request):
    return render(request, 'home.html')

def producto_create(request):
    mensaje=''
    if request.method=='POST':
        form=ProductoForm(request.POST)
        if form.is_valid():
            form.save()
            mensaje='Datos guardado correctamente'
        else:
            mensaje='Error al guardar'
            
    else:
        form=ProductoForm()
        #donde vamos a emigrar lo que quiero ensenar el formulario
    return render(request,'producto.html',{'mensaje':mensaje})


