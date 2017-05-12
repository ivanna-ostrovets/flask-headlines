import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { APP_SERVER } from '../../app/app.module';

@Component({
  selector: 'hl-currency',
  templateUrl: './currency.component.html'
})
export class CurrencyComponent {
  currencies: string[];
  currency: {} = {};
  fromCurreny: string;
  toCurrency: string;

  constructor(
    private http: Http
  ) {
  }

  getCurrency() {
    this.http
      .get(APP_SERVER + `api/rate?from=${this.fromCurreny}&to=${this.toCurrency}`)
      .map((response: Response) => response.json())
      .subscribe(
        (data) => {
          this.currency = data;
        }
      );
  }
}
