import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

@Component({
  selector: 'app-current-weather',
  templateUrl: 'current-weather.component.html',
  styleUrls: ['current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  iconUrl: string = "http://openweathermap.org/img/w/"; //png
  weatherUnit: string = "C";

  @Input()
  weatherObservable: Subject<any>;

  @Output()
  notifyParent: EventEmitter<any> = new EventEmitter();

  weatherValue: string;
  city: string;
  country: string;
  icon: string;

  constructor() { }

  ngOnInit() {
    this.weatherObservable.subscribe(response => {
      console.log("Child:", response);
      this.setWeather(response.main.temp, response.name, response.sys.country, response.weather[0].icon);
    })
  }

  changeWeatherUnit() {
    this.notifyParent.emit("Notify parent!");
    this.weatherUnit =  (this.weatherUnit === "C") ? "F" : "C";
  }

  setWeather(weatherValue, city, country, icon): void {
    this.weatherValue = weatherValue;
    this.city = city;
    this.country = country;
    this.icon = this.iconUrl + icon + ".png";
  }
}
