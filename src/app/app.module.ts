import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FootballApiInterceptor } from './shared/football-api/football-api.interceptor';
import { CountryStandingsModule } from './features/country-standings/country-standings.module';
import { CacheMapService } from './shared/services/cache-map.service';
import { CachingInterceptor } from './shared/caching/caching.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CountryStandingsModule],
  providers: [
    CacheMapService,
    { provide: Cache, useClass: CacheMapService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FootballApiInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
