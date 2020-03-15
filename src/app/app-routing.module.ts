import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitySearchComponent } from './components/pages/city-search/city-search.component';
import { CityWeatherComponent } from './components/pages/city-weather/city-weather.component';


const routes: Routes = [

  { path:'', component:CitySearchComponent },
  { path:'weather', component:CityWeatherComponent },
  { path:'**', redirectTo:'/', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
