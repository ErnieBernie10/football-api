import { Component } from '@angular/core';
import { TeamResultsService } from '../../services/team-results.service';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { Country } from 'src/app/shared/models/standings';

@Component({
  selector: 'fb-team-results-overview',
  templateUrl: './team-results-overview.component.html',
  styleUrls: ['./team-results-overview.component.scss'],
})
export class TeamResultsOverviewComponent {
  constructor(
    private resultsService: TeamResultsService,
    private route: ActivatedRoute
  ) {}

  teamId$ = this.route.paramMap.pipe(map((p) => p.get('id') ?? ''));

  countryCode$ = this.route.queryParamMap.pipe(
    map((p) => (p.get('country') as Country) ?? 'gb')
  );

  results$ = this.resultsService.getTeamResults(
    this.teamId$,
    this.countryCode$
  );
}
