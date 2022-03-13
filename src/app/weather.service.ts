import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getCurrentWeather(option: any) {
    return this.http
      .get(
        'http://api.weatherstack.com/current?access_key=f915a74916953e30c822d76229b4adfc&query=' +
          option +
          ''
      )
      .pipe(map((res) => res));
  }
  // getWeather(latitude:any,longitude:any){
  //   return this.http.get(`http://api.weatherstack.com/current?access_key=f915a74916953e30c822d76229b4adfc&query=${latitude},${longitude}`)
  //   .pipe(map((res) => res));
  // }
  // getTimely(name:any){
  //   return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q="+name+"&appid=904f4892e202e4b9e33580d6b6f2cd52")
  //   .pipe(map((res) => res));
  // }
}
