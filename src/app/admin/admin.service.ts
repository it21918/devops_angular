import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {

  private apiServerUrl = 'http://localhost:9090admin/';

  constructor(private http: HttpClient){}

  public getUsers():Observable<any[]> {
    return this.http.get<any[]>(`${this.apiServerUrl}all`);
  }

  public getUserByEmail(email : string):Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}getUserByEmail/` + email);
  }

  public getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiServerUrl}roles`);
  }

  public addUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}add/` + user.roleName,user);
  }

  public updateUser(user: any, roleName : String): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}update/` + roleName ,user);
  }

  public updateUserDetails(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiServerUrl}updateDetails`, {
      email: user.email,
      username: user.username,
      password: user.password,
      imageUrl: user.imageUrl,
    });
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}delete/${userId}`);
  }
}