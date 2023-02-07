import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/_services/weather.service';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.css']
})
export class HourlyForecastComponent implements OnInit {
  weatherObs$ = this.weatherService.getForecastWeatherByZip();
 
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

}
