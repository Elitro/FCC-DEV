import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule, JsonpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuoteMachineComponent } from './quote-machine/quote-machine.component';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';

//Services
import { LocalWeatherService } from './local-weather/Services/local-weather.service';

//Shared
//import { Coordenates } from './local-weather/Shared/coordenates';

import { routing, appRoutingProviders} from './app.routing';
import { LocalWeatherComponent } from './local-weather/local-weather.component';
import { CurrentWeatherComponent } from './local-weather/Components/current-weather/current-weather.component';
import { DayDetailComponent } from './local-weather/Components/day-detail/day-detail.component';

@NgModule({
  declarations: [
    AppComponent, HomePageComponent, QuoteMachineComponent, LocalWeatherComponent, CurrentWeatherComponent, DayDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    JsonpModule,
    
  ],

  providers: [appRoutingProviders, LocalWeatherService,
  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
