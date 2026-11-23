type PlayStat = {
  AssistedTackles?: (number | null) | undefined
  BlockedKickReturnTouchdowns?: (number | null) | undefined
  BlockedKickReturnYards?: (number | null) | undefined
  BlockedKickReturns?: (number | null) | undefined
  BlockedKicks?: (number | null) | undefined
  Created?: (string | null) | undefined
  Direction?: (string | null) | undefined
  ExtraPointsAttempted?: (number | null) | undefined
  ExtraPointsHadBlocked?: (number | null) | undefined
  ExtraPointsMade?: (number | null) | undefined
  FieldGoalReturnTouchdowns?: (number | null) | undefined
  FieldGoalReturnYards?: (number | null) | undefined
  FieldGoalReturns?: (number | null) | undefined
  FieldGoalsAttempted?: (number | null) | undefined
  FieldGoalsHadBlocked?: (number | null) | undefined
  FieldGoalsMade?: (number | null) | undefined
  FieldGoalsYards?: (number | null) | undefined
  FumbleReturnTouchdowns?: (number | null) | undefined
  FumbleReturnYards?: (number | null) | undefined
  Fumbles?: (number | null) | undefined
  FumblesForced?: (number | null) | undefined
  FumblesLost?: (number | null) | undefined
  FumblesRecovered?: (number | null) | undefined
  HomeOrAway?: (string | null) | undefined
  InterceptionReturnTouchdowns?: (number | null) | undefined
  InterceptionReturnYards?: (number | null) | undefined
  Interceptions?: (number | null) | undefined
  KickReturnTouchdowns?: (number | null) | undefined
  KickReturnYards?: (number | null) | undefined
  KickReturns?: (number | null) | undefined
  KickoffTouchbacks?: (number | null) | undefined
  KickoffYards?: (number | null) | undefined
  Kickoffs?: (number | null) | undefined
  Name?: (string | null) | undefined
  Opponent?: (string | null) | undefined
  PassesDefended?: (number | null) | undefined
  PassingAttempts?: (number | null) | undefined
  PassingCompletions?: (number | null) | undefined
  PassingInterceptions?: (number | null) | undefined
  PassingSackYards?: (number | null) | undefined
  PassingSacks?: (number | null) | undefined
  PassingTouchdowns?: (number | null) | undefined
  PassingYards?: (number | null) | undefined
  Penalties?: (number | null) | undefined
  PenaltyYards?: (number | null) | undefined
  PlayID?: number | undefined
  PlayStatID?: number | undefined
  PlayerID?: number | undefined
  PuntReturnTouchdowns?: (number | null) | undefined
  PuntReturnYards?: (number | null) | undefined
  PuntReturns?: (number | null) | undefined
  PuntTouchbacks?: (number | null) | undefined
  PuntYards?: (number | null) | undefined
  Punts?: (number | null) | undefined
  PuntsHadBlocked?: (number | null) | undefined
  ReceivingTargets?: (number | null) | undefined
  ReceivingTouchdowns?: (number | null) | undefined
  ReceivingYards?: (number | null) | undefined
  Receptions?: (number | null) | undefined
  RushingAttempts?: (number | null) | undefined
  RushingTouchdowns?: (number | null) | undefined
  RushingYards?: (number | null) | undefined
  SackYards?: (number | null) | undefined
  Sacks?: (number | null) | undefined
  Safeties?: (number | null) | undefined
  Sequence?: number | undefined
  SoloTackles?: (number | null) | undefined
  TacklesForLoss?: (number | null) | undefined
  Team?: (string | null) | undefined
  TwoPointConversionAttempts?: (number | null) | undefined
  TwoPointConversionPasses?: (number | null) | undefined
  TwoPointConversionReceptions?: (number | null) | undefined
  TwoPointConversionReturns?: (number | null) | undefined
  TwoPointConversionRuns?: (number | null) | undefined
  Updated?: (string | null) | undefined
}
type ScoringPlay = {
  AwayScore?: (number | null) | undefined
  AwayTeam?: (string | null) | undefined
  Date?: (string | null) | undefined
  GameKey?: (string | null) | undefined
  HomeScore?: (number | null) | undefined
  HomeTeam?: (string | null) | undefined
  PlayDescription?: (string | null) | undefined
  Quarter?: (string | null) | undefined
  ScoreID?: number | undefined
  ScoringPlayID?: number | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Sequence?: (number | null) | undefined
  Team?: (string | null) | undefined
  TimeRemaining?: (string | null) | undefined
  Week?: number | undefined
}
type Play = {
  Created?: (string | null) | undefined
  Description?: (string | null) | undefined
  Distance?: (number | null) | undefined
  Down?: (number | null) | undefined
  IsScoringPlay?: (boolean | null) | undefined
  Opponent?: (string | null) | undefined
  PlayID?: number | undefined
  PlayStats?: PlayStat[] | undefined
  PlayTime?: (string | null) | undefined
  QuarterID?: number | undefined
  QuarterName?: (string | null) | undefined
  ScoringPlay?: ScoringPlay | undefined
  Sequence?: (number | null) | undefined
  Team?: (string | null) | undefined
  TimeRemainingMinutes?: (number | null) | undefined
  TimeRemainingSeconds?: (number | null) | undefined
  Type?: (string | null) | undefined
  Updated?: (string | null) | undefined
  YardLine?: (number | null) | undefined
  YardLineTerritory?: (string | null) | undefined
  YardsGained?: (number | null) | undefined
  YardsToEndZone?: (number | null) | undefined
}
type Quarter = {
  AwayTeamScore?: (number | null) | undefined
  Created?: (string | null) | undefined
  Description?: (string | null) | undefined
  HomeTeamScore?: (number | null) | undefined
  Name?: (string | null) | undefined
  Number?: number | undefined
  QuarterID?: number | undefined
  ScoreID?: number | undefined
  Updated?: (string | null) | undefined
}
type Stadium = {
  Capacity?: (number | null) | undefined
  City?: (string | null) | undefined
  Country?: (string | null) | undefined
  GeoLat?: (number | null) | undefined
  GeoLong?: (number | null) | undefined
  Name?: (string | null) | undefined
  PlayingSurface?: (string | null) | undefined
  StadiumID?: number | undefined
  State?: (string | null) | undefined
  Type?: (string | null) | undefined
}
type Score = {
  Attendance?: number | undefined
  AwayRotationNumber?: (number | null) | undefined
  AwayScore?: (number | null) | undefined
  AwayScoreOvertime?: (number | null) | undefined
  AwayScoreQuarter1?: (number | null) | undefined
  AwayScoreQuarter2?: (number | null) | undefined
  AwayScoreQuarter3?: (number | null) | undefined
  AwayScoreQuarter4?: (number | null) | undefined
  AwayTeam?: (string | null) | undefined
  AwayTeamID?: (number | null) | undefined
  AwayTeamMoneyLine?: (number | null) | undefined
  AwayTimeouts?: (number | null) | undefined
  Canceled?: (boolean | null) | undefined
  Channel?: (string | null) | undefined
  Closed?: (boolean | null) | undefined
  Date?: (string | null) | undefined
  DateTime?: (string | null) | undefined
  DateTimeUTC?: (string | null) | undefined
  Day?: (string | null) | undefined
  Distance?: (string | null) | undefined
  Down?: (number | null) | undefined
  DownAndDistance?: (string | null) | undefined
  ForecastDescription?: (string | null) | undefined
  ForecastTempHigh?: (number | null) | undefined
  ForecastTempLow?: (number | null) | undefined
  ForecastWindChill?: (number | null) | undefined
  ForecastWindSpeed?: (number | null) | undefined
  GameEndDateTime?: (string | null) | undefined
  GameKey?: (string | null) | undefined
  GeoLat?: (number | null) | undefined
  GeoLong?: (number | null) | undefined
  GlobalAwayTeamID?: (number | null) | undefined
  GlobalGameID?: (number | null) | undefined
  GlobalHomeTeamID?: (number | null) | undefined
  Has1stQuarterStarted?: boolean | undefined
  Has2ndQuarterStarted?: boolean | undefined
  Has3rdQuarterStarted?: boolean | undefined
  Has4thQuarterStarted?: boolean | undefined
  HasStarted?: boolean | undefined
  HomeRotationNumber?: (number | null) | undefined
  HomeScore?: (number | null) | undefined
  HomeScoreOvertime?: (number | null) | undefined
  HomeScoreQuarter1?: (number | null) | undefined
  HomeScoreQuarter2?: (number | null) | undefined
  HomeScoreQuarter3?: (number | null) | undefined
  HomeScoreQuarter4?: (number | null) | undefined
  HomeTeam?: (string | null) | undefined
  HomeTeamID?: (number | null) | undefined
  HomeTeamMoneyLine?: (number | null) | undefined
  HomeTimeouts?: (number | null) | undefined
  IsInProgress?: boolean | undefined
  IsOver?: boolean | undefined
  IsOvertime?: boolean | undefined
  LastPlay?: (string | null) | undefined
  LastUpdated?: (string | null) | undefined
  NeutralVenue?: (boolean | null) | undefined
  OverPayout?: (number | null) | undefined
  OverUnder?: (number | null) | undefined
  PointSpread?: (number | null) | undefined
  PointSpreadAwayTeamMoneyLine?: (number | null) | undefined
  PointSpreadHomeTeamMoneyLine?: (number | null) | undefined
  Possession?: (string | null) | undefined
  Quarter?: (string | null) | undefined
  QuarterDescription?: (string | null) | undefined
  RedZone?: (string | null) | undefined
  RefereeID?: (number | null) | undefined
  ScoreID?: number | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  StadiumDetails?: Stadium | undefined
  StadiumID?: (number | null) | undefined
  Status?: (string | null) | undefined
  TimeRemaining?: (string | null) | undefined
  UnderPayout?: (number | null) | undefined
  Week?: number | undefined
  YardLine?: (number | null) | undefined
  YardLineTerritory?: (string | null) | undefined
}
type PlayByPlay = {
  Plays?: Play[] | undefined
  Quarters?: Quarter[] | undefined
  Score?: Score | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/PlayByPlay/:season/:week/:hometeam': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string; hometeam: string } }
        output: PlayByPlay
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayByPlayDelta/:season/:week/:minutes': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string; minutes: string } }
        output: PlayByPlay[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/SimulatedPlayByPlay/:numberofplays': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; numberofplays: string } }
        output: PlayByPlay[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
