import { Injectable } from '@angular/core';
import { Country } from '../models/standings';

@Injectable({
  providedIn: 'root',
})
export class CountryLeagueService {
  private leagues: Record<Country, number> = {
    gb: 39,
    es: 140,
    fr: 61,
    de: 78,
    it: 135,
  };

  constructor() {}

  getLeague(country: Country): number {
    return this.leagues[country];
  }
}
