from django.shortcuts import render
from rest_framework import generics
from .serializers import user_account_serializer
from .models import user_account
from rest_framework.views import APIView

# Create your views here.

class create_account(generics.CreateAPIView):
    serializer_class=user_account_serializer
    queryset=user_account.objects.all()



# for google Auth
from django.conf import settings
from google.auth.transport import requests as google_requests
from google.oauth2 import id_token
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken



class GoogleLogin(APIView):    
    def post(self,request):
        token = request.data.get("token")
        if not token:
            return Response({"error": "Token not provided","status":False}, status=status.HTTP_400_BAD_REQUEST)
        try:
            id_info = id_token.verify_oauth2_token(
                token, 
                google_requests.Request(), 
                settings.GOOGLE_OAUTH_CLIENT_ID,
                clock_skew_in_seconds=10
            )
        except Exception as e:
            return Response({"error": "Invalid Token","status":False}, status=status.HTTP_400_BAD_REQUEST)
        
        email = id_info['email']
        first_name = id_info.get('given_name', '')
        last_name = id_info.get('family_name', '')

        try:
            user=user_account.objects.get(email=email)
        except user_account.DoesNotExist:
            user=user_account.objects.create_user(email=email,first_name=first_name,last_name=last_name, password='jneflj3nefj3neflkj3nfoijne3foij3rfij')
        refresh = RefreshToken.for_user(user)
        return Response({"tokens": {"access": str(refresh.access_token), "refresh": str(refresh),},"status": True},status=status.HTTP_200_OK)