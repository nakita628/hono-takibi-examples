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
type DfsSlateGame = {
  Game?: Game | undefined
  GameID?: (number | null) | undefined
  OperatorGameID?: (number | null) | undefined
  RemovedByOperator?: (boolean | null) | undefined
  SlateGameID?: number | undefined
  SlateID?: number | undefined
}
type DfsSlatePlayer = {
  OperatorPlayerID?: (string | null) | undefined
  OperatorPlayerName?: (string | null) | undefined
  OperatorPosition?: (string | null) | undefined
  OperatorRosterSlots?: (string | null)[] | undefined
  OperatorSalary?: (number | null) | undefined
  OperatorSlatePlayerID?: (string | null) | undefined
  PlayerGameProjectionStatID?: (number | null) | undefined
  PlayerID?: (number | null) | undefined
  RemovedByOperator?: (boolean | null) | undefined
  SlateGameID?: (number | null) | undefined
  SlateID?: number | undefined
  SlatePlayerID?: number | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
}
type DfsSlate = {
  DfsSlateGames?: DfsSlateGame[] | undefined
  DfsSlatePlayers?: DfsSlatePlayer[] | undefined
  IsMultiDaySlate?: (boolean | null) | undefined
  NumberOfGames?: (number | null) | undefined
  Operator?: (string | null) | undefined
  OperatorDay?: (string | null) | undefined
  OperatorGameType?: (string | null) | undefined
  OperatorName?: (string | null) | undefined
  OperatorSlateID?: (number | null) | undefined
  OperatorStartTime?: (string | null) | undefined
  RemovedByOperator?: (boolean | null) | undefined
  SalaryCap?: (number | null) | undefined
  SlateID?: number | undefined
  SlateRosterSlots?: (string | null)[] | undefined
}
type Player = {
  BatHand?: (string | null) | undefined
  BirthCity?: (string | null) | undefined
  BirthCountry?: (string | null) | undefined
  BirthDate?: (string | null) | undefined
  BirthState?: (string | null) | undefined
  College?: (string | null) | undefined
  DraftKingsName?: (string | null) | undefined
  DraftKingsPlayerID?: (number | null) | undefined
  Experience?: (string | null) | undefined
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
  MLBAMID?: (number | null) | undefined
  PhotoUrl?: (string | null) | undefined
  PlayerID?: number | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  ProDebut?: (string | null) | undefined
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
  ThrowHand?: (string | null) | undefined
  UpcomingGameID?: (number | null) | undefined
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
type PlayerGameProjection = {
  AtBats?: (number | null) | undefined
  BallsInPlay?: (number | null) | undefined
  BattingAverage?: (number | null) | undefined
  BattingAverageOnBallsInPlay?: (number | null) | undefined
  BattingOrder?: (number | null) | undefined
  BattingOrderConfirmed?: (boolean | null) | undefined
  CaughtStealing?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  DoublePlays?: (number | null) | undefined
  Doubles?: (number | null) | undefined
  DraftKingsPosition?: (string | null) | undefined
  DraftKingsSalary?: (number | null) | undefined
  EarnedRunAverage?: (number | null) | undefined
  Errors?: (number | null) | undefined
  FanDuelPosition?: (string | null) | undefined
  FanDuelSalary?: (number | null) | undefined
  FantasyDataSalary?: (number | null) | undefined
  FantasyDraftPosition?: (string | null) | undefined
  FantasyDraftSalary?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsBatting?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsFantasyDraft?: (number | null) | undefined
  FantasyPointsPitching?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  FieldingIndependentPitching?: (number | null) | undefined
  FlyOuts?: (number | null) | undefined
  GameID?: (number | null) | undefined
  Games?: (number | null) | undefined
  GlobalGameID?: (number | null) | undefined
  GlobalOpponentID?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  GrandSlams?: (number | null) | undefined
  GroundIntoDoublePlay?: (number | null) | undefined
  GroundOuts?: (number | null) | undefined
  HitByPitch?: (number | null) | undefined
  Hits?: (number | null) | undefined
  HomeOrAway?: (string | null) | undefined
  HomeRuns?: (number | null) | undefined
  InjuryBodyPart?: (string | null) | undefined
  InjuryNotes?: (string | null) | undefined
  InjuryStartDate?: (string | null) | undefined
  InjuryStatus?: (string | null) | undefined
  InningsPitchedDecimal?: (number | null) | undefined
  InningsPitchedFull?: (number | null) | undefined
  InningsPitchedOuts?: (number | null) | undefined
  IntentionalWalks?: (number | null) | undefined
  IsGameOver?: boolean | undefined
  IsolatedPower?: (number | null) | undefined
  LeftOnBase?: (number | null) | undefined
  LineOuts?: (number | null) | undefined
  Losses?: (number | null) | undefined
  Name?: (string | null) | undefined
  OnBasePercentage?: (number | null) | undefined
  OnBasePlusSlugging?: (number | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentID?: (number | null) | undefined
  OpponentPositionRank?: (number | null) | undefined
  OpponentRank?: (number | null) | undefined
  Outs?: (number | null) | undefined
  PitchesSeen?: (number | null) | undefined
  PitchesThrown?: (number | null) | undefined
  PitchesThrownStrikes?: (number | null) | undefined
  PitchingBallsInPlay?: (number | null) | undefined
  PitchingBattingAverageAgainst?: (number | null) | undefined
  PitchingBattingAverageOnBallsInPlay?: (number | null) | undefined
  PitchingBlownSaves?: (number | null) | undefined
  PitchingCatchersInterference?: (number | null) | undefined
  PitchingCompleteGames?: (number | null) | undefined
  PitchingDoublePlays?: (number | null) | undefined
  PitchingDoubles?: (number | null) | undefined
  PitchingEarnedRuns?: (number | null) | undefined
  PitchingFlyOuts?: (number | null) | undefined
  PitchingGrandSlams?: (number | null) | undefined
  PitchingGroundIntoDoublePlay?: (number | null) | undefined
  PitchingGroundOuts?: (number | null) | undefined
  PitchingHitByPitch?: (number | null) | undefined
  PitchingHits?: (number | null) | undefined
  PitchingHolds?: (number | null) | undefined
  PitchingHomeRuns?: (number | null) | undefined
  PitchingInningStarted?: (number | null) | undefined
  PitchingIntentionalWalks?: (number | null) | undefined
  PitchingLineOuts?: (number | null) | undefined
  PitchingNoHitters?: (number | null) | undefined
  PitchingOnBasePercentage?: (number | null) | undefined
  PitchingOnBasePlusSlugging?: (number | null) | undefined
  PitchingPerfectGames?: (number | null) | undefined
  PitchingPlateAppearances?: (number | null) | undefined
  PitchingPopOuts?: (number | null) | undefined
  PitchingQualityStarts?: (number | null) | undefined
  PitchingReachedOnError?: (number | null) | undefined
  PitchingRuns?: (number | null) | undefined
  PitchingSacrificeFlies?: (number | null) | undefined
  PitchingSacrifices?: (number | null) | undefined
  PitchingShutOuts?: (number | null) | undefined
  PitchingSingles?: (number | null) | undefined
  PitchingSluggingPercentage?: (number | null) | undefined
  PitchingStrikeouts?: (number | null) | undefined
  PitchingStrikeoutsPerNineInnings?: (number | null) | undefined
  PitchingTotalBases?: (number | null) | undefined
  PitchingTriples?: (number | null) | undefined
  PitchingWalks?: (number | null) | undefined
  PitchingWalksPerNineInnings?: (number | null) | undefined
  PitchingWeightedOnBasePercentage?: (number | null) | undefined
  PlateAppearances?: (number | null) | undefined
  PlayerID?: (number | null) | undefined
  PopOuts?: (number | null) | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  ReachedOnError?: (number | null) | undefined
  Runs?: (number | null) | undefined
  RunsBattedIn?: (number | null) | undefined
  SacrificeFlies?: (number | null) | undefined
  Sacrifices?: (number | null) | undefined
  Saves?: (number | null) | undefined
  Season?: (number | null) | undefined
  SeasonType?: (number | null) | undefined
  Singles?: (number | null) | undefined
  SluggingPercentage?: (number | null) | undefined
  Started?: (number | null) | undefined
  StatID?: number | undefined
  StolenBases?: (number | null) | undefined
  Strikeouts?: (number | null) | undefined
  SubstituteBattingOrder?: (number | null) | undefined
  SubstituteBattingOrderSequence?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  TotalBases?: (number | null) | undefined
  TotalOutsPitched?: (number | null) | undefined
  Triples?: (number | null) | undefined
  Updated?: (string | null) | undefined
  Walks?: (number | null) | undefined
  WalksHitsPerInningsPitched?: (number | null) | undefined
  WeightedOnBasePercentage?: (number | null) | undefined
  Wins?: (number | null) | undefined
  YahooPosition?: (string | null) | undefined
  YahooSalary?: (number | null) | undefined
}
type PlayerSeasonProjection = {
  AtBats?: (number | null) | undefined
  AuctionValue?: (number | null) | undefined
  AverageDraftPosition?: (number | null) | undefined
  BallsInPlay?: (number | null) | undefined
  BattingAverage?: (number | null) | undefined
  BattingAverageOnBallsInPlay?: (number | null) | undefined
  BattingOrder?: (number | null) | undefined
  BattingOrderConfirmed?: (boolean | null) | undefined
  CaughtStealing?: (number | null) | undefined
  DoublePlays?: (number | null) | undefined
  Doubles?: (number | null) | undefined
  EarnedRunAverage?: (number | null) | undefined
  Errors?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsBatting?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsFantasyDraft?: (number | null) | undefined
  FantasyPointsPitching?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  FieldingIndependentPitching?: (number | null) | undefined
  FlyOuts?: (number | null) | undefined
  Games?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  GrandSlams?: (number | null) | undefined
  GroundIntoDoublePlay?: (number | null) | undefined
  GroundOuts?: (number | null) | undefined
  HitByPitch?: (number | null) | undefined
  Hits?: (number | null) | undefined
  HomeRuns?: (number | null) | undefined
  InningsPitchedDecimal?: (number | null) | undefined
  InningsPitchedFull?: (number | null) | undefined
  InningsPitchedOuts?: (number | null) | undefined
  IntentionalWalks?: (number | null) | undefined
  IsolatedPower?: (number | null) | undefined
  LeftOnBase?: (number | null) | undefined
  LineOuts?: (number | null) | undefined
  Losses?: (number | null) | undefined
  Name?: (string | null) | undefined
  OnBasePercentage?: (number | null) | undefined
  OnBasePlusSlugging?: (number | null) | undefined
  Outs?: (number | null) | undefined
  PitchesSeen?: (number | null) | undefined
  PitchesThrown?: (number | null) | undefined
  PitchesThrownStrikes?: (number | null) | undefined
  PitchingBallsInPlay?: (number | null) | undefined
  PitchingBattingAverageAgainst?: (number | null) | undefined
  PitchingBattingAverageOnBallsInPlay?: (number | null) | undefined
  PitchingBlownSaves?: (number | null) | undefined
  PitchingCatchersInterference?: (number | null) | undefined
  PitchingCompleteGames?: (number | null) | undefined
  PitchingDoublePlays?: (number | null) | undefined
  PitchingDoubles?: (number | null) | undefined
  PitchingEarnedRuns?: (number | null) | undefined
  PitchingFlyOuts?: (number | null) | undefined
  PitchingGrandSlams?: (number | null) | undefined
  PitchingGroundIntoDoublePlay?: (number | null) | undefined
  PitchingGroundOuts?: (number | null) | undefined
  PitchingHitByPitch?: (number | null) | undefined
  PitchingHits?: (number | null) | undefined
  PitchingHolds?: (number | null) | undefined
  PitchingHomeRuns?: (number | null) | undefined
  PitchingInningStarted?: (number | null) | undefined
  PitchingIntentionalWalks?: (number | null) | undefined
  PitchingLineOuts?: (number | null) | undefined
  PitchingNoHitters?: (number | null) | undefined
  PitchingOnBasePercentage?: (number | null) | undefined
  PitchingOnBasePlusSlugging?: (number | null) | undefined
  PitchingPerfectGames?: (number | null) | undefined
  PitchingPlateAppearances?: (number | null) | undefined
  PitchingPopOuts?: (number | null) | undefined
  PitchingQualityStarts?: (number | null) | undefined
  PitchingReachedOnError?: (number | null) | undefined
  PitchingRuns?: (number | null) | undefined
  PitchingSacrificeFlies?: (number | null) | undefined
  PitchingSacrifices?: (number | null) | undefined
  PitchingShutOuts?: (number | null) | undefined
  PitchingSingles?: (number | null) | undefined
  PitchingSluggingPercentage?: (number | null) | undefined
  PitchingStrikeouts?: (number | null) | undefined
  PitchingStrikeoutsPerNineInnings?: (number | null) | undefined
  PitchingTotalBases?: (number | null) | undefined
  PitchingTriples?: (number | null) | undefined
  PitchingWalks?: (number | null) | undefined
  PitchingWalksPerNineInnings?: (number | null) | undefined
  PitchingWeightedOnBasePercentage?: (number | null) | undefined
  PlateAppearances?: (number | null) | undefined
  PlayerID?: (number | null) | undefined
  PopOuts?: (number | null) | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  ReachedOnError?: (number | null) | undefined
  Runs?: (number | null) | undefined
  RunsBattedIn?: (number | null) | undefined
  SacrificeFlies?: (number | null) | undefined
  Sacrifices?: (number | null) | undefined
  Saves?: (number | null) | undefined
  Season?: (number | null) | undefined
  SeasonType?: (number | null) | undefined
  Singles?: (number | null) | undefined
  SluggingPercentage?: (number | null) | undefined
  Started?: (number | null) | undefined
  StatID?: number | undefined
  StolenBases?: (number | null) | undefined
  Strikeouts?: (number | null) | undefined
  SubstituteBattingOrder?: (number | null) | undefined
  SubstituteBattingOrderSequence?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  TotalBases?: (number | null) | undefined
  TotalOutsPitched?: (number | null) | undefined
  Triples?: (number | null) | undefined
  Updated?: (string | null) | undefined
  Walks?: (number | null) | undefined
  WalksHitsPerInningsPitched?: (number | null) | undefined
  WeightedOnBasePercentage?: (number | null) | undefined
  Wins?: (number | null) | undefined
}
type Lineup = {
  BattingOrder?: (number | null) | undefined
  Confirmed?: (boolean | null) | undefined
  FirstName?: (string | null) | undefined
  LastName?: (string | null) | undefined
  PlayerID?: number | undefined
  Position?: (string | null) | undefined
  Starting?: (boolean | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: number | undefined
}
type StartingLineups = {
  AwayBattingLineup?: Lineup[] | undefined
  AwayStartingPitcher?: Lineup | undefined
  AwayTeam?: (string | null) | undefined
  AwayTeamID?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  GameID?: number | undefined
  HomeBattingLineup?: Lineup[] | undefined
  HomeStartingPitcher?: Lineup | undefined
  HomeTeam?: (string | null) | undefined
  HomeTeamID?: (number | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Status?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/DepthCharts': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: TeamDepthChart[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/DfsSlatesByDate/:date': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; date: string } }
        output: DfsSlate[]
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
    '/:format/PlayerGameProjectionStatsByDate/:date': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; date: string } }
        output: PlayerGameProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameProjectionStatsByPlayer/:date/:playerid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; date: string; playerid: string } }
        output: PlayerGameProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerSeasonProjectionStats/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: PlayerSeasonProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/StartingLineupsByDate/:date': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; date: string } }
        output: StartingLineups[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
