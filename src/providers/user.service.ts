import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class UserService {
  protected httpService: HttpService

  constructor(
    httpService: HttpService,
  ) {
    this.httpService = httpService
  }

  getProfile() {
    return this.httpService.get('/users/profile')
  }
}
