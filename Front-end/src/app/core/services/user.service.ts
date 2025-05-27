import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://127.0.0.1:5000/users/';

  constructor( private http: HttpClient ) { }


  register( user: User ): Observable<User> {
    return this.http.post<User>( this.url + 'register' , user );
  }

  login( credentials: { email: string, password: string } ): Observable<{ token: string, user: User }> {
    return this.http.post<{ token: string, user: User }>( this.url + 'login' , credentials );
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>( this.url + id );
  }

  updateUser( id: string, userData: FormData ): Observable<User> {
    return this.http.put<User>( this.url + id , userData );
  }


  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  getUserIdFromToken(): string {
    const token = localStorage.getItem('token');
    if (token) {
      return JSON.parse( window.atob( token.split('.')[1] ) ).id;
    }
    return '';
  }


}
