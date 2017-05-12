import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { APP_SERVER } from './app.module';

@Component({
  selector: 'hl-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  articles: {}[] = [];
  weather: {} = {};
  currency_from: string;
  currency_to: string;
  rate: number;
  currencies: string[];

  constructor(private http: Http) {
  }

  ngOnInit() {
    // this.getData();
  }

  getData() {
    this.http
      .get(APP_SERVER + 'api/home')
      .map((response: Response) => response.json())
      .subscribe(
        (data) => {
          this.articles = data.articles;
          this.weather = data.weather;
          this.currency_from = data.currency_from;
          this.currency_to = data.currency_to;
          this.rate = data.rate;
          this.currencies = data.currencies;
        }
      );
  }
}
