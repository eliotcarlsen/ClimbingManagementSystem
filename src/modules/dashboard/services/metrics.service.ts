import { Injectable } from '@angular/core';

import { HttpService } from '../../../providers/http.service';

import { Observable } from 'rxjs/Observable';
import { Http, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MetricsService {
  protected httpService: HttpService

  constructor(httpService: HttpService) {
    this.httpService = httpService
  }

  digital(start: string, end: string): Observable<Response> {
    let params: URLSearchParams = new URLSearchParams

    params.set('filter[start_date]', start)
    params.set('filter[end_date]', end)

    return this.httpService.get('', params)
  }
}
