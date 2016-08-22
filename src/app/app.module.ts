import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule, JsonpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuoteMachineComponent } from './quote-machine/quote-machine.component';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { routing, appRoutingProviders} from './app.routing';

@NgModule({
  declarations: [
    AppComponent, HomePageComponent, QuoteMachineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    JsonpModule
  ],

  providers: [appRoutingProviders,
  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
