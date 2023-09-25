import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamResultsOverviewComponent } from './components/team-results-overview/team-results-overview.component';

const routes: Routes = [
  { path: ':id', component: TeamResultsOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamResultsRoutingModule {}
