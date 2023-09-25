import { TestBed } from '@angular/core/testing';

import { FootballApiInterceptor } from './football-api.interceptor';

describe('FootballApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FootballApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FootballApiInterceptor = TestBed.inject(FootballApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
