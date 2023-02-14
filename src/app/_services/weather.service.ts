import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { CurrentWeather } from '../_models/currentWeather';
import { ForecastWeather } from '../_models/forecastWeather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrlCurrent = environment.baseUrlCurrent;
  baseUrlForecast = environment.baseUrlForecast;
  apiKey = environment.apiKey;
  private zipcode = new BehaviorSubject("99501");
  currentZipcode$ = this.zipcode.asObservable();
 
 
  

  constructor(private http: HttpClient) { }

  updateZipcode(zip: string){
    this.zipcode.next(zip);
  }


  getCurrentWeatherByZip() { 
    return this.zipcode.pipe(
        switchMap((code) => { 
            return this.http.get<CurrentWeather>
                (this.baseUrlCurrent + this.apiKey + `&q=${code}`);
        })
    );
}

getForecastWeatherByZip() { 
  return this.zipcode.pipe(
      switchMap((code) => { 
          return this.http.get<ForecastWeather>
              (this.baseUrlForecast + this.apiKey + `&q=${code}&days=3&aqi=yes&alerts=no`);
      })
  );
}

getWeatherDetailsByZip() { 
  return this.zipcode.pipe(
      switchMap((code) => { 
          return this.http.get<ForecastWeather>
              (this.baseUrlForecast + this.apiKey + `&q=${code}&days=1&aqi=yes&alerts=no`);
      })
  );
}


  // getCurrentWeatherByZip(){
  //   return this.http.get<CurrentWeather>(this.baseUrl + this.apiKey + `&q=${this.zipcode.getValue()}`);
  // }
}
