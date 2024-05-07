import { Component } from '@angular/core';
import { WeatherServicService } from '../weather-servic.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  weatherdata: any;
  temp: any;
  dt: any;
  country: any;

  constructor(private weatherService: WeatherServicService) {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeatherData().subscribe(
      (data: any) => {
        this.weatherdata = data;
        console.log(this.weatherdata);
        this.country = this.weatherdata['sys']['country'];
        this.temp = this.weatherdata['main']['temp'];
        this.dt = this.weatherdata['dt'];
      }
    );
  }
}
