import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { BsModalRef } from 'ngx-bootstrap/modal';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NgFlashMessageService } from 'ng-flash-messages';
import { ValidateService } from './../../services/validate.service';
import { AuthenticationService } from './../../services/authentication.service';

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
  success: boolean;

  constructor(
    // private userService: UserService,
    private validateService: ValidateService,
    private authService: AuthenticationService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
    // private formBuilder: FormBuilder,
    // public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    console.log(this.username);
    // this.authService.registerUser({
    //   username: this.username,
    //   password: this.password,
    //   email: this.email,
    //   // firstName: this.firstName.value,
    //   // lastName: this.lastName.value,
    //   // address: this.address.value,
    //   // phone: this.phone.value,
    //   // city: this.city.value
    // }).subscribe((res) => {
    //   if (res.success) {
    //     this.alert = {
    //       type: 'success',
    //       msg: res.msg
    //     };
    //   } else {
    //     this.alert = {
    //       type: 'danger',
    //       msg: res.msg
    //     };
    //   }
    // });

    // required fields
    if (!this.validateService.validateRegister(user)) {
      // console.log('please fill in all filds');
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ['please fill in all filds'],
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true,
        // Time after which the flash disappears defaults to 2000ms
        timeout: 3000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
      return false;
    }

    // validate email
    if (!this.validateService.validateEmail(user.email)) {
      // console.log('please use a valied email');
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ['please use a valied email'],
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true,
        // Time after which the flash disappears defaults to 2000ms
        timeout: 3000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
      return false;
    }

    // register user
    this.authService.registerUser(user).subscribe( (res) => {
      if (res['success']) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['You are now registered'],
          dismissible: true,
          timeout: 3000,
          type: 'success'
        });
        setTimeout(() => {
          this.router.navigate(['/login']);
        },
        3000);

      } else {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Registration failed'],
          dismissible: true,
          timeout: 3000,
          type: 'danger'
        });
        setTimeout(() => {
          this.router.navigate(['/register']);
        },
        3000);
      }
    });

  }

}
