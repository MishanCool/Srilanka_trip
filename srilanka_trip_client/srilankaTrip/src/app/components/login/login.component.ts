import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication.service';
import { NgFlashMessageService } from 'ng-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private ngFlashMessageService: NgFlashMessageService,
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    // const user = {
    //   username: this.username,
    //   password: this.password
    // };
    // console.log(this.username);
    // console.log(this.password);

    this.authService.authenticateUser({
      username: this.username,
      password: this.password,
    }).subscribe( (res) => {
      if (res['success']) {
        this.authService.storeUserData(res['token'] , res['user']);
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Login success'],
          dismissible: true,
          timeout: 3000,
          type: 'success'
        });
        setTimeout(() => {
          this.router.navigate(['/admin-dashboard']);
        },
        3000);

      } else {
        this.ngFlashMessageService.showFlashMessage({
          messages: [res['msg']],
          dismissible: true,
          timeout: 3000,
          type: 'danger'
        });
        setTimeout(() => {
          this.router.navigate(['/login']);
        },
        3000);
      }

    });
  }

}
