import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  switchMap,
  map,
  tap,
  mergeMap,
  forkJoin,
  combineLatest,
  take,
} from 'rxjs';
import { Country, FootballResponse } from 'src/app/shared/models/standings';
import { MatchResult } from 'src/app/shared/models/fixtures';
import { CountryLeagueService } from 'src/app/shared/services/country-league.service';

@Injectable({
  providedIn: 'root',
})
export class TeamResultsService {
  constructor(
    private http: HttpClient,
    private countryLeagueService: CountryLeagueService
  ) {}

  getTeamResults(teamId$: Observable<string>, country$: Observable<Country>) {
    return combineLatest([teamId$, country$]).pipe(
      switchMap(([teamId, countryCode]) =>
        this.http.get<FootballResponse<MatchResult[]>>(`fixtures`, {
          params: {
            team: teamId,
            season: new Date().getFullYear(),
            league: this.countryLeagueService.getLeague(countryCode),
          },
        })
      ),
      map((value) => value.response.map((response) => response).slice(0, 10))
    );
  }
}
