type Membership = {
  Active?: boolean | undefined
  EndDate?: (string | null) | undefined
  MembershipId?: number | undefined
  PlayerId?: number | undefined
  PlayerName?: (string | null) | undefined
  StartDate?: (string | null) | undefined
  TeamArea?: (string | null) | undefined
  TeamId?: number | undefined
  TeamName?: (string | null) | undefined
  Updated?: (string | null) | undefined
}
type Area = {
  AreaId?: number | undefined
  CountryCode?: (string | null) | undefined
  Name?: (string | null) | undefined
}
type Game = {
  BestOf?: (string | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  DrawMoneyLine?: (number | null) | undefined
  GameId?: number | undefined
  Group?: (string | null) | undefined
  IsClosed?: (boolean | null) | undefined
  PointSpread?: (number | null) | undefined
  RoundId?: number | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Status?: (string | null) | undefined
  TeamAId?: (number | null) | undefined
  TeamAKey?: (string | null) | undefined
  TeamAMoneyLine?: (number | null) | undefined
  TeamAName?: (string | null) | undefined
  TeamAPointSpreadPayout?: (number | null) | undefined
  TeamAScore?: (number | null) | undefined
  TeamBId?: (number | null) | undefined
  TeamBKey?: (string | null) | undefined
  TeamBMoneyLine?: (number | null) | undefined
  TeamBName?: (string | null) | undefined
  TeamBPointSpreadPayout?: (number | null) | undefined
  TeamBScore?: (number | null) | undefined
  Updated?: (string | null) | undefined
  UpdatedUtc?: (string | null) | undefined
  VenueId?: (number | null) | undefined
  VenueType?: (string | null) | undefined
  Week?: (number | null) | undefined
  Winner?: (string | null) | undefined
}
type Leaderboard = {
  Aces?: (number | null) | undefined
  Assists?: (number | null) | undefined
  AverageDamagePerRound?: (number | null) | undefined
  Clutch1v2s?: (number | null) | undefined
  Clutch1v3s?: (number | null) | undefined
  Clutch1v4s?: (number | null) | undefined
  Clutch1v5s?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  Deaths?: (number | null) | undefined
  EntryKills?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  GameId?: (number | null) | undefined
  Games?: (number | null) | undefined
  Headshots?: (number | null) | undefined
  IsClosed?: boolean | undefined
  Kast?: (number | null) | undefined
  Kills?: (number | null) | undefined
  Maps?: (number | null) | undefined
  MatchName?: (string | null) | undefined
  Name?: (string | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentId?: (number | null) | undefined
  PlayerId?: (number | null) | undefined
  QuadKills?: (number | null) | undefined
  Rating?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamId?: (number | null) | undefined
  Updated?: (string | null) | undefined
  UpdatedUtc?: (string | null) | undefined
}
type Map = {
  CurrentRound?: (number | null) | undefined
  Leaderboards?: Leaderboard[] | undefined
  Name?: (string | null) | undefined
  Number?: (number | null) | undefined
  Status?: (string | null) | undefined
  TeamAScore?: (number | null) | undefined
  TeamBScore?: (number | null) | undefined
}
type BoxScore = { Game?: Game | undefined; Maps?: Map[] | undefined }
type Round = {
  CurrentRound?: boolean | undefined
  CurrentWeek?: (number | null) | undefined
  EndDate?: (string | null) | undefined
  Name?: (string | null) | undefined
  RoundId?: number | undefined
  Season?: number | undefined
  SeasonId?: number | undefined
  SeasonType?: number | undefined
  StartDate?: (string | null) | undefined
  Type?: (string | null) | undefined
}
type Season = {
  CompetitionId?: number | undefined
  CompetitionName?: (string | null) | undefined
  CurrentSeason?: boolean | undefined
  EndDate?: (string | null) | undefined
  Name?: (string | null) | undefined
  Rounds?: Round[] | undefined
  Season?: number | undefined
  SeasonId?: number | undefined
  StartDate?: (string | null) | undefined
}
type Player = {
  BirthCity?: (string | null) | undefined
  BirthCountry?: (string | null) | undefined
  BirthDate?: (string | null) | undefined
  CommonName?: (string | null) | undefined
  FirstName?: (string | null) | undefined
  Gender?: (string | null) | undefined
  LastName?: (string | null) | undefined
  MatchName?: (string | null) | undefined
  Nationality?: (string | null) | undefined
  PlayerId?: number | undefined
  Position?: (string | null) | undefined
  Updated?: (string | null) | undefined
}
type TeamDetail = {
  Active?: boolean | undefined
  AreaId?: (number | null) | undefined
  AreaName?: (string | null) | undefined
  Email?: (string | null) | undefined
  Facebook?: (string | null) | undefined
  Founded?: (number | null) | undefined
  Gender?: (string | null) | undefined
  Instagram?: (string | null) | undefined
  Key?: (string | null) | undefined
  Name?: (string | null) | undefined
  Players?: Player[] | undefined
  PrimaryColor?: (string | null) | undefined
  QuaternaryColor?: (string | null) | undefined
  SecondaryColor?: (string | null) | undefined
  ShortName?: (string | null) | undefined
  TeamId?: number | undefined
  TertiaryColor?: (string | null) | undefined
  Twitter?: (string | null) | undefined
  Type?: (string | null) | undefined
  Website?: (string | null) | undefined
  YouTube?: (string | null) | undefined
}
type CompetitionDetail = {
  AreaId?: number | undefined
  AreaName?: (string | null) | undefined
  CompetitionId?: number | undefined
  CurrentSeason?: Season | undefined
  Format?: (string | null) | undefined
  Games?: Game[] | undefined
  Gender?: (string | null) | undefined
  Name?: (string | null) | undefined
  PlayerStatsCoverage?: (boolean | null) | undefined
  Seasons?: Season[] | undefined
  Teams?: TeamDetail[] | undefined
  Type?: (string | null) | undefined
}
type Competition = {
  AreaId?: number | undefined
  AreaName?: (string | null) | undefined
  CompetitionId?: number | undefined
  Format?: (string | null) | undefined
  Gender?: (string | null) | undefined
  Name?: (string | null) | undefined
  PlayerStatsCoverage?: (boolean | null) | undefined
  Seasons?: Season[] | undefined
  Type?: (string | null) | undefined
}
type Team = {
  Active?: boolean | undefined
  AreaId?: (number | null) | undefined
  AreaName?: (string | null) | undefined
  Email?: (string | null) | undefined
  Facebook?: (string | null) | undefined
  Founded?: (number | null) | undefined
  Gender?: (string | null) | undefined
  Instagram?: (string | null) | undefined
  Key?: (string | null) | undefined
  Name?: (string | null) | undefined
  PrimaryColor?: (string | null) | undefined
  QuaternaryColor?: (string | null) | undefined
  SecondaryColor?: (string | null) | undefined
  ShortName?: (string | null) | undefined
  TeamId?: number | undefined
  TertiaryColor?: (string | null) | undefined
  Twitter?: (string | null) | undefined
  Type?: (string | null) | undefined
  Website?: (string | null) | undefined
  YouTube?: (string | null) | undefined
}
type SeasonTeam = {
  Active?: boolean | undefined
  Gender?: (string | null) | undefined
  SeasonId?: number | undefined
  SeasonTeamId?: number | undefined
  Team?: Team | undefined
  TeamId?: number | undefined
  TeamName?: (string | null) | undefined
  Type?: (string | null) | undefined
}
type Standing = {
  Games?: number | undefined
  Group?: (string | null) | undefined
  Losses?: number | undefined
  Name?: (string | null) | undefined
  Order?: (number | null) | undefined
  Points?: number | undefined
  RoundId?: number | undefined
  ScoreAgainst?: number | undefined
  ScoreDifference?: number | undefined
  ScoreFor?: number | undefined
  StandingId?: number | undefined
  TeamId?: number | undefined
  Wins?: number | undefined
}
type Venue = {
  Address?: (string | null) | undefined
  Capacity?: (number | null) | undefined
  City?: (string | null) | undefined
  Country?: (string | null) | undefined
  GeoLat?: (number | null) | undefined
  GeoLong?: (number | null) | undefined
  Name?: (string | null) | undefined
  Nickname1?: (string | null) | undefined
  Nickname2?: (string | null) | undefined
  Open?: boolean | undefined
  Opened?: (number | null) | undefined
  VenueId?: number | undefined
  Zip?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/ActiveMemberships': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Areas': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Area[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScore/:gameid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; gameid: string } }
        output: BoxScore[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScores/:date': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string } }
        output: BoxScore[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/CompetitionDetails/:competitionid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; competitionid: string } }
        output: CompetitionDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Competitions': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Competition[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/GamesByDate/:date': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string } }
        output: Game[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/HistoricalMemberships': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/HistoricalMembershipsByTeam/:teamid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; teamid: string } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/MembershipsByTeam/:teamid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; teamid: string } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Player/:playerid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; playerid: string } }
        output: Player
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Players': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Player[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayersByTeam/:teamid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; teamid: string } }
        output: Player[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Schedule/:roundid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; roundid: string } }
        output: Game[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/SeasonTeams/:seasonid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; seasonid: string } }
        output: SeasonTeam[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Standings/:roundid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; roundid: string } }
        output: Standing[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Teams': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Team[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Venues': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Venue[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
