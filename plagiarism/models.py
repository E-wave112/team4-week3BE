from django.db import models

# Create your models here.

class Plag(models.Model):

    textitem = models.TextField()


    def __str__(self):
        return f"{self.text}"
