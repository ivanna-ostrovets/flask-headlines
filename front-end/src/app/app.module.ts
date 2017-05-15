import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { CurrencyComponent } from '../components/currency/currency.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { NewsComponent } from '../components/news/news.component';
import { WeatherComponent } from '../components/weather/weather.component';

import { KeysPipe } from '../pipes/keys.pipe';

export const APP_SERVER = 'http://localhost:5000/';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  declarations: [
    AppComponent,
    CurrencyComponent,
    FooterComponent,
    NavbarComponent,
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
