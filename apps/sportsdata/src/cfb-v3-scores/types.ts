type Season = {
  ApiSeason?: (string | null) | undefined
  ApiWeek?: (number | null) | undefined
  Description?: (string | null) | undefined
  EndYear?: number | undefined
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
}
type Stadium = {
  Active?: boolean | undefined
  City?: (string | null) | undefined
  Dome?: boolean | undefined
  GeoLat?: (number | null) | undefined
  GeoLong?: (number | null) | undefined
  Name?: (string | null) | undefined
  StadiumID?: number | undefined
  State?: (string | null) | undefined
}
type Game = {
  Attendance?: (number | null) | undefined
  AwayPointSpreadPayout?: (number | null) | undefined
  AwayRotationNumber?: (number | null) | undefined
  AwayTeam?: (string | null) | undefined
  AwayTeamID?: number | undefined
  AwayTeamMoneyLine?: (number | null) | undefined
  AwayTeamName?: (string | null) | undefined
  AwayTeamScore?: (number | null) | undefined
  Channel?: (string | null) | undefined
  Created?: (string | null) | undefined
  DateTime?: (string | null) | undefined
  DateTimeUTC?: (string | null) | undefined
  Day?: (string | null) | undefined
  Distance?: (number | null) | undefined
  Down?: (number | null) | undefined
  GameEndDateTime?: (string | null) | undefined
  GameID?: number | undefined
  GlobalAwayTeamID?: number | undefined
  GlobalGameID?: number | undefined
  GlobalHomeTeamID?: number | undefined
  HomePointSpreadPayout?: (number | null) | undefined
  HomeRotationNumber?: (number | null) | undefined
  HomeTeam?: (string | null) | undefined
  HomeTeamID?: number | undefined
  HomeTeamMoneyLine?: (number | null) | undefined
  HomeTeamName?: (string | null) | undefined
  HomeTeamScore?: (number | null) | undefined
  IsClosed?: boolean | undefined
  NeutralVenue?: (boolean | null) | undefined
  OverPayout?: (number | null) | undefined
  OverUnder?: (number | null) | undefined
  Period?: (string | null) | undefined
  Periods?: Period[] | undefined
  PointSpread?: (number | null) | undefined
  Possession?: (string | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Stadium?: Stadium | undefined
  StadiumID?: (number | null) | undefined
  Status?: (string | null) | undefined
  TimeRemainingMinutes?: (number | null) | undefined
  TimeRemainingSeconds?: (number | null) | undefined
  Title?: (string | null) | undefined
  UnderPayout?: (number | null) | undefined
  Updated?: (string | null) | undefined
  Week?: (number | null) | undefined
  YardLine?: (number | null) | undefined
  YardLineTerritory?: (string | null) | undefined
}
type Player = {
  BirthCity?: (string | null) | undefined
  BirthState?: (string | null) | undefined
  Class?: (string | null) | undefined
  Created?: (string | null) | undefined
  FirstName?: (string | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  Height?: (number | null) | undefined
  InjuryBodyPart?: (string | null) | undefined
  InjuryNotes?: (string | null) | undefined
  InjuryStartDate?: (string | null) | undefined
  InjuryStatus?: (string | null) | undefined
  Jersey?: (number | null) | undefined
  LastName?: (string | null) | undefined
  PlayerID?: number | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  Updated?: (string | null) | undefined
  Weight?: (number | null) | undefined
}
type Team = {
  Active?: boolean | undefined
  ApRank?: (number | null) | undefined
  CoachesRank?: (number | null) | undefined
  Conference?: (string | null) | undefined
  ConferenceID?: (number | null) | undefined
  ConferenceLosses?: (number | null) | undefined
  ConferenceWins?: (number | null) | undefined
  GlobalTeamID?: number | undefined
  Key?: (string | null) | undefined
  Losses?: (number | null) | undefined
  Name?: (string | null) | undefined
  PlayoffRank?: (number | null) | undefined
  RankSeason?: (number | null) | undefined
  RankSeasonType?: (number | null) | undefined
  RankWeek?: (number | null) | undefined
  School?: (string | null) | undefined
  ShortDisplayName?: (string | null) | undefined
  StadiumID?: number | undefined
  TeamID?: number | undefined
  TeamLogoUrl?: (string | null) | undefined
  Wins?: (number | null) | undefined
}
type Conference = {
  ConferenceID?: number | undefined
  ConferenceName?: (string | null) | undefined
  DivisionName?: (string | null) | undefined
  Name?: (string | null) | undefined
  Teams?: Team[] | undefined
}
type TeamGame = {
  AssistedTackles?: (number | null) | undefined
  Created?: (string | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  ExtraPointsAttempted?: (number | null) | undefined
  ExtraPointsMade?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FieldGoalPercentage?: (number | null) | undefined
  FieldGoalsAttempted?: (number | null) | undefined
  FieldGoalsLongestMade?: (number | null) | undefined
  FieldGoalsMade?: (number | null) | undefined
  FirstDowns?: (number | null) | undefined
  FourthDownAttempts?: (number | null) | undefined
  FourthDownConversions?: (number | null) | undefined
  FumbleReturnTouchdowns?: (number | null) | undefined
  Fumbles?: (number | null) | undefined
  FumblesLost?: (number | null) | undefined
  FumblesRecovered?: (number | null) | undefined
  GameID?: (number | null) | undefined
  Games?: (number | null) | undefined
  GlobalGameID?: (number | null) | undefined
  GlobalOpponentID?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  HomeOrAway?: (string | null) | undefined
  InterceptionReturnTouchdowns?: (number | null) | undefined
  InterceptionReturnYards?: (number | null) | undefined
  Interceptions?: (number | null) | undefined
  IsGameOver?: boolean | undefined
  KickReturnLong?: (number | null) | undefined
  KickReturnTouchdowns?: (number | null) | undefined
  KickReturnYards?: (number | null) | undefined
  KickReturnYardsPerAttempt?: (number | null) | undefined
  KickReturns?: (number | null) | undefined
  Name?: (string | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentID?: (number | null) | undefined
  OpponentScore?: (number | null) | undefined
  PassesDefended?: (number | null) | undefined
  PassingAttempts?: (number | null) | undefined
  PassingCompletionPercentage?: (number | null) | undefined
  PassingCompletions?: (number | null) | undefined
  PassingInterceptions?: (number | null) | undefined
  PassingRating?: (number | null) | undefined
  PassingTouchdowns?: (number | null) | undefined
  PassingYards?: (number | null) | undefined
  PassingYardsPerAttempt?: (number | null) | undefined
  PassingYardsPerCompletion?: (number | null) | undefined
  Penalties?: (number | null) | undefined
  PenaltyYards?: (number | null) | undefined
  PuntAverage?: (number | null) | undefined
  PuntLong?: (number | null) | undefined
  PuntReturnLong?: (number | null) | undefined
  PuntReturnTouchdowns?: (number | null) | undefined
  PuntReturnYards?: (number | null) | undefined
  PuntReturnYardsPerAttempt?: (number | null) | undefined
  PuntReturns?: (number | null) | undefined
  PuntYards?: (number | null) | undefined
  Punts?: (number | null) | undefined
  QuarterbackHurries?: (number | null) | undefined
  ReceivingLong?: (number | null) | undefined
  ReceivingTouchdowns?: (number | null) | undefined
  ReceivingYards?: (number | null) | undefined
  ReceivingYardsPerReception?: (number | null) | undefined
  Receptions?: (number | null) | undefined
  RushingAttempts?: (number | null) | undefined
  RushingLong?: (number | null) | undefined
  RushingTouchdowns?: (number | null) | undefined
  RushingYards?: (number | null) | undefined
  RushingYardsPerAttempt?: (number | null) | undefined
  Sacks?: (number | null) | undefined
  Score?: (number | null) | undefined
  Season?: (number | null) | undefined
  SeasonType?: (number | null) | undefined
  SoloTackles?: (number | null) | undefined
  StatID?: number | undefined
  TacklesForLoss?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  ThirdDownAttempts?: (number | null) | undefined
  ThirdDownConversions?: (number | null) | undefined
  TimeOfPossessionMinutes?: (number | null) | undefined
  TimeOfPossessionSeconds?: (number | null) | undefined
  Updated?: (string | null) | undefined
  Week?: (number | null) | undefined
}
type TeamSeason = {
  AssistedTackles?: (number | null) | undefined
  ConferenceLosses?: (number | null) | undefined
  ConferencePointsAgainst?: (number | null) | undefined
  ConferencePointsFor?: (number | null) | undefined
  ConferenceRank?: (number | null) | undefined
  ConferenceWins?: (number | null) | undefined
  Created?: (string | null) | undefined
  DivisionRank?: (number | null) | undefined
  ExtraPointsAttempted?: (number | null) | undefined
  ExtraPointsMade?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FieldGoalPercentage?: (number | null) | undefined
  FieldGoalsAttempted?: (number | null) | undefined
  FieldGoalsLongestMade?: (number | null) | undefined
  FieldGoalsMade?: (number | null) | undefined
  FirstDowns?: (number | null) | undefined
  FourthDownAttempts?: (number | null) | undefined
  FourthDownConversions?: (number | null) | undefined
  FumbleReturnTouchdowns?: (number | null) | undefined
  Fumbles?: (number | null) | undefined
  FumblesLost?: (number | null) | undefined
  FumblesRecovered?: (number | null) | undefined
  Games?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  HomeLosses?: (number | null) | undefined
  HomeWins?: (number | null) | undefined
  InterceptionReturnTouchdowns?: (number | null) | undefined
  InterceptionReturnYards?: (number | null) | undefined
  Interceptions?: (number | null) | undefined
  KickReturnLong?: (number | null) | undefined
  KickReturnTouchdowns?: (number | null) | undefined
  KickReturnYards?: (number | null) | undefined
  KickReturnYardsPerAttempt?: (number | null) | undefined
  KickReturns?: (number | null) | undefined
  Losses?: (number | null) | undefined
  Name?: (string | null) | undefined
  OpponentScore?: (number | null) | undefined
  PassesDefended?: (number | null) | undefined
  PassingAttempts?: (number | null) | undefined
  PassingCompletionPercentage?: (number | null) | undefined
  PassingCompletions?: (number | null) | undefined
  PassingInterceptions?: (number | null) | undefined
  PassingRating?: (number | null) | undefined
  PassingTouchdowns?: (number | null) | undefined
  PassingYards?: (number | null) | undefined
  PassingYardsPerAttempt?: (number | null) | undefined
  PassingYardsPerCompletion?: (number | null) | undefined
  Penalties?: (number | null) | undefined
  PenaltyYards?: (number | null) | undefined
  PointsAgainst?: (number | null) | undefined
  PointsFor?: (number | null) | undefined
  PuntAverage?: (number | null) | undefined
  PuntLong?: (number | null) | undefined
  PuntReturnLong?: (number | null) | undefined
  PuntReturnTouchdowns?: (number | null) | undefined
  PuntReturnYards?: (number | null) | undefined
  PuntReturnYardsPerAttempt?: (number | null) | undefined
  PuntReturns?: (number | null) | undefined
  PuntYards?: (number | null) | undefined
  Punts?: (number | null) | undefined
  QuarterbackHurries?: (number | null) | undefined
  ReceivingLong?: (number | null) | undefined
  ReceivingTouchdowns?: (number | null) | undefined
  ReceivingYards?: (number | null) | undefined
  ReceivingYardsPerReception?: (number | null) | undefined
  Receptions?: (number | null) | undefined
  RoadLosses?: (number | null) | undefined
  RoadWins?: (number | null) | undefined
  RushingAttempts?: (number | null) | undefined
  RushingLong?: (number | null) | undefined
  RushingTouchdowns?: (number | null) | undefined
  RushingYards?: (number | null) | undefined
  RushingYardsPerAttempt?: (number | null) | undefined
  Sacks?: (number | null) | undefined
  Score?: (number | null) | undefined
  Season?: (number | null) | undefined
  SeasonType?: (number | null) | undefined
  SoloTackles?: (number | null) | undefined
  StatID?: number | undefined
  Streak?: (number | null) | undefined
  TacklesForLoss?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  ThirdDownAttempts?: (number | null) | undefined
  ThirdDownConversions?: (number | null) | undefined
  TimeOfPossessionMinutes?: (number | null) | undefined
  TimeOfPossessionSeconds?: (number | null) | undefined
  Updated?: (string | null) | undefined
  Wins?: (number | null) | undefined
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
        output: number
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/CurrentSeasonDetails': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Season
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/CurrentSeasonType': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: string | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/CurrentWeek': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: number | null
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
    '/:format/GamesByWeek/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
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
        output: Player[]
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
    '/:format/TeamGameStatsByWeek/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
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
    '/:format/Teams': {
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
