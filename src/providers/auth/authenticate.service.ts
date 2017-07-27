import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwtHelper } from 'angular2-jwt';

interface UserInterface {
  username: string,
  email: string,
}

@Injectable()
class AuthenticateService {
  protected router: Router
  protected oauthService: OAuthService
  constructor(
    router: Router,
    oauthService: OAuthService
  ) {
    this.router = router
    this.oauthService = oauthService
  }

  public logout(): void {
    this.oauthService.logOut()
    window.location.href = '/'
  }
}

export {
  UserInterface,
  AuthenticateService,
}
