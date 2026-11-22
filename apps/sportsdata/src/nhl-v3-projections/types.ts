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
  BirthCity?: (string | null) | undefined
  BirthDate?: (string | null) | undefined
  BirthState?: (string | null) | undefined
  Catches?: (string | null) | undefined
  DepthChartOrder?: (number | null) | undefined
  DepthChartPosition?: (string | null) | undefined
  DraftKingsName?: (string | null) | undefined
  DraftKingsPlayerID?: (number | null) | undefined
  FanDuelName?: (string | null) | undefined
  FanDuelPlayerID?: (number | null) | undefined
  FantasyAlarmPlayerID?: (number | null) | undefined
  FantasyDraftName?: (string | null) | undefined
  FantasyDraftPlayerID?: (number | null) | undefined
  FirstName?: (string | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  Height?: (number | null) | undefined
  InjuryBodyPart?: (string | null) | undefined
  InjuryNotes?: (string | null) | undefined
  InjuryStartDate?: (string | null) | undefined
  InjuryStatus?: (string | null) | undefined
  Jersey?: (number | null) | undefined
  LastName?: (string | null) | undefined
  PhotoUrl?: (string | null) | undefined
  PlayerID?: number | undefined
  Position?: (string | null) | undefined
  RotoWirePlayerID?: (number | null) | undefined
  RotoworldPlayerID?: (number | null) | undefined
  Shoots?: (string | null) | undefined
  SportRadarPlayerID?: (string | null) | undefined
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
type PlayerGameProjection = {
  Assists?: (number | null) | undefined
  BenchPenaltyMinutes?: (number | null) | undefined
  Blocks?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  DraftKingsPosition?: (string | null) | undefined
  DraftKingsSalary?: (number | null) | undefined
  EmptyNetGoals?: (number | null) | undefined
  FaceoffsLost?: (number | null) | undefined
  FaceoffsWon?: (number | null) | undefined
  FanDuelPosition?: (string | null) | undefined
  FanDuelSalary?: (number | null) | undefined
  FantasyDataSalary?: (number | null) | undefined
  FantasyDraftPosition?: (string | null) | undefined
  FantasyDraftSalary?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsFantasyDraft?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  GameID?: (number | null) | undefined
  Games?: (number | null) | undefined
  Giveaways?: (number | null) | undefined
  GlobalGameID?: (number | null) | undefined
  GlobalOpponentID?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  Goals?: (number | null) | undefined
  GoaltendingGoalsAgainst?: (number | null) | undefined
  GoaltendingLosses?: (number | null) | undefined
  GoaltendingMinutes?: (number | null) | undefined
  GoaltendingOvertimeLosses?: (number | null) | undefined
  GoaltendingSaves?: (number | null) | undefined
  GoaltendingSeconds?: (number | null) | undefined
  GoaltendingShotsAgainst?: (number | null) | undefined
  GoaltendingShutouts?: (number | null) | undefined
  GoaltendingWins?: (number | null) | undefined
  HatTricks?: (number | null) | undefined
  Hits?: (number | null) | undefined
  HomeOrAway?: (string | null) | undefined
  InjuryBodyPart?: (string | null) | undefined
  InjuryNotes?: (string | null) | undefined
  InjuryStartDate?: (string | null) | undefined
  InjuryStatus?: (string | null) | undefined
  IsGameOver?: boolean | undefined
  Minutes?: (number | null) | undefined
  Name?: (string | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentID?: (number | null) | undefined
  OpponentPositionRank?: (number | null) | undefined
  OpponentRank?: (number | null) | undefined
  PenaltyMinutes?: (number | null) | undefined
  PlayerID?: (number | null) | undefined
  PlusMinus?: (number | null) | undefined
  Position?: (string | null) | undefined
  PowerPlayAssists?: (number | null) | undefined
  PowerPlayGoals?: (number | null) | undefined
  Season?: (number | null) | undefined
  SeasonType?: (number | null) | undefined
  Seconds?: (number | null) | undefined
  Shifts?: (number | null) | undefined
  ShootoutGoals?: (number | null) | undefined
  ShortHandedAssists?: (number | null) | undefined
  ShortHandedGoals?: (number | null) | undefined
  ShotsOnGoal?: (number | null) | undefined
  Started?: (number | null) | undefined
  StatID?: number | undefined
  Takeaways?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  Updated?: (string | null) | undefined
  YahooPosition?: (string | null) | undefined
  YahooSalary?: (number | null) | undefined
}
type Goaltender = {
  Confirmed?: boolean | undefined
  FirstName?: (string | null) | undefined
  Jersey?: (number | null) | undefined
  LastName?: (string | null) | undefined
  PlayerID?: number | undefined
  Team?: (string | null) | undefined
  TeamID?: number | undefined
}
type StartingGoaltenders = {
  AwayGoaltender?: Goaltender | undefined
  AwayTeam?: (string | null) | undefined
  AwayTeamID?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  GameID?: number | undefined
  HomeGoaltender?: Goaltender | undefined
  HomeTeam?: (string | null) | undefined
  HomeTeamID?: (number | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Status?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
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
        output: PlayerGameProjection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/StartingGoaltendersByDate/:date': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; date: string } }
        output: StartingGoaltenders[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
