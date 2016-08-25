import { Component, OnInit } from '@angular/core';
import { LocalWeatherService } from "./Services/local-weather.service";
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

@Component({
  selector: 'app-local-weather',
  templateUrl: 'local-weather.component.html',
  styleUrls: ['local-weather.component.css']
})
export class LocalWeatherComponent implements OnInit {

  apiKey: string = "3a71a0bd58736d01f6b5ce76235fa42c";
  url: string = "http://api.openweathermap.org/data/2.5/";
  currentWeatherUrl: string = this.url + "weather";
  forecastUrl: string = this.url + "forecast";
  weatherUnit = "C";

  notifyWeatherToChildren: Subject<any> = new Subject();
  notifyForecastToChildren: Subject<any> = new Subject();

  optionsArray = {
    "appid": this.apiKey,
    "units": "metric",
    //"lang": "pt"
  }

  weatherObject: Object;

  constructor(private weatherService: LocalWeatherService) { }

  sendWeatherToChildren(weatherObject: Object): void {
    this.notifyWeatherToChildren.next(weatherObject);
  }

  sendForecastToChildren(forecastObject: Object): void {
    this.notifyForecastToChildren.next(forecastObject);
  }

  changeWeatherUnit(notification: string): void {
    //console.log(notification);
    if (this.weatherUnit === "C") {
      this.optionsArray["units"] = "imperial";
      this.weatherUnit = "F";
    }
    else {
      this.optionsArray["units"] = "metric";
      this.weatherUnit = "C";
    }
    this.getTheWeather();
    this.getForecast();
  }

  getForecast() {
    let options = this.weatherService.addParams(this.optionsArray);

    this.weatherService.getForecast(this.forecastUrl, options)
      .subscribe(response => {
        this.sendForecastToChildren(response);
        //console.log("response:", response);
      });
  }

  getGeoLocation() {
    //Get the geolocation of the browser
    this.weatherService.getGeoLocation()
      .subscribe(response => {
        let coords: Object = response;

        //Add the coords to the options array, so the API knows our location
        for (var key in coords)
          this.optionsArray[key] = coords[key];

        this.getTheWeather();

        this.getForecast();

      });

  }

  getTheWeather() {
    let options = this.weatherService.addParams(this.optionsArray);
    this.weatherService.getWeather(this.currentWeatherUrl, options).subscribe(apiWeather => {
      this.weatherObject = apiWeather;
      //console.log("Weather:", this.weatherObject);
      this.sendWeatherToChildren(this.weatherObject);
    });
  }


  ngOnInit() {
    this.getGeoLocation();
  }
}
