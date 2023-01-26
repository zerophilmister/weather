import { Component, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { WeatherService } from 'src/app/_services/weather.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 zipcode: any;


  constructor(private weatherService: WeatherService) { }
 

  ngOnInit(): void {
    // this.weatherService.currentZipcode$.subscribe(zip =>
    // this.zipcode = zip);
  }

  updateZip(){
    this.weatherService.updateZipcode(this.zipcode);
    console.log(this.zipcode);
  }

}
