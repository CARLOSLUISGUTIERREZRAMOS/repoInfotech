import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.userUrl);
  }

  getUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.userUrl}/${id}`);
  }
}
