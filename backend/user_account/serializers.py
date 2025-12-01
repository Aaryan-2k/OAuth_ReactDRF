from rest_framework import serializers
from .models import user_account
from rest_framework.exceptions import ValidationError

class user_account_serializer(serializers.ModelSerializer):
    password=serializers.CharField(min_length=8,write_only=True,error_messages={'min_length':'password must be atleast 8 char long'})
    confirm_password=serializers.CharField(min_length=8,write_only=True)
    class Meta:
        model=user_account
        fields=('first_name','last_name','email','password','confirm_password')

    def validate(self, data):
        if data['password']!=data['confirm_password']:
            raise ValidationError("password doesn't match!")
        return data
    
    def create(self,data):
        user=user_account.objects.create_user(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            password=data['password'],
        )
        return user



