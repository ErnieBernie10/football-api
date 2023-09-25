import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {
  Observable,
  map,
  share,
  shareReplay,
  switchMap,
  take,
  tap,
  timer,
} from 'rxjs';
import {
  Country,
  FootballResponse,
  LeagueResponse,
} from 'src/app/shared/models/standings';
import { CountryLeagueService } from 'src/app/shared/services/country-league.service';

@Injectable({
  providedIn: 'root',
})
export class CountryStandingsService {
  constructor(
    private http: HttpClient,
    private countryLeagueService: CountryLeagueService
  ) {}

  getStandings(countryCode$: Observable<Country>) {
    return countryCode$.pipe(
      switchMap((countryCode) =>
        this.http.get<FootballResponse<LeagueResponse[]>>(
          `standings?season=${new Date().getFullYear()}&league=${this.countryLeagueService.getLeague(
            countryCode
          )}`
        )
      ),
      map((value) => value.response.map((response) => response.league)),
    );
  }
}
