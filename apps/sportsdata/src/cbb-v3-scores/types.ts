type Season = {
  ApiSeason?: (string | null) | undefined
  Description?: (string | null) | undefined
  EndYear?: number | undefined
  PostSeasonStartDate?: (string | null) | undefined
  RegularSeasonStartDate?: (string | null) | undefined
  Season?: number | undefined
  StartYear?: number | undefined
}
type Period = {
  AwayScore?: (number | null) | undefined
  GameID?: number | undefined
  HomeScore?: (number | null) | undefined
  Name?: (string | null) | undefined
  Number?: number | undefined
  PeriodID?: number | undefined
  Type?: (string | null) | undefined
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
type Game = {
  Attendance?: (number | null) | undefined
  AwayPointSpreadPayout?: (number | null) | undefined
  AwayRotationNumber?: (number | null) | undefined
  AwayTeam?: (string | null) | undefined
  AwayTeamID?: (number | null) | undefined
  AwayTeamMoneyLine?: (number | null) | undefined
  AwayTeamPreviousGameID?: (number | null) | undefined
  AwayTeamPreviousGlobalGameID?: (number | null) | undefined
  AwayTeamScore?: (number | null) | undefined
  AwayTeamSeed?: (number | null) | undefined
  BottomTeamPreviousGameId?: (number | null) | undefined
  Bracket?: (string | null) | undefined
  Channel?: (string | null) | undefined
  DateTime?: (string | null) | undefined
  DateTimeUTC?: (string | null) | undefined
  Day?: (string | null) | undefined
  GameEndDateTime?: (string | null) | undefined
  GameID?: number | undefined
  GlobalAwayTeamID?: (number | null) | undefined
  GlobalGameID?: number | undefined
  GlobalHomeTeamID?: (number | null) | undefined
  HomePointSpreadPayout?: (number | null) | undefined
  HomeRotationNumber?: (number | null) | undefined
  HomeTeam?: (string | null) | undefined
  HomeTeamID?: (number | null) | undefined
  HomeTeamMoneyLine?: (number | null) | undefined
  HomeTeamPreviousGameID?: (number | null) | undefined
  HomeTeamPreviousGlobalGameID?: (number | null) | undefined
  HomeTeamScore?: (number | null) | undefined
  HomeTeamSeed?: (number | null) | undefined
  IsClosed?: boolean | undefined
  NeutralVenue?: (boolean | null) | undefined
  OverPayout?: (number | null) | undefined
  OverUnder?: (number | null) | undefined
  Period?: (string | null) | undefined
  Periods?: Period[] | undefined
  PointSpread?: (number | null) | undefined
  Round?: (number | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Stadium?: Stadium | undefined
  Status?: (string | null) | undefined
  TimeRemainingMinutes?: (number | null) | undefined
  TimeRemainingSeconds?: (number | null) | undefined
  TopTeamPreviousGameId?: (number | null) | undefined
  TournamentDisplayOrder?: (number | null) | undefined
  TournamentDisplayOrderForHomeTeam?: (string | null) | undefined
  TournamentID?: (number | null) | undefined
  UnderPayout?: (number | null) | undefined
  Updated?: (string | null) | undefined
}
type Player = {
  BirthCity?: (string | null) | undefined
  BirthState?: (string | null) | undefined
  Class?: (string | null) | undefined
  FantasyAlarmPlayerID?: (number | null) | undefined
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
  PlayerID?: number | undefined
  Position?: (string | null) | undefined
  RotoWirePlayerID?: (number | null) | undefined
  RotoworldPlayerID?: (number | null) | undefined
  SportRadarPlayerID?: (string | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  Weight?: (number | null) | undefined
}
type Team = {
  Active?: boolean | undefined
  ApRank?: (number | null) | undefined
  Conference?: (string | null) | undefined
  ConferenceID?: (number | null) | undefined
  ConferenceLosses?: (number | null) | undefined
  ConferenceWins?: (number | null) | undefined
  GlobalTeamID?: number | undefined
  Key?: (string | null) | undefined
  Losses?: (number | null) | undefined
  Name?: (string | null) | undefined
  School?: (string | null) | undefined
  ShortDisplayName?: (string | null) | undefined
  Stadium?: Stadium | undefined
  TeamID?: number | undefined
  TeamLogoUrl?: (string | null) | undefined
  Wins?: (number | null) | undefined
}
type Conference = {
  ConferenceID?: number | undefined
  Name?: (string | null) | undefined
  Teams?: Team[] | undefined
}
type TeamGame = {
  Assists?: (number | null) | undefined
  AssistsPercentage?: (number | null) | undefined
  BlockedShots?: (number | null) | undefined
  BlocksPercentage?: (number | null) | undefined
  ConferenceLosses?: (number | null) | undefined
  ConferenceWins?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  DefensiveRebounds?: (number | null) | undefined
  DefensiveReboundsPercentage?: (number | null) | undefined
  EffectiveFieldGoalsPercentage?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
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
  IsGameOver?: boolean | undefined
  Losses?: (number | null) | undefined
  Minutes?: (number | null) | undefined
  Name?: (string | null) | undefined
  OffensiveRebounds?: (number | null) | undefined
  OffensiveReboundsPercentage?: (number | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentID?: (number | null) | undefined
  PersonalFouls?: (number | null) | undefined
  PlayerEfficiencyRating?: (number | null) | undefined
  Points?: (number | null) | undefined
  Possessions?: (number | null) | undefined
  Rebounds?: (number | null) | undefined
  Season?: (number | null) | undefined
  SeasonType?: (number | null) | undefined
  StatID?: number | undefined
  Steals?: (number | null) | undefined
  StealsPercentage?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  ThreePointersAttempted?: (number | null) | undefined
  ThreePointersMade?: (number | null) | undefined
  ThreePointersPercentage?: (number | null) | undefined
  TotalReboundsPercentage?: (number | null) | undefined
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
  ConferenceLosses?: (number | null) | undefined
  ConferenceWins?: (number | null) | undefined
  DefensiveRebounds?: (number | null) | undefined
  DefensiveReboundsPercentage?: (number | null) | undefined
  EffectiveFieldGoalsPercentage?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  FieldGoalsAttempted?: (number | null) | undefined
  FieldGoalsMade?: (number | null) | undefined
  FieldGoalsPercentage?: (number | null) | undefined
  FreeThrowsAttempted?: (number | null) | undefined
  FreeThrowsMade?: (number | null) | undefined
  FreeThrowsPercentage?: (number | null) | undefined
  Games?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  Losses?: (number | null) | undefined
  Minutes?: (number | null) | undefined
  Name?: (string | null) | undefined
  OffensiveRebounds?: (number | null) | undefined
  OffensiveReboundsPercentage?: (number | null) | undefined
  PersonalFouls?: (number | null) | undefined
  PlayerEfficiencyRating?: (number | null) | undefined
  Points?: (number | null) | undefined
  Possessions?: (number | null) | undefined
  Rebounds?: (number | null) | undefined
  Season?: (number | null) | undefined
  SeasonType?: (number | null) | undefined
  StatID?: number | undefined
  Steals?: (number | null) | undefined
  StealsPercentage?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  ThreePointersAttempted?: (number | null) | undefined
  ThreePointersMade?: (number | null) | undefined
  ThreePointersPercentage?: (number | null) | undefined
  TotalReboundsPercentage?: (number | null) | undefined
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
type Tournament = {
  Games?: Game[] | undefined
  LeftBottomBracketConference?: (string | null) | undefined
  LeftTopBracketConference?: (string | null) | undefined
  Location?: (string | null) | undefined
  Name?: (string | null) | undefined
  RightBottomBracketConference?: (string | null) | undefined
  RightTopBracketConference?: (string | null) | undefined
  Season?: number | undefined
  TournamentID?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
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
    '/:format/InjuredPlayers': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Player[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/LeagueHierarchy': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Conference[]
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
    '/:format/Stadiums': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Stadium[]
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
    '/:format/TeamSchedule/:season/:team': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; team: string } }
        output: Game[]
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
    '/:format/Tournament/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: Tournament
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
