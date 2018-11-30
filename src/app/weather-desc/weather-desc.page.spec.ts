import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDescPage } from './weather-desc.page';

describe('WeatherDescPage', () => {
  let component: WeatherDescPage;
  let fixture: ComponentFixture<WeatherDescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDescPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
