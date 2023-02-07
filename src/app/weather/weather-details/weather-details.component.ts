import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../_services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  weatherObs$ = this.weatherService.getForecastWeatherByZip();
  

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

}
