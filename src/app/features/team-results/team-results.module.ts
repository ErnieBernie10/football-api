import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamResultsRoutingModule } from './team-results-routing.module';
import { TeamResultsOverviewComponent } from './components/team-results-overview/team-results-overview.component';


@NgModule({
  declarations: [
    TeamResultsOverviewComponent
  ],
  imports: [
    CommonModule,
    TeamResultsRoutingModule
  ]
})
export class TeamResultsModule { }
