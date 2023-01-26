import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CurrentWeather } from '../../_models/currentWeather';
import { WeatherService } from '../../_services/weather.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  zipcode: string | undefined;
  cWeather: CurrentWeather | undefined;

  constructor(private weatherService: WeatherService) { }

  

  ngOnInit(): void {
    this.loadWeather();
    }
  

  loadWeather(){  
    // const zip = this.zipcode.toString();
   // if(this.zipcode.length < 5) return;
     
    this.weatherService.getCurrentWeatherByZip().subscribe({
      next: cWeather => this.cWeather = cWeather
        
    })
    console.log(this.zipcode);
  }
  
  

}
