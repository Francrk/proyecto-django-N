from django import forms
from.models import Producto

class ProductoForm(forms.ModelForm):
    class Meta:
        model =Producto
        fields =['nombre','descripcion','precio','stock','categoria','imagen']
        widgets={
            
            'descripcion': forms.Textarea(attrs={'row':4, 'cols':40}),
            'precio':forms.NumberInput(attrs={'stop':'0.01'}),
            'stock':forms.NumberInput(attrs={'min':'0'}),
            'imagen':forms.URLInput(attrs={'placeholder':'URL de la imagen(opcional)'}),
            
        }
        