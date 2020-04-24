import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
// import { BsModalRef } from 'ngx-bootstrap/modal';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  // providers: []
})
export class RegisterComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  alert: { type: string; msg: any; };

  constructor(
    // private userService: UserService,
    private authService: AuthenticationService,
    private router: Router,
    // private formBuilder: FormBuilder,
    // public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    // const user = {
    //   username: this.username,
    //   email: this.email,
    //   password: this.password
    // };
    console.log(this.username);
    this.authService.registerUser({
      username: this.username,
      password: this.password,
      email: this.email,
      // firstName: this.firstName.value,
      // lastName: this.lastName.value,
      // address: this.address.value,
      // phone: this.phone.value,
      // city: this.city.value
    }).subscribe((res) => {
      if (res.success) {
        this.alert = {
          type: 'success',
          msg: res.msg
        };
      } else {
        this.alert = {
          type: 'danger',
          msg: res.msg
        };
      }
    });
  }

}
