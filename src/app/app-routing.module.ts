import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'countries',
    loadChildren: () =>
      import('./features/country-standings/country-standings.module').then(
        (m) => m.CountryStandingsModule
      ),
  },
  {
    path: 'results',
    loadChildren: () =>
      import('./features/team-results/team-results.module').then(
        (m) => m.TeamResultsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
