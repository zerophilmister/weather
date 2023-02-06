import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CurrentWeatherComponent } from './weather/current-weather/current-weather.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';
import { WeatherForecastComponent } from './weather/weather-forecast-card/weather-forecast.component';
import { WeatherForecastListComponent } from './weather/weather-forecast-list/weather-forecast-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    NavComponent,
    WeatherDetailsComponent,
    WeatherForecastComponent,
    WeatherForecastListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
