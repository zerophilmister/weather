import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../_services/weather.service';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {
  weatherObs$ = this.weatherService.getForecastWeatherByZip();
  
  
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

 
}
