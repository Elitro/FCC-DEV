/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { LocalWeatherComponent } from './local-weather.component';

describe('Component: LocalWeather', () => {
  it('should create an instance', () => {
    let component = new LocalWeatherComponent();
    expect(component).toBeTruthy();
  });
});
