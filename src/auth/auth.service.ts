import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{

    singin(){
        return {msg: 'I am signing in'}
    }

    signup(){
        return {msg: 'I have signed up'}
    }
};