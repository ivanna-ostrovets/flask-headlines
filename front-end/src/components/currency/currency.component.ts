import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { APP_SERVER } from '../../app/app.module';

@Component({
  selector: 'hl-currency',
  templateUrl: './currency.component.html'
})
export class CurrencyComponent implements OnInit {
  currencies: string[];
  fromCurreny: string;
  rate: number;
  toCurrency: string;

  constructor(
    private http: Http
  ) {
  }

  ngOnInit() {
    this.http
      .get(APP_SERVER + 'api/currencies')
      .map((response: Response) => response.json())
      .subscribe(
        (data) => {
          this.currencies = data;
        }
      );
  }

  getRate() {
    this.http
      .get(APP_SERVER + `api/rate?from=${this.fromCurreny}&to=${this.toCurrency}`)
      .map((response: Response) => response.json())
      .subscribe(
        (data) => {
          this.rate = data;
        }
      );
  }
}
