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
  protected endpoint: string
  protected redirectUrl: string
  protected router: Router
  protected oauthService: OAuthService

  constructor(
    router: Router,
    oauthService: OAuthService
  ) {
    this.router = router
    this.oauthService = oauthService
    this.endpoint = ''
    this.initOauthConfiguration()
  }

  public login(username: string, password: string): Promise<{}> {
    return this.oauthService.fetchTokenUsingPasswordFlow(username, password)
  }

  public logout(): void {
    this.oauthService.logOut()
    window.location.href = '/'
  }

  public isAuthenticated(): boolean {
    return !!this.token()
  }

  public token(): string {
    return this.oarthService.getAccessToken()
  }

  public redirectTo(url: string) {
    this.redirectUrl = url
  }

  protected initOauthConfiguration() {
    this.oauthService.tokenEndpoint = this.endpoint + '/oauth2/token'
    this.oauthService.clientId = ''
    this.oauthService.issuer = this.endpoint + '/oauth2/token'
    this.oauthService.scope = '*'
    this.oauthService.oidc = false
    this.oauthService.setStorage(sessionStorage)
  }
}

export {
  AuthenticateService,
}
