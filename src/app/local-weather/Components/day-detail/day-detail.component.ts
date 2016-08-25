import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

@Component({
  selector: 'app-day-detail',
  templateUrl: 'day-detail.component.html',
  styleUrls: ['day-detail.component.css']
})
export class DayDetailComponent implements OnInit {

  @Input()
  weatherObservable: Subject<any>;

  hours: Array<string> = new Array<string>();
  icons: Array<string> = new Array<string>();
  temperatures: Array<string> = new Array<string>();

  iconUrl: string = "http://openweathermap.org/img/w/"; //png

  constructor() { }

  setHourlyForecast(response: any): void{

    this.hours = [];
    this.icons = [];
    this.temperatures = [];

    //we verify the element still belongs to today
    //day example "2016-08-25 15:00:00"
    let today = new Date().getDate();

    for (var key in response.list){
      let day: string = response.list[key].dt_txt.substring(8, 10);

      
      if (day === today.toString()){
        this.hours.push(response.list[key].dt_txt.substring(11, 13));
        this.icons.push(this.iconUrl + response.list[key].weather[0].icon + ".png");
        this.temperatures.push(response.list[key].main.temp);
      }

    }
  }

  ngOnInit() {
    this.weatherObservable.subscribe(response => {
      console.log("day-detail:", response);
      this.setHourlyForecast(response);
      //this.setWeather(response.main.temp, response.name, response.sys.country, response.weather[0].icon);
    })
  }

}
