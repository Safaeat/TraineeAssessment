import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { LoginRequest } from '../models/login-request';

import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  login(request: LoginRequest): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(
      `${environment.apiUrl}/Auth/login`,
      request
    );

  }

  logout() {

    localStorage.removeItem("token");

  }

  saveToken(token: string) {

    localStorage.setItem("token", token);

  }

  getToken() {

    return localStorage.getItem("token");

  }

  isLoggedIn() {

    return this.getToken() != null;

  }

}
