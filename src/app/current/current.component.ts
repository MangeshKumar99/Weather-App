import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  place: any
  myCity: any
  x: any
  y: any
  newData: any
  oldData: any
  reload: any
  latitude: any
  longitude: any
  weather:any
  forecast:any
  forecasting:Array<any>=[]




  constructor(private ws: WeatherService) { }

  ngOnInit(): void {
    this.getCurrentLocation()
  
  }
  getCurrentLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.latitude=position.coords.latitude
        this.longitude=position.coords.longitude
      })
    }
  }

  findData(myCity: any) {
    this.ws.getCurrentWeather(myCity).subscribe(place => {
      console.log(place)
      this.place = place
    })
    this.ws.getWeather(this.latitude,this.longitude).subscribe(pos=>{
      this.weather=pos
      console.log(this.weather)
    })
  }
  myFunction1() {
    this.x = document.getElementById("mySelect");
    this.x.remove(this.x.selectedIndex);
  }
  myFunction2(choice: any) {
    this.y = document.getElementById("mySelect");
    var option = document.createElement("option");
    option.text = choice;
    this.y.add(option);
  }
  save(s: any) {
    localStorage.setItem("city", s);
  }
  retrieve() {
    this.reload = localStorage.getItem("city");
    this.myFunction2(this.reload)
  }
 getForecast(opt:any){
   console.log(opt)
   this.ws.getTimely(opt).subscribe(forecast=>{
     console.log(forecast)
     this.forecast=forecast
     for(let i=0;i<this.forecast.list.length;i++){
       if(i%8==0){
         console.log(this.forecast.list[i])
         this.forecasting.push(this.forecast.list[i])
       }
     }
     console.log(this.forecasting)
   })
 }






}
