import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryStandingsRoutingModule } from './country-standings-routing.module';
import { CountryStandingsOverviewComponent } from './components/country-standings-overview/country-standings-overview.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CountryStandingsOverviewComponent],
  imports: [HttpClientModule, CommonModule, CountryStandingsRoutingModule],
})
export class CountryStandingsModule {}
