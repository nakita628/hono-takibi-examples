type Inning = {
  AwayTeamRuns?: (number | null) | undefined
  GameID?: number | undefined
  HomeTeamRuns?: (number | null) | undefined
  InningID?: number | undefined
  InningNumber?: number | undefined
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
  AwayTeamErrors?: (number | null) | undefined
  AwayTeamHits?: (number | null) | undefined
  AwayTeamID?: number | undefined
  AwayTeamMoneyLine?: (number | null) | undefined
  AwayTeamProbablePitcherID?: (number | null) | undefined
  AwayTeamRuns?: (number | null) | undefined
  AwayTeamStartingPitcher?: (string | null) | undefined
  AwayTeamStartingPitcherID?: (number | null) | undefined
  Balls?: (number | null) | undefined
  Channel?: (string | null) | undefined
  CurrentHitter?: (string | null) | undefined
  CurrentHitterID?: (number | null) | undefined
  CurrentHittingTeamID?: (number | null) | undefined
  CurrentPitcher?: (string | null) | undefined
  CurrentPitcherID?: (number | null) | undefined
  CurrentPitchingTeamID?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  DateTimeUTC?: (string | null) | undefined
  Day?: (string | null) | undefined
  DueUpHitterID1?: (number | null) | undefined
  DueUpHitterID2?: (number | null) | undefined
  DueUpHitterID3?: (number | null) | undefined
  ForecastDescription?: (string | null) | undefined
  ForecastTempHigh?: (number | null) | undefined
  ForecastTempLow?: (number | null) | undefined
  ForecastWindChill?: (number | null) | undefined
  ForecastWindDirection?: (number | null) | undefined
  ForecastWindSpeed?: (number | null) | undefined
  GameEndDateTime?: (string | null) | undefined
  GameID?: number | undefined
  GlobalAwayTeamID?: number | undefined
  GlobalGameID?: number | undefined
  GlobalHomeTeamID?: number | undefined
  HomeRotationNumber?: (number | null) | undefined
  HomeTeam?: (string | null) | undefined
  HomeTeamErrors?: (number | null) | undefined
  HomeTeamHits?: (number | null) | undefined
  HomeTeamID?: number | undefined
  HomeTeamMoneyLine?: (number | null) | undefined
  HomeTeamProbablePitcherID?: (number | null) | undefined
  HomeTeamRuns?: (number | null) | undefined
  HomeTeamStartingPitcher?: (string | null) | undefined
  HomeTeamStartingPitcherID?: (number | null) | undefined
  Inning?: (number | null) | undefined
  InningDescription?: (string | null) | undefined
  InningHalf?: (string | null) | undefined
  Innings?: Inning[] | undefined
  IsClosed?: boolean | undefined
  LastPlay?: (string | null) | undefined
  LosingPitcher?: (string | null) | undefined
  LosingPitcherID?: (number | null) | undefined
  NeutralVenue?: (boolean | null) | undefined
  Outs?: (number | null) | undefined
  OverPayout?: (number | null) | undefined
  OverUnder?: (number | null) | undefined
  PointSpread?: (number | null) | undefined
  PointSpreadAwayTeamMoneyLine?: (number | null) | undefined
  PointSpreadHomeTeamMoneyLine?: (number | null) | undefined
  RescheduledFromGameID?: (number | null) | undefined
  RescheduledGameID?: (number | null) | undefined
  RunnerOnFirst?: (boolean | null) | undefined
  RunnerOnSecond?: (boolean | null) | undefined
  RunnerOnThird?: (boolean | null) | undefined
  SavingPitcher?: (string | null) | undefined
  SavingPitcherID?: (number | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  SeriesInfo?: Series | undefined
  StadiumID?: (number | null) | undefined
  Status?: (string | null) | undefined
  Strikes?: (number | null) | undefined
  UnderPayout?: (number | null) | undefined
  Updated?: (string | null) | undefined
  WinningPitcher?: (string | null) | undefined
  WinningPitcherID?: (number | null) | undefined
}
type Pitch = {
  Ball?: (boolean | null) | undefined
  BallsBeforePitch?: (number | null) | undefined
  Foul?: (boolean | null) | undefined
  HitterID?: (number | null) | undefined
  Looking?: (boolean | null) | undefined
  Outs?: (number | null) | undefined
  PitchID?: number | undefined
  PitchNumberThisAtBat?: (number | null) | undefined
  PitcherID?: (number | null) | undefined
  PlayID?: number | undefined
  Strike?: (boolean | null) | undefined
  StrikesBeforePitch?: (number | null) | undefined
  Swinging?: (boolean | null) | undefined
}
type Play = {
  AtBat?: (boolean | null) | undefined
  AwayTeamRuns?: (number | null) | undefined
  Balls?: (number | null) | undefined
  Description?: (string | null) | undefined
  Error?: (boolean | null) | undefined
  Hit?: (boolean | null) | undefined
  HitterBatHand?: (string | null) | undefined
  HitterID?: (number | null) | undefined
  HitterName?: (string | null) | undefined
  HitterPosition?: (string | null) | undefined
  HitterTeamID?: (number | null) | undefined
  HomeTeamRuns?: (number | null) | undefined
  InningBatterNumber?: (number | null) | undefined
  InningHalf?: (string | null) | undefined
  InningID?: number | undefined
  InningNumber?: (number | null) | undefined
  NumberOfOutsOnPlay?: (number | null) | undefined
  Out?: (boolean | null) | undefined
  Outs?: (number | null) | undefined
  PitchNumberThisAtBat?: (number | null) | undefined
  PitcherID?: (number | null) | undefined
  PitcherName?: (string | null) | undefined
  PitcherTeamID?: (number | null) | undefined
  PitcherThrowHand?: (string | null) | undefined
  Pitches?: Pitch[] | undefined
  PlayID?: number | undefined
  PlayNumber?: (number | null) | undefined
  Result?: (string | null) | undefined
  Runner1ID?: (number | null) | undefined
  Runner2ID?: (number | null) | undefined
  Runner3ID?: (number | null) | undefined
  RunsBattedIn?: (number | null) | undefined
  Sacrifice?: (boolean | null) | undefined
  Strikeout?: (boolean | null) | undefined
  Strikes?: (number | null) | undefined
  Updated?: (string | null) | undefined
  Walk?: (boolean | null) | undefined
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
