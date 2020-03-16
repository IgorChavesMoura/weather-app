import { Injectable } from '@angular/core';


import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey:string = environment.apiKey;
  private apiUrl:string = 'https://api.openweathermap.org/data/2.5/weather';


  constructor(private http:HttpClient) { }

  getCityWeather(city:string): Promise<any>{

    let url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;

    return this.http.get(url).toPromise();


  }

}
