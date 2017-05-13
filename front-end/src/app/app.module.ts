import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyComponent } from '../components/currency/currency.component';
import { NewsComponent } from '../components/news/news.component';
import { WeatherComponent } from '../components/weather/weather.component';

import { KeysPipe } from '../pipes/keys.pipe';

export const APP_SERVER = 'http://localhost:5000/';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CurrencyComponent,
    NewsComponent,
    WeatherComponent,

    KeysPipe
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
