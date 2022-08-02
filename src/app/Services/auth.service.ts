import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class AuthService {
 baseApi=environment.apiBaseUrl
  constructor( private http:HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.baseApi + '/api/auth/signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      this.baseApi + '/api/auth/signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }
  logout(): Observable<any> {
    return this.http.post(this.baseApi + '/api/auth/signout', { }, httpOptions);
  }

  register2( username:string,name:string, email:string,datenaissance:Date,
                tel:number,adresse:string,image:string,password:string): Observable<any> {
    return this.http.post(
      this.baseApi + '/api/auth/signup',
      {
        username,name,email,datenaissance,tel,adresse,image,password
      },
      httpOptions
    );
  }
  
  SimpleSave(user:User){

    return this.http.post(this.baseApi + '/api/auth/SaveUser',user);
  }
  createUser(formData:FormData,idorg:number,idrole:number): Observable<any> {
    return this.http.post(`${this.baseApi}/api/auth/userenew/${idorg}/role/${idrole}`,formData);
  }
}
