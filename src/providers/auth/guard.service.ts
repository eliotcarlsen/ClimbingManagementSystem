import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';

@Injectable()
export class AuthGuardService {
  protected router: Router
  constructor(router: Router) {
    this.router = router
  }
}
