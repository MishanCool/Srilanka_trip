import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AppConfig } from '../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authToken: any;
  // user: any;
  user: User;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registerUser(user: User) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(AppConfig.BASE_URL + 'users/register', user, { headers }).pipe();
  }
}
