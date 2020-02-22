from django.db import models

# Create your models here.

class Track(models.Model):
    title = models.CharField(max_length=100)
    url = models.URLField(max_length=200)
    author = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
