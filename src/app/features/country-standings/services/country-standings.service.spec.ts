/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountryStandingsService } from './country-standings.service';

describe('Service: CountryStandings', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryStandingsService]
    });
  });

  it('should ...', inject([CountryStandingsService], (service: CountryStandingsService) => {
    expect(service).toBeTruthy();
  }));
});
