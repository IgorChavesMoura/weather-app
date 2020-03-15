import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {

  weather:any;

  constructor(private route:ActivatedRoute, private router:Router, private weatherService:WeatherService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(
      queryParams => {

        if(!!queryParams.c){

          this.weatherService.getCityWeather(queryParams.c)
            .then(
              data => {

                this.weather = data;
                console.log(this.weather);

              }
            )

        } else {

          this.changeCity();

        }

      }
    );

  }

  getWeatherIcon(){

    return `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`

  }

  calculateTemp(){

    return Math.round(this.weather.main.temp - 273); //Converte a temperatura de Kelvin para Graus Celsius - Igor

  }

  calculateMinTemp(){

    return Math.round(this.weather.main.temp_min - 273); //Converte a temperatura de Kelvin para Graus Celsius - Igor

  }

  calculateMaxTemp(){

    return Math.round(this.weather.main.temp_max - 273); //Converte a temperatura de Kelvin para Graus Celsius - Igor

  } 

  getWindSpeed(){

    return (this.weather.wind.speed * 3.6).toFixed(1); //Converte de m/s para km/h - Igor

  }

  getSunrise(){

    let sunrise = new Date(this.weather.sys.sunrise);

    console.log(sunrise);

    return this.getDateHoursString(sunrise);

  }

  getSunset(){

    let sunset = new Date(this.weather.sys.sunset);

    console.log(sunset);

    return this.getDateHoursString(sunset);

  }

  getDateHoursString(date:Date){

    let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    return `${hours}:${minutes}`

  }

  changeCity(){

    this.router.navigate(['/']);

  }

}
