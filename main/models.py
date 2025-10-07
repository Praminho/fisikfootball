from django.db import models
import uuid
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# buat model baru bernama employee, puynya name tidka boleh lebih dari 255 karakter, age menyimpan bil bulat, persona menyimpan teks panjang tanpa batas karakter, tidak boleh charfield (persona)
class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    CATEGORY_CHOICES = [
        ('tops', 'Tops'),
        ('bottoms', 'Bottoms'),
        ('legwears', 'Legwears'),
        ('accessories', 'Accessories'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    description = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='update')
    thumbnail = models.URLField(blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name



class Employee(models.Model):
    nama = models.CharField(max_length=255)
    age = models.IntegerField()
    persona = models.TextField()
