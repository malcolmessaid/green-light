from django.shortcuts import render

# Create your views here.

from .models import Track
from .serializers import TrackSerializer
from rest_framework import generics

class TrackListCreate(generics.ListCreateAPIView):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
