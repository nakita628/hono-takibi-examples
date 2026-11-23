type Team = {
  Active?: boolean | undefined
  City?: (string | null) | undefined
  Conference?: (string | null) | undefined
  Division?: (string | null) | undefined
  GlobalTeamID?: number | undefined
  Key?: (string | null) | undefined
  LeagueID?: (number | null) | undefined
  Name?: (string | null) | undefined
  NbaDotComTeamID?: (number | null) | undefined
  PrimaryColor?: (string | null) | undefined
  QuaternaryColor?: (string | null) | undefined
  SecondaryColor?: (string | null) | undefined
  StadiumID?: (number | null) | undefined
  TeamID?: number | undefined
  TertiaryColor?: (string | null) | undefined
  WikipediaLogoUrl?: (string | null) | undefined
  WikipediaWordMarkUrl?: (string | null) | undefined
}
type Season = {
  ApiSeason?: (string | null) | undefined
  Description?: (string | null) | undefined
  EndYear?: number | undefined
  PostSeasonStartDate?: (string | null) | undefined
  RegularSeasonStartDate?: (string | null) | undefined
  Season?: number | undefined
  SeasonType?: (string | null) | undefined
  StartYear?: number | undefined
}
type DepthChart = {
  DepthChartID?: number | undefined
  DepthOrder?: (number | null) | undefined
  Name?: (string | null) | undefined
  PlayerID?: (number | null) | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  TeamID?: number | undefined
  Updated?: (string | null) | undefined
}
type TeamDepthChart = { DepthCharts?: DepthChart[] | undefined; TeamID?: number | undefined }
type Player = {
  BirthCity?: (string | null) | undefined
  BirthCountry?: (string | null) | undefined
  BirthDate?: (string | null) | undefined
  BirthState?: (string | null) | undefined
  College?: (string | null) | undefined
  DepthChartOrder?: (number | null) | undefined
  DepthChartPosition?: (string | null) | undefined
  DraftKingsName?: (string | null) | undefined
  DraftKingsPlayerID?: (number | null) | undefined
  Experience?: (number | null) | undefined
  FanDuelName?: (string | null) | undefined
  FanDuelPlayerID?: (number | null) | undefined
  FantasyAlarmPlayerID?: (number | null) | undefined
  FantasyDraftName?: (string | null) | undefined
  FantasyDraftPlayerID?: (number | null) | undefined
  FirstName?: (string | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  Height?: (number | null) | undefined
  HighSchool?: (string | null) | undefined
  InjuryBodyPart?: (string | null) | undefined
  InjuryNotes?: (string | null) | undefined
  InjuryStartDate?: (string | null) | undefined
  InjuryStatus?: (string | null) | undefined
  Jersey?: (number | null) | undefined
  LastName?: (string | null) | undefined
  NbaDotComPlayerID?: (number | null) | undefined
  PhotoUrl?: (string | null) | undefined
  PlayerID?: number | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  RotoWirePlayerID?: (number | null) | undefined
  RotoworldPlayerID?: (number | null) | undefined
  Salary?: (number | null) | undefined
  SportRadarPlayerID?: (string | null) | undefined
  SportsDataID?: (string | null) | undefined
  SportsDirectPlayerID?: (number | null) | undefined
  StatsPlayerID?: (number | null) | undefined
  Status?: (string | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  UsaTodayHeadshotNoBackgroundUpdated?: (string | null) | undefined
  UsaTodayHeadshotNoBackgroundUrl?: (string | null) | undefined
  UsaTodayHeadshotUpdated?: (string | null) | undefined
  UsaTodayHeadshotUrl?: (string | null) | undefined
  UsaTodayPlayerID?: (number | null) | undefined
  Weight?: (number | null) | undefined
  XmlTeamPlayerID?: (number | null) | undefined
  YahooName?: (string | null) | undefined
  YahooPlayerID?: (number | null) | undefined
}
type Quarter = {
  AwayScore?: (number | null) | undefined
  GameID?: number | undefined
  HomeScore?: (number | null) | undefined
  Name?: (string | null) | undefined
  Number?: number | undefined
  QuarterID?: number | undefined
}
type Series = {
  AwayTeamWins?: number | undefined
  GameNumber?: number | undefined
  HomeTeamWins?: number | undefined
  MaxLength?: number | undefined
}
type Game = {
  AlternateID?: (number | null) | undefined
  Attendance?: (number | null) | undefined
  AwayRotationNumber?: (number | null) | undefined
  AwayTeam?: (string | null) | undefined
  AwayTeamID?: number | undefined
  AwayTeamMoneyLine?: (number | null) | undefined
  AwayTeamScore?: (number | null) | undefined
  Channel?: (string | null) | undefined
  CrewChiefID?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  DateTimeUTC?: (string | null) | undefined
  Day?: (string | null) | undefined
  GameEndDateTime?: (string | null) | undefined
  GameID?: number | undefined
  GlobalAwayTeamID?: number | undefined
  GlobalGameID?: number | undefined
  GlobalHomeTeamID?: number | undefined
  HomeRotationNumber?: (number | null) | undefined
  HomeTeam?: (string | null) | undefined
  HomeTeamID?: number | undefined
  HomeTeamMoneyLine?: (number | null) | undefined
  HomeTeamScore?: (number | null) | undefined
  IsClosed?: boolean | undefined
  LastPlay?: (string | null) | undefined
  NeutralVenue?: (boolean | null) | undefined
  OverPayout?: (number | null) | undefined
  OverUnder?: (number | null) | undefined
  PointSpread?: (number | null) | undefined
  PointSpreadAwayTeamMoneyLine?: (number | null) | undefined
  PointSpreadHomeTeamMoneyLine?: (number | null) | undefined
  Quarter?: (string | null) | undefined
  Quarters?: Quarter[] | undefined
  RefereeID?: (number | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  SeriesInfo?: Series | undefined
  StadiumID?: (number | null) | undefined
  Status?: (string | null) | undefined
  TimeRemainingMinutes?: (number | null) | undefined
  TimeRemainingSeconds?: (number | null) | undefined
  UmpireID?: (number | null) | undefined
  UnderPayout?: (number | null) | undefined
  Updated?: (string | null) | undefined
}
type News = {
  Author?: (string | null) | undefined
  Categories?: (string | null) | undefined
  Content?: (string | null) | undefined
  NewsID?: number | undefined
  OriginalSource?: (string | null) | undefined
  OriginalSourceUrl?: (string | null) | undefined
  PlayerID?: (number | null) | undefined
  PlayerID2?: (number | null) | undefined
  Source?: (string | null) | undefined
  Team?: (string | null) | undefined
  Team2?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  TeamID2?: (number | null) | undefined
  TermsOfUse?: (string | null) | undefined
  TimeAgo?: (string | null) | undefined
  Title?: (string | null) | undefined
  Updated?: (string | null) | undefined
  Url?: (string | null) | undefined
}
type Referee = {
  College?: (string | null) | undefined
  Experience?: (number | null) | undefined
  Name?: (string | null) | undefined
  Number?: (number | null) | undefined
  Position?: (string | null) | undefined
  RefereeID?: number | undefined
}
type Stadium = {
  Active?: boolean | undefined
  Address?: (string | null) | undefined
  Capacity?: (number | null) | undefined
  City?: (string | null) | undefined
  Country?: (string | null) | undefined
  GeoLat?: (number | null) | undefined
  GeoLong?: (number | null) | undefined
  Name?: (string | null) | undefined
  StadiumID?: number | undefined
  State?: (string | null) | undefined
  Zip?: (string | null) | undefined
}
type Standing = {
  AwayLosses?: (number | null) | undefined
  AwayWins?: (number | null) | undefined
  City?: (string | null) | undefined
  Conference?: (string | null) | undefined
  ConferenceLosses?: (number | null) | undefined
  ConferenceRank?: (number | null) | undefined
  ConferenceWins?: (number | null) | undefined
  Division?: (string | null) | undefined
  DivisionLosses?: (number | null) | undefined
  DivisionRank?: (number | null) | undefined
  DivisionWins?: (number | null) | undefined
  GamesBack?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  HomeLosses?: (number | null) | undefined
  HomeWins?: (number | null) | undefined
  Key?: (string | null) | undefined
  LastTenLosses?: (number | null) | undefined
  LastTenWins?: (number | null) | undefined
  Losses?: (number | null) | undefined
  Name?: (string | null) | undefined
  Percentage?: (number | null) | undefined
  PointsPerGameAgainst?: (number | null) | undefined
  PointsPerGameFor?: (number | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Streak?: (number | null) | undefined
  StreakDescription?: (string | null) | undefined
  TeamID?: number | undefined
  Wins?: (number | null) | undefined
}
type TeamGame = {
  Assists?: (number | null) | undefined
  AssistsPercentage?: (number | null) | undefined
  BlockedShots?: (number | null) | undefined
  BlocksPercentage?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  DefensiveRebounds?: (number | null) | undefined
  DefensiveReboundsPercentage?: (number | null) | undefined
  DoubleDoubles?: (number | null) | undefined
  EffectiveFieldGoalsPercentage?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsFantasyDraft?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  FieldGoalsAttempted?: (number | null) | undefined
  FieldGoalsMade?: (number | null) | undefined
  FieldGoalsPercentage?: (number | null) | undefined
  FreeThrowsAttempted?: (number | null) | undefined
  FreeThrowsMade?: (number | null) | undefined
  FreeThrowsPercentage?: (number | null) | undefined
  GameID?: (number | null) | undefined
  Games?: (number | null) | undefined
  GlobalGameID?: (number | null) | undefined
  GlobalOpponentID?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  HomeOrAway?: (string | null) | undefined
  IsClosed?: boolean | undefined
  IsGameOver?: boolean | undefined
  LineupConfirmed?: (boolean | null) | undefined
  LineupStatus?: (string | null) | undefined
  Losses?: (number | null) | undefined
  Minutes?: (number | null) | undefined
  Name?: (string | null) | undefined
  OffensiveRebounds?: (number | null) | undefined
  OffensiveReboundsPercentage?: (number | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentID?: (number | null) | undefined
  PersonalFouls?: (number | null) | undefined
  PlayerEfficiencyRating?: (number | null) | undefined
  PlusMinus?: (number | null) | undefined
  Points?: (number | null) | undefined
  Possessions?: (number | null) | undefined
  Rebounds?: (number | null) | undefined
  Season?: (number | null) | undefined
  SeasonType?: (number | null) | undefined
  Seconds?: (number | null) | undefined
  StatID?: number | undefined
  Steals?: (number | null) | undefined
  StealsPercentage?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  ThreePointersAttempted?: (number | null) | undefined
  ThreePointersMade?: (number | null) | undefined
  ThreePointersPercentage?: (number | null) | undefined
  TotalReboundsPercentage?: (number | null) | undefined
  TripleDoubles?: (number | null) | undefined
  TrueShootingAttempts?: (number | null) | undefined
  TrueShootingPercentage?: (number | null) | undefined
  TurnOversPercentage?: (number | null) | undefined
  Turnovers?: (number | null) | undefined
  TwoPointersAttempted?: (number | null) | undefined
  TwoPointersMade?: (number | null) | undefined
  TwoPointersPercentage?: (number | null) | undefined
  Updated?: (string | null) | undefined
  UsageRatePercentage?: (number | null) | undefined
  Wins?: (number | null) | undefined
}
type OpponentSeason = {
  Assists?: (number | null) | undefined
  AssistsPercentage?: (number | null) | undefined
  BlockedShots?: (number | null) | undefined
  BlocksPercentage?: (number | null) | undefined
  DefensiveRebounds?: (number | null) | undefined
  DefensiveReboundsPercentage?: (number | null) | undefined
  DoubleDoubles?: (number | null) | undefined
  EffectiveFieldGoalsPercentage?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsFantasyDraft?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  FieldGoalsAttempted?: (number | null) | undefined
  FieldGoalsMade?: (number | null) | undefined
  FieldGoalsPercentage?: (number | null) | undefined
  FreeThrowsAttempted?: (number | null) | undefined
  FreeThrowsMade?: (number | null) | undefined
  FreeThrowsPercentage?: (number | null) | undefined
  Games?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  IsClosed?: boolean | undefined
  LineupConfirmed?: (boolean | null) | undefined
  LineupStatus?: (string | null) | undefined
  Losses?: (number | null) | undefined
  Minutes?: (number | null) | undefined
  Name?: (string | null) | undefined
  OffensiveRebounds?: (number | null) | undefined
  OffensiveReboundsPercentage?: (number | null) | undefined
  OpponentPosition?: (string | null) | undefined
  PersonalFouls?: (number | null) | undefined
  PlayerEfficiencyRating?: (number | null) | undefined
  PlusMinus?: (number | null) | undefined
  Points?: (number | null) | undefined
  Possessions?: (number | null) | undefined
  Rebounds?: (number | null) | undefined
  Season?: (number | null) | undefined
  SeasonType?: (number | null) | undefined
  Seconds?: (number | null) | undefined
  StatID?: number | undefined
  Steals?: (number | null) | undefined
  StealsPercentage?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  ThreePointersAttempted?: (number | null) | undefined
  ThreePointersMade?: (number | null) | undefined
  ThreePointersPercentage?: (number | null) | undefined
  TotalReboundsPercentage?: (number | null) | undefined
  TripleDoubles?: (number | null) | undefined
  TrueShootingAttempts?: (number | null) | undefined
  TrueShootingPercentage?: (number | null) | undefined
  TurnOversPercentage?: (number | null) | undefined
  Turnovers?: (number | null) | undefined
  TwoPointersAttempted?: (number | null) | undefined
  TwoPointersMade?: (number | null) | undefined
  TwoPointersPercentage?: (number | null) | undefined
  Updated?: (string | null) | undefined
  UsageRatePercentage?: (number | null) | undefined
  Wins?: (number | null) | undefined
}
type TeamSeason = {
  Assists?: (number | null) | undefined
  AssistsPercentage?: (number | null) | undefined
  BlockedShots?: (number | null) | undefined
  BlocksPercentage?: (number | null) | undefined
  DefensiveRebounds?: (number | null) | undefined
  DefensiveReboundsPercentage?: (number | null) | undefined
  DoubleDoubles?: (number | null) | undefined
  EffectiveFieldGoalsPercentage?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsFantasyDraft?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  FieldGoalsAttempted?: (number | null) | undefined
  FieldGoalsMade?: (number | null) | undefined
  FieldGoalsPercentage?: (number | null) | undefined
  FreeThrowsAttempted?: (number | null) | undefined
  FreeThrowsMade?: (number | null) | undefined
  FreeThrowsPercentage?: (number | null) | undefined
  Games?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  IsClosed?: boolean | undefined
  LineupConfirmed?: (boolean | null) | undefined
  LineupStatus?: (string | null) | undefined
  Losses?: (number | null) | undefined
  Minutes?: (number | null) | undefined
  Name?: (string | null) | undefined
  OffensiveRebounds?: (number | null) | undefined
  OffensiveReboundsPercentage?: (number | null) | undefined
  OpponentPosition?: (string | null) | undefined
  OpponentStat?: OpponentSeason | undefined
  PersonalFouls?: (number | null) | undefined
  PlayerEfficiencyRating?: (number | null) | undefined
  PlusMinus?: (number | null) | undefined
  Points?: (number | null) | undefined
  Possessions?: (number | null) | undefined
  Rebounds?: (number | null) | undefined
  Season?: (number | null) | undefined
  SeasonType?: (number | null) | undefined
  Seconds?: (number | null) | undefined
  StatID?: number | undefined
  Steals?: (number | null) | undefined
  StealsPercentage?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  ThreePointersAttempted?: (number | null) | undefined
  ThreePointersMade?: (number | null) | undefined
  ThreePointersPercentage?: (number | null) | undefined
  TotalReboundsPercentage?: (number | null) | undefined
  TripleDoubles?: (number | null) | undefined
  TrueShootingAttempts?: (number | null) | undefined
  TrueShootingPercentage?: (number | null) | undefined
  TurnOversPercentage?: (number | null) | undefined
  Turnovers?: (number | null) | undefined
  TwoPointersAttempted?: (number | null) | undefined
  TwoPointersMade?: (number | null) | undefined
  TwoPointersPercentage?: (number | null) | undefined
  Updated?: (string | null) | undefined
  UsageRatePercentage?: (number | null) | undefined
  Wins?: (number | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/AllTeams': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Team[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/AreAnyGamesInProgress': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/CurrentSeason': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Season
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/DepthCharts': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: TeamDepthChart[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/FreeAgents': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Player[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Games/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: Game[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/GamesByDate/:date': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; date: string } }
        output: Game[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/News': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: News[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/NewsByDate/:date': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; date: string } }
        output: News[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/NewsByPlayerID/:playerid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; playerid: string } }
        output: News[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Player/:playerid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; playerid: string } }
        output: Player
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Players': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Player[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Players/:team': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; team: string } }
        output: Player[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Referees': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Referee[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Stadiums': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Stadium[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Standings/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: Standing[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/TeamGameStatsByDate/:date': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; date: string } }
        output: TeamGame[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/TeamGameStatsBySeason/:season/:teamid/:numberofgames': {
      $get: {
        input: {
          param: { format: 'XML' | 'JSON'; season: string; teamid: string; numberofgames: string }
        }
        output: TeamGame[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/TeamSeasonStats/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: TeamSeason[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/teams': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Team[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
