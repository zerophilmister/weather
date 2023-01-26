import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrentWeather } from '../_models/currentWeather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl = environment.baseUrl;
  apiKey = environment.apiKey;
  private zipcode = new BehaviorSubject("99501");
  currentZipcode$ = this.zipcode.asObservable();
 
 
  

  constructor(private http: HttpClient) { }

  updateZipcode(zip: string){
    this.zipcode.next(zip);
  }

  getCurrentWeatherByZip(){
    return this.http.get<CurrentWeather>(this.baseUrl + this.apiKey + `&q=${this.zipcode.getValue()}`);
  }
}
