import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpModule, Response, Jsonp} from '@angular/http';

@Component({
  selector: 'app-quote-machine',
  templateUrl: 'quote-machine.component.html',
  styleUrls: ['quote-machine.component.css']
})
export class QuoteMachineComponent implements OnInit {

  quote: String;
  author: String;
  background: String;

  constructor(private http: HttpModule , private jsonp: Jsonp, private zone:NgZone) { }

  ngOnInit() { 
    this.zone.run(() => this.getQuote());
   }  

  public getQuote (): void {
    this.jsonp.get("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=JSONP_CALLBACK")
              .map(response => response.json())
              .subscribe(result => {
                //console.log(result);
                this.quote = result.quoteText;
                this.author = result.quoteAuthor;
                this.background = "https://source.unsplash.com/random/1600x900";
              });
  }

}
