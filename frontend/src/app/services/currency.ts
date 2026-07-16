import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { CurrencyRequest } from '../models/currency-request';

import { CurrencyResponse } from '../models/currency-response';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private http = inject(HttpClient);

  convert(request: CurrencyRequest): Observable<CurrencyResponse> {

    return this.http.post<CurrencyResponse>(
      `${environment.apiUrl}/Currency/convert`,
      request
    );

  }

}
