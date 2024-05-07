import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({

  providedIn: 'root'

})
export class WeatherServicService {

  constructor(private clientHttp: HttpClient) { }
  getWeatherData(): Observable<any>{
    const url='https://api.openweathermap.org/data/2.5/weather?q=Rabat&appid=7e4c7670cd3d6cf767745e9a15796514';
    return this.clientHttp.get<any>(url);
  }
}
