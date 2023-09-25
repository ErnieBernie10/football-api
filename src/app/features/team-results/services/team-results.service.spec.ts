import { TestBed } from '@angular/core/testing';

import { TeamResultsService } from './team-results.service';

describe('TeamResultsService', () => {
  let service: TeamResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
