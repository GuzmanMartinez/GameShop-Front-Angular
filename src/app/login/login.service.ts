import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  save(credentials: any): void {
    localStorage.setItem('token', btoa(`${credentials.username}:${credentials.password}`));
  }

  getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    return new HttpHeaders({'Authorization': 'Basic ' + token});
  }

  constructor() { }
}
