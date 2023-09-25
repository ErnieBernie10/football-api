import { Component } from '@angular/core';
import { CountryStandingsService } from '../../services/country-standings.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Country } from 'src/app/shared/models/standings';

@Component({
  selector: 'fb-country-standings-overview',
  templateUrl: './country-standings-overview.component.html',
  styleUrls: ['./country-standings-overview.component.css'],
})
export class CountryStandingsOverviewComponent {
  constructor(
    private standingsService: CountryStandingsService,
    private route: ActivatedRoute
  ) {}

  countryCode$ = this.route.paramMap.pipe(
    map((p) => p.get('country') as Country ?? 'gb')
  );

  public standings$ = this.standingsService.getStandings(this.countryCode$);
}
