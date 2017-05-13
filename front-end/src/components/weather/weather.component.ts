import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Weather } from '../../models/weather';

import { APP_SERVER } from '../../app/app.module';

@Component({
  selector: 'hl-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  city: string;
  weather: Weather;

  constructor(
    private http: Http
  ) {
  }

  getData() {
    this.http
      .get(APP_SERVER + `api/weather?city=${this.city}`)
      .map((response: Response) => response.json())
      .subscribe(
        (data) => {
          this.weather = data;
        }
      );
  }
}
