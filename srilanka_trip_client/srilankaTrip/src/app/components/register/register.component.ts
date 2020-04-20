import { Component, OnInit } from '@angular/core';

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

  constructor(
    // private userService: UserService,
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };
  }

}
