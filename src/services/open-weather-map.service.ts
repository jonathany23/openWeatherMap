import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OPEN_WEATHER_MAP } from '../app/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {

  constructor(protected http: HttpClient) { }

  getWeather(){
    return this.http.get('http://api.openweathermap.org/data/2.5/find?lat=6.2441988&lon=-75.6512518&cnt=15&lang=es&APPID=519bbbcf519bfe5196989e78e989773e');
  }

  getWeatherByGeolocation(latitude, longitude){
    console.log("services");
    
    console.log(latitude);
    console.log(longitude);
    
    return this.http.get(OPEN_WEATHER_MAP.url+'/data/2.5/find?lat='+latitude+'&lon='+longitude+'&cnt=15&lang=es&APPID='+OPEN_WEATHER_MAP.apiKey);
  }
}
