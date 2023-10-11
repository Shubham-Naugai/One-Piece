from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    return Response("Hello")

def getProducts(request):
    return JsonResponse(products, safe=False)