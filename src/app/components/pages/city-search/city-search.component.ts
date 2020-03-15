import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  city:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  searchWeather(){


    if(!!this.city){

      this.router.navigateByUrl(`/weather?c=${this.city}`);

    }

 

  }

}
