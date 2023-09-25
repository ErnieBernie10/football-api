 

interface Parameters {
  league: string;
  team: string;
  season: string;
}

interface Paging {
  current: number;
  total: number;
}

interface Periods {
  first?: number;
  second?: number;
}

interface Venue {
  id: number;
  name: string;
  city: string;
}

interface Status {
  long: string;
  short: string;
  elapsed?: number;
}

interface Fixture {
  id: number;
  referee?: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Home {
  id: number;
  name: string;
  logo: string;
  winner?: boolean;
}

interface Teams {
  home: Home;
  away: Home;
}

interface Goals {
  home?: number;
  away?: number;
}

interface Extratime {
  home?: any;
  away?: any;
}

interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Extratime;
  penalty: Extratime;
}

export interface MatchResult {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}