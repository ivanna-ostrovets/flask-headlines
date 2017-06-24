import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';

import { APP_SERVER } from '../../app/app.module';

@Component({
  selector: 'hl-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  @ViewChild('currenciesForm') currenciesForm: NgForm;

  currencies: string[];
  fromCurrency: string;
  rate: number;
  toCurrency: string;

  constructor(private http: Http) {
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

    this.currenciesForm.statusChanges
      .filter(data => data === 'VALID')
      .filter(() => Boolean(this.fromCurrency && this.toCurrency))
      .subscribe(() => this.getRate());
  }

  getRate() {
    this.http
      .get(APP_SERVER + `api/rate?from=${this.fromCurrency}&to=${this.toCurrency}`)
      .map((response: Response) => response.json())
      .subscribe(
        (data) => {
          this.rate = data;
        }
      );
  }
}
