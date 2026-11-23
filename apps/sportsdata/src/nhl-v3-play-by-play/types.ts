type Penalty = {
  BenchPenaltyServedByPlayerID?: (number | null) | undefined
  Description?: (string | null) | undefined
  DrawnByPlayerID?: (number | null) | undefined
  DrawnByTeamID?: (number | null) | undefined
  IsBenchPenalty?: (boolean | null) | undefined
  PenalizedPlayerID?: (number | null) | undefined
  PenalizedTeamID?: (number | null) | undefined
  PenaltyID?: number | undefined
  PenaltyMinutes?: (number | null) | undefined
  PeriodID?: number | undefined
  Sequence?: (number | null) | undefined
  TimeRemainingMinutes?: (number | null) | undefined
  TimeRemainingSeconds?: (number | null) | undefined
}
type ScoringPlay = {
  AllowedByTeamID?: (number | null) | undefined
  AssistedByPlayerID1?: (number | null) | undefined
  AssistedByPlayerID2?: (number | null) | undefined
  AwayTeamScore?: (number | null) | undefined
  EmptyNet?: (boolean | null) | undefined
  HomeTeamScore?: (number | null) | undefined
  PeriodID?: number | undefined
  PowerPlay?: (boolean | null) | undefined
  ScoredByPlayerID?: (number | null) | undefined
  ScoredByTeamID?: (number | null) | undefined
  ScoringPlayID?: number | undefined
  Sequence?: (number | null) | undefined
  ShortHanded?: (boolean | null) | undefined
  TimeRemainingMinutes?: (number | null) | undefined
  TimeRemainingSeconds?: (number | null) | undefined
}
type Period = {
  AwayScore?: (number | null) | undefined
  GameID?: number | undefined
  HomeScore?: (number | null) | undefined
  Name?: (string | null) | undefined
  Penalties?: Penalty[] | undefined
  PeriodID?: number | undefined
  ScoringPlays?: ScoringPlay[] | undefined
}
type Series = {
  AwayTeamWins?: number | undefined
  GameNumber?: number | undefined
  HomeTeamWins?: number | undefined
  MaxLength?: number | undefined
}
type Game = {
  Attendance?: (number | null) | undefined
  AwayRotationNumber?: (number | null) | undefined
  AwayTeam?: (string | null) | undefined
  AwayTeamID?: number | undefined
  AwayTeamMoneyLine?: (number | null) | undefined
  AwayTeamScore?: (number | null) | undefined
  Channel?: (string | null) | undefined
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
  IsClosed?: (boolean | null) | undefined
  LastPlay?: (string | null) | undefined
  NeutralVenue?: (boolean | null) | undefined
  OverPayout?: (number | null) | undefined
  OverUnder?: (number | null) | undefined
  Period?: (string | null) | undefined
  Periods?: Period[] | undefined
  PointSpread?: (number | null) | undefined
  PointSpreadAwayTeamMoneyLine?: (number | null) | undefined
  PointSpreadHomeTeamMoneyLine?: (number | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  SeriesInfo?: Series | undefined
  StadiumID?: (number | null) | undefined
  Status?: (string | null) | undefined
  TimeRemainingMinutes?: (number | null) | undefined
  TimeRemainingSeconds?: (number | null) | undefined
  UnderPayout?: (number | null) | undefined
  Updated?: (string | null) | undefined
}
type Play = {
  AwayTeamScore?: (number | null) | undefined
  Category?: (string | null) | undefined
  ClockMinutes?: (number | null) | undefined
  ClockSeconds?: (number | null) | undefined
  Created?: (string | null) | undefined
  Description?: (string | null) | undefined
  FirstAssistedByPlayerID?: (number | null) | undefined
  HomeTeamScore?: (number | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentID?: (number | null) | undefined
  OpposingPlayerID?: (number | null) | undefined
  PeriodID?: number | undefined
  PeriodName?: (string | null) | undefined
  PlayID?: number | undefined
  PlayerID?: (number | null) | undefined
  PowerPlayTeam?: (string | null) | undefined
  PowerPlayTeamID?: (number | null) | undefined
  SecondAssistedByPlayerID?: (number | null) | undefined
  Sequence?: number | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  Type?: (string | null) | undefined
  Updated?: (string | null) | undefined
}
type PlayByPlay = { Game?: Game | undefined; Plays?: Play[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/PlayByPlay/:gameid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; gameid: string } }
        output: PlayByPlay
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayByPlayDelta/:date/:minutes': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; date: string; minutes: string } }
        output: PlayByPlay[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
