import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CheckUsernameResponse } from 'src/app/models/auth/check-username-response';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/models/auth/login-response';
import { SignupResponse } from 'src/app/models/auth/singup-response';
import { LoginRequest } from 'src/app/models/auth/login-request';
import { SignupRequest } from 'src/app/models/auth/signup-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = '';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  checkUsername(username: String): Observable<CheckUsernameResponse> {
    return this.httpClient.post<CheckUsernameResponse>(`${this.url}/checkUsername`, username, this.httpOptions);
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.url}/login`, loginRequest, this.httpOptions);
  }

  register(signupRequest: SignupRequest): Observable<SignupResponse> {
    return this.httpClient.post<SignupResponse>(`${this.url}/signup`, signupRequest, this.httpOptions);
  }
}
