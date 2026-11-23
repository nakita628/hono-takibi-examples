type PlayoffAggregateScore = {
  Created?: (string | null) | undefined
  TeamA_AggregateScore?: number | undefined
  TeamA_Id?: number | undefined
  TeamB_AggregateScore?: number | undefined
  TeamB_Id?: number | undefined
  Updated?: (string | null) | undefined
  WinningTeamId?: number | undefined
}
type Game = {
  Attendance?: (number | null) | undefined
  AwayTeamCountryCode?: (string | null) | undefined
  AwayTeamFormation?: (string | null) | undefined
  AwayTeamId?: (number | null) | undefined
  AwayTeamKey?: (string | null) | undefined
  AwayTeamMoneyLine?: (number | null) | undefined
  AwayTeamName?: (string | null) | undefined
  AwayTeamPointSpreadPayout?: (number | null) | undefined
  AwayTeamScore?: (number | null) | undefined
  AwayTeamScoreExtraTime?: (number | null) | undefined
  AwayTeamScorePenalty?: (number | null) | undefined
  AwayTeamScorePeriod1?: (number | null) | undefined
  AwayTeamScorePeriod2?: (number | null) | undefined
  Clock?: (number | null) | undefined
  ClockDisplay?: (string | null) | undefined
  ClockExtra?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  DrawMoneyLine?: (number | null) | undefined
  GameId?: number | undefined
  GlobalAwayTeamId?: (number | null) | undefined
  GlobalGameId?: number | undefined
  GlobalHomeTeamId?: (number | null) | undefined
  Group?: (string | null) | undefined
  HomeTeamCountryCode?: (string | null) | undefined
  HomeTeamFormation?: (string | null) | undefined
  HomeTeamId?: (number | null) | undefined
  HomeTeamKey?: (string | null) | undefined
  HomeTeamMoneyLine?: (number | null) | undefined
  HomeTeamName?: (string | null) | undefined
  HomeTeamPointSpreadPayout?: (number | null) | undefined
  HomeTeamScore?: (number | null) | undefined
  HomeTeamScoreExtraTime?: (number | null) | undefined
  HomeTeamScorePenalty?: (number | null) | undefined
  HomeTeamScorePeriod1?: (number | null) | undefined
  HomeTeamScorePeriod2?: (number | null) | undefined
  IsClosed?: (boolean | null) | undefined
  OverPayout?: (number | null) | undefined
  OverUnder?: (number | null) | undefined
  Period?: (string | null) | undefined
  PlayoffAggregateScore?: PlayoffAggregateScore | undefined
  PointSpread?: (number | null) | undefined
  RoundId?: number | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Status?: (string | null) | undefined
  UnderPayout?: (number | null) | undefined
  Updated?: (string | null) | undefined
  UpdatedUtc?: (string | null) | undefined
  VenueId?: (number | null) | undefined
  VenueType?: (string | null) | undefined
  Week?: (number | null) | undefined
  Winner?: (string | null) | undefined
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
  CompetitionId?: (number | null) | undefined
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
  BirthCountry?: (string | null) | undefined
  BirthDate?: (string | null) | undefined
  CommonName?: (string | null) | undefined
  DraftKingsPosition?: (string | null) | undefined
  FirstName?: (string | null) | undefined
  Foot?: (string | null) | undefined
  Gender?: (string | null) | undefined
  Height?: (number | null) | undefined
  InjuryBodyPart?: (string | null) | undefined
  InjuryNotes?: (string | null) | undefined
  InjuryStartDate?: (string | null) | undefined
  InjuryStatus?: (string | null) | undefined
  Jersey?: (number | null) | undefined
  LastName?: (string | null) | undefined
  Nationality?: (string | null) | undefined
  PhotoUrl?: (string | null) | undefined
  PlayerId?: number | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  RotoWirePlayerID?: (number | null) | undefined
  ShortName?: (string | null) | undefined
  Updated?: (string | null) | undefined
  UsaTodayHeadshotNoBackgroundUpdated?: (string | null) | undefined
  UsaTodayHeadshotNoBackgroundUrl?: (string | null) | undefined
  UsaTodayHeadshotUpdated?: (string | null) | undefined
  UsaTodayHeadshotUrl?: (string | null) | undefined
  UsaTodayPlayerID?: (number | null) | undefined
  Weight?: (number | null) | undefined
}
type PlayerGameProjection = {
  Assists?: (number | null) | undefined
  BlockedShots?: (number | null) | undefined
  Captain?: (boolean | null) | undefined
  CornersWon?: (number | null) | undefined
  Crosses?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  DefenderCleanSheets?: (number | null) | undefined
  DraftKingsPosition?: (string | null) | undefined
  DraftKingsSalary?: (number | null) | undefined
  FanDuelPosition?: (string | null) | undefined
  FanDuelSalary?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsMondogoal?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  Fouled?: (number | null) | undefined
  Fouls?: (number | null) | undefined
  GameId?: (number | null) | undefined
  Games?: (number | null) | undefined
  GlobalGameId?: (number | null) | undefined
  GlobalOpponentId?: (number | null) | undefined
  GlobalTeamId?: (number | null) | undefined
  GoalkeeperCleanSheets?: (number | null) | undefined
  GoalkeeperGoalsAgainst?: (number | null) | undefined
  GoalkeeperSaves?: (number | null) | undefined
  GoalkeeperSingleGoalAgainst?: (number | null) | undefined
  GoalkeeperWins?: (number | null) | undefined
  Goals?: (number | null) | undefined
  HomeOrAway?: (string | null) | undefined
  InjuryBodyPart?: (string | null) | undefined
  InjuryNotes?: (string | null) | undefined
  InjuryStartDate?: (string | null) | undefined
  InjuryStatus?: (string | null) | undefined
  Interceptions?: (number | null) | undefined
  IsGameOver?: boolean | undefined
  Jersey?: (number | null) | undefined
  LastManTackle?: (number | null) | undefined
  Minutes?: (number | null) | undefined
  MondogoalPosition?: (string | null) | undefined
  MondogoalSalary?: (number | null) | undefined
  Name?: (string | null) | undefined
  Offsides?: (number | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentId?: (number | null) | undefined
  OpponentScore?: (number | null) | undefined
  OwnGoals?: (number | null) | undefined
  Passes?: (number | null) | undefined
  PassesCompleted?: (number | null) | undefined
  PenaltiesConceded?: (number | null) | undefined
  PenaltiesWon?: (number | null) | undefined
  PenaltyKickGoals?: (number | null) | undefined
  PenaltyKickMisses?: (number | null) | undefined
  PenaltyKickSaves?: (number | null) | undefined
  PlayerId?: (number | null) | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  RedCards?: (number | null) | undefined
  RoundId?: (number | null) | undefined
  Score?: (number | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  ShortName?: (string | null) | undefined
  Shots?: (number | null) | undefined
  ShotsOnGoal?: (number | null) | undefined
  Started?: (number | null) | undefined
  StatId?: number | undefined
  Suspension?: (boolean | null) | undefined
  SuspensionReason?: (string | null) | undefined
  Tackles?: (number | null) | undefined
  TacklesWon?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamId?: (number | null) | undefined
  Touches?: (number | null) | undefined
  Updated?: (string | null) | undefined
  UpdatedUtc?: (string | null) | undefined
  YahooPosition?: (string | null) | undefined
  YahooSalary?: (number | null) | undefined
  YellowCards?: (number | null) | undefined
  YellowRedCards?: (number | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/DfsSlatesByDate/:date': {
      $get: {
        input: { param: { format: 'json' | 'xml'; date: string } }
        output: DfsSlate[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/InjuredPlayers/:competition': {
      $get: {
        input: { param: { format: 'xml' | 'json'; competition: string } }
        output: Player[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameProjectionStatsByCompetition/:competition/:date': {
      $get: {
        input: { param: { format: 'xml' | 'json'; competition: string; date: string } }
        output: PlayerGameProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameProjectionStatsByDate/:date': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string } }
        output: PlayerGameProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameProjectionStatsByPlayer/:date/:playerid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string; playerid: string } }
        output: PlayerGameProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/UpcomingDfsSlatesByCompetition/:competitionId': {
      $get: {
        input: { param: { format: 'json' | 'xml'; competitionId: string } }
        output: DfsSlate[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
