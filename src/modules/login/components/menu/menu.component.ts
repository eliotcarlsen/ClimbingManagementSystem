import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../../../providers/auth/authenticate.service';

@Component({
  selector: 'app-login-menu',
  templateUrl: 'menu.component.html',
})
export class LoginMenuComponent implements OnInit {
  protected authService: AuthenticateService

  constructor(authService: AuthenticateService) {
    this.authService = authService
  }

  ngOnInit() {
    
  }
}
