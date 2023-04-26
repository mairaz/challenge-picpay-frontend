import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

export interface User {
  id?: number
  name: string,
  email:string,
  img:string,
  login: UserLogin
}

export interface UserLogin {
  password:string,
  username:'string'
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
   return this.http.get<User[]>('https://run.mocky.io/v3/613bfa75-4d58-416b-ad82-7dc34cb661cb')
  }
}
