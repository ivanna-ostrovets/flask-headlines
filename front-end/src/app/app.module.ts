import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrencyComponent } from '../components/currency/currency.component';
import { WeatherComponent } from '../components/weather/weather.component';

export const APP_SERVER = 'http://localhost:5000/';

const appRoutes: Routes =  [
  { path: '', component: AppComponent },
  { path: 'news', component: AppComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    WeatherComponent,
    CurrencyComponent
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
