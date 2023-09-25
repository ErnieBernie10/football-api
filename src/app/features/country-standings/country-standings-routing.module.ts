import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryStandingsOverviewComponent } from './components/country-standings-overview/country-standings-overview.component';

const routes: Routes = [
  {
    path: ':country',
    component: CountryStandingsOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryStandingsRoutingModule {}
