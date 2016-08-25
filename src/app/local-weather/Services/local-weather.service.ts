import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, URLSearchParams } from '@angular/http'
import 'rxjs/add/operator/map';
import { GeoCoordinates } from '../Shared/GeoCoordinates';
import { HourlyForecast } from '../Shared/HourlyForecast';

@Injectable()
export class LocalWeatherService {

    coords = new GeoCoordinates();

    constructor(private http: Http) { }

    public getWeather(url: string, options: URLSearchParams): Observable<Http> {
        return this.http.get(url, { search: options })
            .map(response => response.json());
    }

    addParams(optionsArray: Object): URLSearchParams {

        let param: URLSearchParams = new URLSearchParams();

        for (var key in optionsArray) {
            param.set(key, optionsArray[key]);
        }

        return param;
    }

    getGeoLocation(): Observable<GeoCoordinates> {
        let coordsObservable = new Observable<GeoCoordinates>(observer => {            
            navigator.geolocation.getCurrentPosition((position) => {
                let myCoords = new GeoCoordinates();
                myCoords.lat = position.coords.latitude;
                myCoords.lon = position.coords.longitude;
                observer.next(myCoords);
            //return this.coords;
            }); 
        });

        return coordsObservable;               
    }
    
    getForecast(url: string, options: URLSearchParams): Observable<Http> {
        /*let forecastObservable = new Observable<HourlyForecast>(observer => {  
        });*/
        
        return this.http.get(url, { search: options})
            .map(response=> response.json());
            /*.subscribe(result => {
                let cenas: HourlyForecast;
                cenas.hours = "1";
                cenas.icons = "icon";
                cenas.temperature = "123";
                
            });*/
    }

}