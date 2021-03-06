import { Routes, RouterModule }   from '@angular/router';
import { QuoteMachineComponent } from "./quote-machine/quote-machine.component"
import { HomePageComponent } from "./home-page/home-page.component";
import { LocalWeatherComponent } from "./local-weather/local-weather.component";

const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent},
    { path: 'quote-machine', component: QuoteMachineComponent },
    { path: 'local-weather', component: LocalWeatherComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });