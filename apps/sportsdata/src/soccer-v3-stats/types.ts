type Membership = {
  Active?: boolean | undefined
  EndDate?: (string | null) | undefined
  Jersey?: (number | null) | undefined
  MembershipId?: number | undefined
  PlayerId?: number | undefined
  PlayerName?: (string | null) | undefined
  StartDate?: (string | null) | undefined
  TeamArea?: (string | null) | undefined
  TeamId?: number | undefined
  TeamName?: (string | null) | undefined
  Updated?: (string | null) | undefined
}
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
type PlayerSeason = {
  Assists?: (number | null) | undefined
  BlockedShots?: (number | null) | undefined
  CornersWon?: (number | null) | undefined
  Crosses?: (number | null) | undefined
  DefenderCleanSheets?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsMondogoal?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  Fouled?: (number | null) | undefined
  Fouls?: (number | null) | undefined
  Games?: (number | null) | undefined
  GlobalTeamId?: (number | null) | undefined
  GoalkeeperCleanSheets?: (number | null) | undefined
  GoalkeeperGoalsAgainst?: (number | null) | undefined
  GoalkeeperSaves?: (number | null) | undefined
  GoalkeeperSingleGoalAgainst?: (number | null) | undefined
  GoalkeeperWins?: (number | null) | undefined
  Goals?: (number | null) | undefined
  Interceptions?: (number | null) | undefined
  LastManTackle?: (number | null) | undefined
  Minutes?: (number | null) | undefined
  Name?: (string | null) | undefined
  Offsides?: (number | null) | undefined
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
  Tackles?: (number | null) | undefined
  TacklesWon?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamId?: (number | null) | undefined
  Touches?: (number | null) | undefined
  Updated?: (string | null) | undefined
  UpdatedUtc?: (string | null) | undefined
  YellowCards?: (number | null) | undefined
  YellowRedCards?: (number | null) | undefined
}
type Standing = {
  Draws?: (number | null) | undefined
  Games?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  GoalsAgainst?: (number | null) | undefined
  GoalsDifferential?: (number | null) | undefined
  GoalsScored?: (number | null) | undefined
  Group?: (string | null) | undefined
  Losses?: (number | null) | undefined
  Name?: (string | null) | undefined
  Order?: (number | null) | undefined
  Points?: (number | null) | undefined
  RoundId?: number | undefined
  Scope?: (string | null) | undefined
  ShortName?: (string | null) | undefined
  StandingId?: number | undefined
  TeamId?: number | undefined
  Wins?: (number | null) | undefined
}
type TeamSeason = {
  Assists?: (number | null) | undefined
  BlockedShots?: (number | null) | undefined
  CornersWon?: (number | null) | undefined
  Crosses?: (number | null) | undefined
  DefenderCleanSheets?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsMondogoal?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  Fouled?: (number | null) | undefined
  Fouls?: (number | null) | undefined
  Games?: (number | null) | undefined
  GlobalTeamId?: (number | null) | undefined
  GoalkeeperCleanSheets?: (number | null) | undefined
  GoalkeeperGoalsAgainst?: (number | null) | undefined
  GoalkeeperSaves?: (number | null) | undefined
  GoalkeeperSingleGoalAgainst?: (number | null) | undefined
  GoalkeeperWins?: (number | null) | undefined
  Goals?: (number | null) | undefined
  Interceptions?: (number | null) | undefined
  LastManTackle?: (number | null) | undefined
  Minutes?: (number | null) | undefined
  Name?: (string | null) | undefined
  Offsides?: (number | null) | undefined
  OpponentScore?: (number | null) | undefined
  OwnGoals?: (number | null) | undefined
  Passes?: (number | null) | undefined
  PassesCompleted?: (number | null) | undefined
  PenaltiesConceded?: (number | null) | undefined
  PenaltiesWon?: (number | null) | undefined
  PenaltyKickGoals?: (number | null) | undefined
  PenaltyKickMisses?: (number | null) | undefined
  PenaltyKickSaves?: (number | null) | undefined
  Possession?: (number | null) | undefined
  RedCards?: (number | null) | undefined
  RoundId?: (number | null) | undefined
  Score?: (number | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Shots?: (number | null) | undefined
  ShotsOnGoal?: (number | null) | undefined
  StatId?: number | undefined
  Tackles?: (number | null) | undefined
  TacklesWon?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamId?: (number | null) | undefined
  Touches?: (number | null) | undefined
  Updated?: (string | null) | undefined
  UpdatedUtc?: (string | null) | undefined
  YellowCards?: (number | null) | undefined
  YellowRedCards?: (number | null) | undefined
}
type Round = {
  CurrentRound?: boolean | undefined
  CurrentWeek?: (number | null) | undefined
  EndDate?: (string | null) | undefined
  Games?: Game[] | undefined
  Name?: (string | null) | undefined
  PlayerSeasons?: PlayerSeason[] | undefined
  RoundId?: number | undefined
  Season?: number | undefined
  SeasonId?: number | undefined
  SeasonType?: number | undefined
  Standings?: Standing[] | undefined
  StartDate?: (string | null) | undefined
  TeamSeasons?: TeamSeason[] | undefined
  Type?: (string | null) | undefined
}
type Season = {
  CompetitionId?: number | undefined
  CompetitionName?: (string | null) | undefined
  CurrentSeason?: boolean | undefined
  EndDate?: (string | null) | undefined
  Name?: (string | null) | undefined
  Rounds?: Round[] | undefined
  Season?: number | undefined
  SeasonId?: number | undefined
  StartDate?: (string | null) | undefined
}
type Competition = {
  AreaId?: number | undefined
  AreaName?: (string | null) | undefined
  CompetitionId?: number | undefined
  Format?: (string | null) | undefined
  Gender?: (string | null) | undefined
  Key?: (string | null) | undefined
  Name?: (string | null) | undefined
  Seasons?: Season[] | undefined
  Type?: (string | null) | undefined
}
type Area = {
  AreaId?: number | undefined
  Competitions?: Competition[] | undefined
  CountryCode?: (string | null) | undefined
  Name?: (string | null) | undefined
}
type Referee = {
  FirstName?: (string | null) | undefined
  LastName?: (string | null) | undefined
  Nationality?: (string | null) | undefined
  RefereeId?: number | undefined
  ShortName?: (string | null) | undefined
}
type Coach = {
  CoachId?: number | undefined
  FirstName?: (string | null) | undefined
  LastName?: (string | null) | undefined
  Nationality?: (string | null) | undefined
  ShortName?: (string | null) | undefined
}
type Booking = {
  BookingId?: number | undefined
  GameId?: number | undefined
  GameMinute?: (number | null) | undefined
  GameMinuteExtra?: (number | null) | undefined
  Name?: (string | null) | undefined
  PlayerId?: (number | null) | undefined
  TeamId?: number | undefined
  Type?: (string | null) | undefined
}
type Goal = {
  AssistedByPlayerId1?: (number | null) | undefined
  AssistedByPlayerId2?: (number | null) | undefined
  AssistedByPlayerName1?: (string | null) | undefined
  AssistedByPlayerName2?: (string | null) | undefined
  GameId?: number | undefined
  GameMinute?: (number | null) | undefined
  GameMinuteExtra?: (number | null) | undefined
  GoalId?: number | undefined
  Name?: (string | null) | undefined
  PlayerId?: (number | null) | undefined
  TeamId?: number | undefined
  Type?: (string | null) | undefined
}
type Lineup = {
  GameId?: number | undefined
  GameMinute?: (number | null) | undefined
  GameMinuteExtra?: (number | null) | undefined
  LineupId?: number | undefined
  Name?: (string | null) | undefined
  PitchPositionHorizontal?: (number | null) | undefined
  PitchPositionVertical?: (number | null) | undefined
  PlayerId?: number | undefined
  Position?: (string | null) | undefined
  ReplacedPlayerId?: (number | null) | undefined
  ReplacedPlayerName?: (string | null) | undefined
  TeamId?: number | undefined
  Type?: (string | null) | undefined
}
type PenaltyShootout = {
  GameId?: number | undefined
  Name?: (string | null) | undefined
  Order?: number | undefined
  PenaltyShootoutId?: number | undefined
  PlayerId?: (number | null) | undefined
  Position?: (string | null) | undefined
  TeamId?: number | undefined
  Type?: (string | null) | undefined
}
type PlayerGame = {
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
type TeamGame = {
  Assists?: (number | null) | undefined
  BlockedShots?: (number | null) | undefined
  CornersWon?: (number | null) | undefined
  Crosses?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  DefenderCleanSheets?: (number | null) | undefined
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
  Interceptions?: (number | null) | undefined
  IsGameOver?: boolean | undefined
  LastManTackle?: (number | null) | undefined
  Minutes?: (number | null) | undefined
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
  Possession?: (number | null) | undefined
  RedCards?: (number | null) | undefined
  RoundId?: (number | null) | undefined
  Score?: (number | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Shots?: (number | null) | undefined
  ShotsOnGoal?: (number | null) | undefined
  StatId?: number | undefined
  Tackles?: (number | null) | undefined
  TacklesWon?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamId?: (number | null) | undefined
  Touches?: (number | null) | undefined
  Updated?: (string | null) | undefined
  UpdatedUtc?: (string | null) | undefined
  YellowCards?: (number | null) | undefined
  YellowRedCards?: (number | null) | undefined
}
type BoxScore = {
  AdditionalAssistantReferee1?: Referee | undefined
  AdditionalAssistantReferee2?: Referee | undefined
  AssistantReferee1?: Referee | undefined
  AssistantReferee2?: Referee | undefined
  AwayTeamCoach?: Coach | undefined
  Bookings?: Booking[] | undefined
  FourthReferee?: Referee | undefined
  Game?: Game | undefined
  Goals?: Goal[] | undefined
  HomeTeamCoach?: Coach | undefined
  Lineups?: Lineup[] | undefined
  MainReferee?: Referee | undefined
  PenaltyShootouts?: PenaltyShootout[] | undefined
  PlayerGames?: PlayerGame[] | undefined
  TeamGames?: TeamGame[] | undefined
  VideoAssistantReferee?: Referee | undefined
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
type TeamDetail = {
  Active?: boolean | undefined
  Address?: (string | null) | undefined
  AreaId?: (number | null) | undefined
  AreaName?: (string | null) | undefined
  City?: (string | null) | undefined
  ClubColor1?: (string | null) | undefined
  ClubColor2?: (string | null) | undefined
  ClubColor3?: (string | null) | undefined
  Email?: (string | null) | undefined
  Fax?: (string | null) | undefined
  Founded?: (number | null) | undefined
  FullName?: (string | null) | undefined
  Gender?: (string | null) | undefined
  GlobalTeamId?: number | undefined
  Key?: (string | null) | undefined
  Name?: (string | null) | undefined
  Nickname1?: (string | null) | undefined
  Nickname2?: (string | null) | undefined
  Nickname3?: (string | null) | undefined
  Phone?: (string | null) | undefined
  Players?: Player[] | undefined
  TeamId?: number | undefined
  Type?: (string | null) | undefined
  VenueId?: (number | null) | undefined
  VenueName?: (string | null) | undefined
  Website?: (string | null) | undefined
  WikipediaLogoUrl?: (string | null) | undefined
  WikipediaWordMarkUrl?: (string | null) | undefined
  Zip?: (string | null) | undefined
}
type CompetitionDetail = {
  AreaId?: number | undefined
  AreaName?: (string | null) | undefined
  CompetitionId?: number | undefined
  CurrentSeason?: Season | undefined
  Format?: (string | null) | undefined
  Games?: Game[] | undefined
  Gender?: (string | null) | undefined
  Key?: (string | null) | undefined
  Name?: (string | null) | undefined
  Seasons?: Season[] | undefined
  Teams?: TeamDetail[] | undefined
  Type?: (string | null) | undefined
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
type Team = {
  Active?: boolean | undefined
  Address?: (string | null) | undefined
  AreaId?: (number | null) | undefined
  AreaName?: (string | null) | undefined
  City?: (string | null) | undefined
  ClubColor1?: (string | null) | undefined
  ClubColor2?: (string | null) | undefined
  ClubColor3?: (string | null) | undefined
  Email?: (string | null) | undefined
  Fax?: (string | null) | undefined
  Founded?: (number | null) | undefined
  FullName?: (string | null) | undefined
  Gender?: (string | null) | undefined
  GlobalTeamId?: number | undefined
  Key?: (string | null) | undefined
  Name?: (string | null) | undefined
  Nickname1?: (string | null) | undefined
  Nickname2?: (string | null) | undefined
  Nickname3?: (string | null) | undefined
  Phone?: (string | null) | undefined
  TeamId?: number | undefined
  Type?: (string | null) | undefined
  VenueId?: (number | null) | undefined
  VenueName?: (string | null) | undefined
  Website?: (string | null) | undefined
  WikipediaLogoUrl?: (string | null) | undefined
  WikipediaWordMarkUrl?: (string | null) | undefined
  Zip?: (string | null) | undefined
}
type SeasonTeam = {
  Active?: boolean | undefined
  Gender?: (string | null) | undefined
  SeasonId?: number | undefined
  SeasonTeamId?: number | undefined
  Team?: Team | undefined
  TeamId?: number | undefined
  TeamName?: (string | null) | undefined
  Type?: (string | null) | undefined
}
type Venue = {
  Address?: (string | null) | undefined
  Capacity?: (number | null) | undefined
  City?: (string | null) | undefined
  Country?: (string | null) | undefined
  GeoLat?: (number | null) | undefined
  GeoLong?: (number | null) | undefined
  Name?: (string | null) | undefined
  Nickname1?: (string | null) | undefined
  Nickname2?: (string | null) | undefined
  Open?: boolean | undefined
  Opened?: (number | null) | undefined
  Surface?: (string | null) | undefined
  VenueId?: number | undefined
  Zip?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/ActiveMemberships': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Areas': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Area[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScore/:gameid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; gameid: string } }
        output: BoxScore
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScores/:date': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string } }
        output: BoxScore[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScoresByCompetition/:competition/:date': {
      $get: {
        input: { param: { format: 'xml' | 'json'; competition: string; date: string } }
        output: BoxScore[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScoresDelta/:date/:minutes': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string; minutes: string } }
        output: BoxScore[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScoresDeltaByCompetition/:competition/:date/:minutes': {
      $get: {
        input: {
          param: { format: 'xml' | 'json'; competition: string; date: string; minutes: string }
        }
        output: BoxScore[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/CompetitionDetails/:competition': {
      $get: {
        input: { param: { format: 'xml' | 'json'; competition: string } }
        output: CompetitionDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/CompetitionHierarchy': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Area[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Competitions': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Competition[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/DfsSlatesByDate/:date': {
      $get: {
        input: { param: { format: 'json' | 'xml'; date: string } }
        output: DfsSlate[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/GamesByDate/:date': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string } }
        output: Game[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/HistoricalMemberships': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/HistoricalMembershipsByCompetition/:competition': {
      $get: {
        input: { param: { format: 'xml' | 'json'; competition: string } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/HistoricalMembershipsByTeam/:teamid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; teamid: string } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/MembershipsByCompetition/:competition': {
      $get: {
        input: { param: { format: 'xml' | 'json'; competition: string } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/MembershipsByTeam/:teamid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; teamid: string } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Player/:playerid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; playerid: string } }
        output: Player
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameStatsByDate/:date': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string } }
        output: PlayerGame[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameStatsByPlayer/:date/:playerid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string; playerid: string } }
        output: PlayerGame[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerSeasonStats/:roundid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; roundid: string } }
        output: PlayerSeason[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerSeasonStatsByPlayer/:roundid/:playerid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; roundid: string; playerid: string } }
        output: PlayerSeason[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerSeasonStatsByTeam/:roundid/:team': {
      $get: {
        input: { param: { format: 'xml' | 'json'; roundid: string; team: string } }
        output: PlayerSeason[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Players': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Player[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayersByTeam/:teamid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; teamid: string } }
        output: Player[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/RecentlyChangedMemberships/:days': {
      $get: {
        input: { param: { format: 'xml' | 'json'; days: string } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Schedule/:roundid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; roundid: string } }
        output: Game[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/SeasonTeams/:seasonid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; seasonid: string } }
        output: SeasonTeam[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Standings/:roundid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; roundid: string } }
        output: Standing[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/TeamGameStatsByDate/:date': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string } }
        output: TeamGame[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/TeamSeasonStats/:roundid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; roundid: string } }
        output: TeamSeason[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Teams': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Team[]
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
  } & {
    '/:format/UpcomingScheduleByPlayer/:playerid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; playerid: string } }
        output: Game[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Venues': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Venue[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
