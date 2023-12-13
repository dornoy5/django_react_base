from django.db import models

# Create your models here.
class Product(models.Model):
    desc = models.CharField(max_length=50,null=False,blank=True,default="No desc")
    price = models.IntegerField()
    createdTime=models.DateTimeField(auto_now_add=True)
 
    def __str__(self):
           return f'{self.desc} {self.price} '

class Book(models.Model):
    name = models.CharField(max_length=50,null=False,blank=True,default="No desc")
    author = models.CharField(max_length=50,null=False,blank=True,default="No desc")
    year_created=models.IntegerField()
 
    def __str__(self):
           return f'{self.name} {self.author}{self.year_created}  '

