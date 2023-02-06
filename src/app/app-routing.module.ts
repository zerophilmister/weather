import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './weather/current-weather/current-weather.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';

const routes: Routes = [
  
  { path: 'current-weather', component: CurrentWeatherComponent },
  { path: 'current-weather/:zipcode', component: CurrentWeatherComponent },
  { path: 'weather-details', component: WeatherDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
