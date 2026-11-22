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
type Play = {
  AssistedByPlayerID?: (number | null) | undefined
  AwayPlayerID?: (number | null) | undefined
  AwayTeamScore?: (number | null) | undefined
  BaselineOffsetPercentage?: (number | null) | undefined
  BlockedByPlayerID?: (number | null) | undefined
  Category?: (string | null) | undefined
  Coordinates?: (string | null) | undefined
  Created?: (string | null) | undefined
  Description?: (string | null) | undefined
  FastBreak?: (boolean | null) | undefined
  HomePlayerID?: (number | null) | undefined
  HomeTeamScore?: (number | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentID?: (number | null) | undefined
  PlayID?: number | undefined
  PlayerID?: (number | null) | undefined
  Points?: (number | null) | undefined
  PotentialPoints?: (number | null) | undefined
  QuarterID?: number | undefined
  QuarterName?: (string | null) | undefined
  ReceivingPlayerID?: (number | null) | undefined
  ReceivingTeam?: (string | null) | undefined
  ReceivingTeamID?: (number | null) | undefined
  Sequence?: number | undefined
  ShotMade?: (boolean | null) | undefined
  SideOfBasket?: (string | null) | undefined
  SidelineOffsetPercentage?: (number | null) | undefined
  StolenByPlayerID?: (number | null) | undefined
  SubstituteInPlayerID?: (number | null) | undefined
  SubstituteOutPlayerID?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  TimeRemainingMinutes?: (number | null) | undefined
  TimeRemainingSeconds?: (number | null) | undefined
  Type?: (string | null) | undefined
  Updated?: (string | null) | undefined
}
type PlayByPlay = {
  Game?: Game | undefined
  Plays?: Play[] | undefined
  Quarters?: Quarter[] | undefined
}
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
