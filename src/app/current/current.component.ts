import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnInit {
  place: any;
  myCity: any;
  x: any;
  y: any;
  newData: any;
  oldData: any;
  reload: any;
  latitude: any;
  longitude: any;
  weather: any;
  forecast: any;
  isSearched:boolean=false;
  forecasting: Array<any> = [];

  constructor(private ws: WeatherService) {}

  ngOnInit(): void {
    // this.getCurrentLocation();
  }
  // getCurrentLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //     });
  //     console.log(this.latitude,this.longitude)
  //   }
  //   this.ws.getWeather(this.latitude, this.longitude).subscribe((pos) => {
  //     this.weather = pos;
  //     console.log(this.weather);
  //   });
  // }
  
  findData(myCity: any) {
    this.isSearched=true;
    this.ws.getCurrentWeather(myCity).subscribe((place) => {
      console.log(place);
      this.place = place;
    });
  }
}
