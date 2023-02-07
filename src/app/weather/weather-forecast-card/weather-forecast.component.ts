import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../_services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  weatherObs$ = this.weatherService.getForecastWeatherByZip();
 
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }



}
