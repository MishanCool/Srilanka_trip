import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../services/authentication.service';
import { NgFlashMessageService } from 'ng-flash-messages';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLoggedIn: boolean = true;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private ngFlashMessageService: NgFlashMessageService,
  ) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logOut();
    this.ngFlashMessageService.showFlashMessage({
      messages: ['Login Out'],
      dismissible: true,
      timeout: 3000,
      type: 'success'
    });
    setTimeout(() => {
      this.router.navigate(['/login']);
    },
    3000);
  }

}
