from django.shortcuts import render

# Create your views here.

from .models import Track
from .serializers import TrackSerializer
from rest_framework import generics
from django.views import View

class TrackListCreate(generics.ListCreateAPIView):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer

class TrackListFilter(generics.ListCreateAPIView):
    queryset = Track.objects.filter(author='me')
    serializer_class = TrackSerializer

class TrackListFront(View):
    def get(self, request):
        queryset = Track.objects.all()
        serializer_class = TrackSerializer
    
    def post(self, request):
        queryset = Track.objects.all()
        serializer_class = TrackSerializer