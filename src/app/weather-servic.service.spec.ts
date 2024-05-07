import { TestBed } from '@angular/core/testing';

import { WeatherServicService } from './weather-servic.service';

describe('WeatherServicService', () => {
  let service: WeatherServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
