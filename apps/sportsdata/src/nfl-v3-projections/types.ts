type DfsSlatePlayerOwnershipProjection = {
  FantasyDefensePlayerID?: (number | null) | undefined
  IsCaptain?: boolean | undefined
  PlayerID?: (number | null) | undefined
  ProjectedOwnershipPercentage?: number | undefined
  SlateID?: number | undefined
}
type DfsSlateWithOwnershipProjection = {
  Operator?: (string | null) | undefined
  OperatorDay?: (string | null) | undefined
  OperatorName?: (string | null) | undefined
  OperatorSlateID?: (number | null) | undefined
  OperatorStartTime?: (string | null) | undefined
  SlateID?: number | undefined
  SlateOwnershipProjections?: DfsSlatePlayerOwnershipProjection[] | undefined
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
type Schedule = {
  AwayTeam?: (string | null) | undefined
  AwayTeamMoneyLine?: (number | null) | undefined
  Canceled?: (boolean | null) | undefined
  Channel?: (string | null) | undefined
  Date?: (string | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  ForecastDescription?: (string | null) | undefined
  ForecastTempHigh?: (number | null) | undefined
  ForecastTempLow?: (number | null) | undefined
  ForecastWindChill?: (number | null) | undefined
  ForecastWindSpeed?: (number | null) | undefined
  GameKey?: (string | null) | undefined
  GeoLat?: (number | null) | undefined
  GeoLong?: (number | null) | undefined
  GlobalAwayTeamID?: (number | null) | undefined
  GlobalGameID?: (number | null) | undefined
  GlobalHomeTeamID?: (number | null) | undefined
  HomeTeam?: (string | null) | undefined
  HomeTeamMoneyLine?: (number | null) | undefined
  OverUnder?: (number | null) | undefined
  PointSpread?: (number | null) | undefined
  ScoreID?: number | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  StadiumDetails?: Stadium | undefined
  StadiumID?: (number | null) | undefined
  Status?: (string | null) | undefined
  Week?: number | undefined
}
type DfsSlateGame = {
  Game?: Schedule | undefined
  GameID?: (number | null) | undefined
  OperatorGameID?: (number | null) | undefined
  RemovedByOperator?: (boolean | null) | undefined
  ScoreID?: (number | null) | undefined
  SlateGameID?: number | undefined
  SlateID?: number | undefined
}
type DfsSlatePlayer = {
  FantasyDefenseProjectionStatID?: (number | null) | undefined
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
type ScoringDetail = {
  GameKey?: (string | null) | undefined
  Length?: number | undefined
  PlayerGameID?: number | undefined
  PlayerID?: (number | null) | undefined
  ScoreID?: (number | null) | undefined
  ScoringDetailID?: number | undefined
  ScoringPlayID?: (number | null) | undefined
  ScoringType?: (string | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Team?: (string | null) | undefined
  Week?: number | undefined
}
type FantasyDefenseGameProjection = {
  AssistedTackles?: number | undefined
  BlockedKickReturnTouchdowns?: (number | null) | undefined
  BlockedKickReturnYards?: (number | null) | undefined
  BlockedKicks?: number | undefined
  Date?: (string | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  DefensiveTouchdowns?: (number | null) | undefined
  DraftKingsFantasyPointsAllowed?: (number | null) | undefined
  DraftKingsKickerFantasyPointsAllowed?: (number | null) | undefined
  DraftKingsPosition?: (string | null) | undefined
  DraftKingsQuarterbackFantasyPointsAllowed?: (number | null) | undefined
  DraftKingsRunningbackFantasyPointsAllowed?: (number | null) | undefined
  DraftKingsSalary?: (number | null) | undefined
  DraftKingsTightEndFantasyPointsAllowed?: (number | null) | undefined
  DraftKingsWideReceiverFantasyPointsAllowed?: (number | null) | undefined
  FanDuelFantasyPointsAllowed?: (number | null) | undefined
  FanDuelKickerFantasyPointsAllowed?: (number | null) | undefined
  FanDuelPosition?: (string | null) | undefined
  FanDuelQuarterbackFantasyPointsAllowed?: (number | null) | undefined
  FanDuelRunningbackFantasyPointsAllowed?: (number | null) | undefined
  FanDuelSalary?: (number | null) | undefined
  FanDuelTightEndFantasyPointsAllowed?: (number | null) | undefined
  FanDuelWideReceiverFantasyPointsAllowed?: (number | null) | undefined
  FantasyDataSalary?: (number | null) | undefined
  FantasyDefenseID?: (number | null) | undefined
  FantasyDraftFantasyPointsAllowed?: (number | null) | undefined
  FantasyDraftKickerFantasyPointsAllowed?: (number | null) | undefined
  FantasyDraftPosition?: (string | null) | undefined
  FantasyDraftQuarterbackFantasyPointsAllowed?: (number | null) | undefined
  FantasyDraftRunningbackFantasyPointsAllowed?: (number | null) | undefined
  FantasyDraftSalary?: (number | null) | undefined
  FantasyDraftTightEndFantasyPointsAllowed?: (number | null) | undefined
  FantasyDraftWideReceiverFantasyPointsAllowed?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsAllowed?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsFantasyDraft?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  FieldGoalReturnTouchdowns?: (number | null) | undefined
  FieldGoalReturnYards?: (number | null) | undefined
  FourthDownAttempts?: (number | null) | undefined
  FourthDownConversions?: (number | null) | undefined
  FumbleReturnTouchdowns?: number | undefined
  FumbleReturnYards?: number | undefined
  FumblesForced?: number | undefined
  FumblesRecovered?: number | undefined
  GameKey?: (string | null) | undefined
  GlobalGameID?: (number | null) | undefined
  GlobalOpponentID?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  HomeOrAway?: (string | null) | undefined
  Humidity?: (number | null) | undefined
  InterceptionReturnTouchdowns?: number | undefined
  InterceptionReturnYards?: number | undefined
  Interceptions?: number | undefined
  IsGameOver?: (boolean | null) | undefined
  KickReturnLong?: number | undefined
  KickReturnTouchdowns?: number | undefined
  KickReturnYards?: number | undefined
  KickReturns?: number | undefined
  KickerFantasyPointsAllowed?: (number | null) | undefined
  OffensiveYardsAllowed?: (number | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentID?: (number | null) | undefined
  OpponentPositionRank?: (number | null) | undefined
  OpponentRank?: (number | null) | undefined
  PassesDefended?: number | undefined
  PlayerID?: (number | null) | undefined
  PointsAllowed?: number | undefined
  PointsAllowedByDefenseSpecialTeams?: (number | null) | undefined
  PuntReturnLong?: number | undefined
  PuntReturnTouchdowns?: number | undefined
  PuntReturnYards?: number | undefined
  PuntReturns?: number | undefined
  QuarterbackFantasyPointsAllowed?: (number | null) | undefined
  QuarterbackHits?: (number | null) | undefined
  RunningbackFantasyPointsAllowed?: (number | null) | undefined
  SackYards?: number | undefined
  Sacks?: number | undefined
  Safeties?: number | undefined
  ScoreID?: number | undefined
  ScoringDetails?: ScoringDetail[] | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  SoloTackles?: number | undefined
  SpecialTeamsTouchdowns?: (number | null) | undefined
  Stadium?: (string | null) | undefined
  TacklesForLoss?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  Temperature?: (number | null) | undefined
  ThirdDownAttempts?: (number | null) | undefined
  ThirdDownConversions?: (number | null) | undefined
  TightEndFantasyPointsAllowed?: (number | null) | undefined
  TouchdownsScored?: number | undefined
  TwoPointConversionReturns?: (number | null) | undefined
  VictivSalary?: (number | null) | undefined
  Week?: (number | null) | undefined
  WideReceiverFantasyPointsAllowed?: (number | null) | undefined
  WindSpeed?: (number | null) | undefined
  YahooFantasyPointsAllowed?: (number | null) | undefined
  YahooKickerFantasyPointsAllowed?: (number | null) | undefined
  YahooPosition?: (string | null) | undefined
  YahooQuarterbackFantasyPointsAllowed?: (number | null) | undefined
  YahooRunningbackFantasyPointsAllowed?: (number | null) | undefined
  YahooSalary?: (number | null) | undefined
  YahooTightEndFantasyPointsAllowed?: (number | null) | undefined
  YahooWideReceiverFantasyPointsAllowed?: (number | null) | undefined
}
type FantasyDefenseSeasonProjection = {
  AssistedTackles?: number | undefined
  AuctionValue?: (number | null) | undefined
  AuctionValuePPR?: (number | null) | undefined
  AverageDraftPosition?: (number | null) | undefined
  AverageDraftPosition2QB?: (number | null) | undefined
  AverageDraftPositionDynasty?: (number | null) | undefined
  AverageDraftPositionPPR?: (number | null) | undefined
  BlockedKickReturnTouchdowns?: (number | null) | undefined
  BlockedKickReturnYards?: (number | null) | undefined
  BlockedKicks?: number | undefined
  DefensiveTouchdowns?: (number | null) | undefined
  DraftKingsFantasyPointsAllowed?: (number | null) | undefined
  DraftKingsKickerFantasyPointsAllowed?: (number | null) | undefined
  DraftKingsQuarterbackFantasyPointsAllowed?: (number | null) | undefined
  DraftKingsRunningbackFantasyPointsAllowed?: (number | null) | undefined
  DraftKingsTightEndFantasyPointsAllowed?: (number | null) | undefined
  DraftKingsWideReceiverFantasyPointsAllowed?: (number | null) | undefined
  FanDuelFantasyPointsAllowed?: (number | null) | undefined
  FanDuelKickerFantasyPointsAllowed?: (number | null) | undefined
  FanDuelQuarterbackFantasyPointsAllowed?: (number | null) | undefined
  FanDuelRunningbackFantasyPointsAllowed?: (number | null) | undefined
  FanDuelTightEndFantasyPointsAllowed?: (number | null) | undefined
  FanDuelWideReceiverFantasyPointsAllowed?: (number | null) | undefined
  FantasyDraftFantasyPointsAllowed?: (number | null) | undefined
  FantasyDraftKickerFantasyPointsAllowed?: (number | null) | undefined
  FantasyDraftQuarterbackFantasyPointsAllowed?: (number | null) | undefined
  FantasyDraftRunningbackFantasyPointsAllowed?: (number | null) | undefined
  FantasyDraftTightEndFantasyPointsAllowed?: (number | null) | undefined
  FantasyDraftWideReceiverFantasyPointsAllowed?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsAllowed?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsFantasyDraft?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  FieldGoalReturnTouchdowns?: (number | null) | undefined
  FieldGoalReturnYards?: (number | null) | undefined
  FourthDownAttempts?: (number | null) | undefined
  FourthDownConversions?: (number | null) | undefined
  FumbleReturnTouchdowns?: number | undefined
  FumbleReturnYards?: number | undefined
  FumblesForced?: number | undefined
  FumblesRecovered?: number | undefined
  Games?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  Humidity?: (number | null) | undefined
  InterceptionReturnTouchdowns?: number | undefined
  InterceptionReturnYards?: number | undefined
  Interceptions?: number | undefined
  KickReturnLong?: number | undefined
  KickReturnTouchdowns?: number | undefined
  KickReturnYards?: number | undefined
  KickReturns?: number | undefined
  KickerFantasyPointsAllowed?: (number | null) | undefined
  OffensiveYardsAllowed?: (number | null) | undefined
  PassesDefended?: number | undefined
  PlayerID?: (number | null) | undefined
  PointsAllowed?: number | undefined
  PointsAllowedByDefenseSpecialTeams?: (number | null) | undefined
  PuntReturnLong?: number | undefined
  PuntReturnTouchdowns?: number | undefined
  PuntReturnYards?: number | undefined
  PuntReturns?: number | undefined
  QuarterbackFantasyPointsAllowed?: (number | null) | undefined
  QuarterbackHits?: (number | null) | undefined
  RunningbackFantasyPointsAllowed?: (number | null) | undefined
  SackYards?: number | undefined
  Sacks?: number | undefined
  Safeties?: number | undefined
  ScoringDetails?: ScoringDetail[] | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  SoloTackles?: number | undefined
  SpecialTeamsTouchdowns?: (number | null) | undefined
  TacklesForLoss?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  Temperature?: (number | null) | undefined
  ThirdDownAttempts?: (number | null) | undefined
  ThirdDownConversions?: (number | null) | undefined
  TightEndFantasyPointsAllowed?: (number | null) | undefined
  TouchdownsScored?: number | undefined
  TwoPointConversionReturns?: (number | null) | undefined
  WideReceiverFantasyPointsAllowed?: (number | null) | undefined
  WindSpeed?: (number | null) | undefined
  YahooFantasyPointsAllowed?: (number | null) | undefined
  YahooKickerFantasyPointsAllowed?: (number | null) | undefined
  YahooQuarterbackFantasyPointsAllowed?: (number | null) | undefined
  YahooRunningbackFantasyPointsAllowed?: (number | null) | undefined
  YahooTightEndFantasyPointsAllowed?: (number | null) | undefined
  YahooWideReceiverFantasyPointsAllowed?: (number | null) | undefined
}
type PlayerGameProjection = {
  Activated?: number | undefined
  AssistedTackles?: number | undefined
  BlockedKickReturnTouchdowns?: (number | null) | undefined
  BlockedKickReturnYards?: (number | null) | undefined
  BlockedKicks?: number | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  DeclaredInactive?: boolean | undefined
  DefensiveSnapsPlayed?: (number | null) | undefined
  DefensiveTeamSnaps?: (number | null) | undefined
  DefensiveTouchdowns?: number | undefined
  DraftKingsPosition?: (string | null) | undefined
  DraftKingsSalary?: (number | null) | undefined
  ExtraPointsAttempted?: (number | null) | undefined
  ExtraPointsHadBlocked?: (number | null) | undefined
  ExtraPointsMade?: number | undefined
  FanDuelPosition?: (string | null) | undefined
  FanDuelSalary?: (number | null) | undefined
  FantasyDataSalary?: (number | null) | undefined
  FantasyDraftPosition?: (string | null) | undefined
  FantasyDraftSalary?: (number | null) | undefined
  FantasyPoints?: number | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsFantasyDraft?: (number | null) | undefined
  FantasyPointsPPR?: number | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  FantasyPosition?: (string | null) | undefined
  FieldGoalPercentage?: number | undefined
  FieldGoalReturnTouchdowns?: (number | null) | undefined
  FieldGoalReturnYards?: (number | null) | undefined
  FieldGoalsAttempted?: number | undefined
  FieldGoalsHadBlocked?: (number | null) | undefined
  FieldGoalsLongestMade?: number | undefined
  FieldGoalsMade?: number | undefined
  FieldGoalsMade0to19?: (number | null) | undefined
  FieldGoalsMade20to29?: (number | null) | undefined
  FieldGoalsMade30to39?: (number | null) | undefined
  FieldGoalsMade40to49?: (number | null) | undefined
  FieldGoalsMade50Plus?: (number | null) | undefined
  FumbleReturnTouchdowns?: number | undefined
  FumbleReturnYards?: number | undefined
  Fumbles?: number | undefined
  FumblesForced?: number | undefined
  FumblesLost?: (number | null) | undefined
  FumblesOutOfBounds?: (number | null) | undefined
  FumblesOwnRecoveries?: (number | null) | undefined
  FumblesRecovered?: number | undefined
  GameDate?: (string | null) | undefined
  GameKey?: (string | null) | undefined
  GlobalGameID?: (number | null) | undefined
  GlobalOpponentID?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  HomeOrAway?: (string | null) | undefined
  Humidity?: (number | null) | undefined
  InjuryBodyPart?: (string | null) | undefined
  InjuryNotes?: (string | null) | undefined
  InjuryPractice?: (string | null) | undefined
  InjuryPracticeDescription?: (string | null) | undefined
  InjuryStartDate?: (string | null) | undefined
  InjuryStatus?: (string | null) | undefined
  InterceptionReturnTouchdowns?: number | undefined
  InterceptionReturnYards?: number | undefined
  Interceptions?: number | undefined
  IsGameOver?: (boolean | null) | undefined
  KickReturnFairCatches?: (number | null) | undefined
  KickReturnLong?: number | undefined
  KickReturnTouchdowns?: number | undefined
  KickReturnYards?: number | undefined
  KickReturnYardsPerAttempt?: number | undefined
  KickReturns?: number | undefined
  MiscAssistedTackles?: number | undefined
  MiscFumblesForced?: (number | null) | undefined
  MiscFumblesRecovered?: (number | null) | undefined
  MiscSoloTackles?: number | undefined
  Name?: (string | null) | undefined
  Number?: number | undefined
  OffensiveFumbleRecoveryTouchdowns?: (number | null) | undefined
  OffensiveSnapsPlayed?: (number | null) | undefined
  OffensiveTeamSnaps?: (number | null) | undefined
  OffensiveTouchdowns?: number | undefined
  Opponent?: (string | null) | undefined
  OpponentID?: (number | null) | undefined
  OpponentPositionRank?: (number | null) | undefined
  OpponentRank?: (number | null) | undefined
  PassesDefended?: number | undefined
  PassingAttempts?: number | undefined
  PassingCompletionPercentage?: number | undefined
  PassingCompletions?: number | undefined
  PassingInterceptions?: number | undefined
  PassingLong?: number | undefined
  PassingRating?: number | undefined
  PassingSackYards?: number | undefined
  PassingSacks?: number | undefined
  PassingTouchdowns?: number | undefined
  PassingYards?: number | undefined
  PassingYardsPerAttempt?: number | undefined
  PassingYardsPerCompletion?: number | undefined
  Played?: number | undefined
  PlayerGameID?: number | undefined
  PlayerID?: (number | null) | undefined
  PlayingSurface?: (string | null) | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  PuntAverage?: number | undefined
  PuntInside20?: (number | null) | undefined
  PuntLong?: (number | null) | undefined
  PuntNetAverage?: (number | null) | undefined
  PuntNetYards?: (number | null) | undefined
  PuntReturnFairCatches?: (number | null) | undefined
  PuntReturnLong?: number | undefined
  PuntReturnTouchdowns?: number | undefined
  PuntReturnYards?: number | undefined
  PuntReturnYardsPerAttempt?: number | undefined
  PuntReturns?: number | undefined
  PuntTouchbacks?: (number | null) | undefined
  PuntYards?: number | undefined
  Punts?: number | undefined
  PuntsHadBlocked?: (number | null) | undefined
  QuarterbackHits?: (number | null) | undefined
  ReceivingLong?: number | undefined
  ReceivingTargets?: (number | null) | undefined
  ReceivingTouchdowns?: number | undefined
  ReceivingYards?: number | undefined
  ReceivingYardsPerReception?: number | undefined
  ReceivingYardsPerTarget?: number | undefined
  ReceptionPercentage?: number | undefined
  Receptions?: number | undefined
  RushingAttempts?: number | undefined
  RushingLong?: number | undefined
  RushingTouchdowns?: number | undefined
  RushingYards?: number | undefined
  RushingYardsPerAttempt?: number | undefined
  SackYards?: number | undefined
  Sacks?: number | undefined
  Safeties?: (number | null) | undefined
  SafetiesAllowed?: (number | null) | undefined
  ScoreID?: number | undefined
  ScoringDetails?: ScoringDetail[] | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  ShortName?: (string | null) | undefined
  SnapCountsConfirmed?: (boolean | null) | undefined
  SoloTackles?: number | undefined
  SpecialTeamsAssistedTackles?: number | undefined
  SpecialTeamsFumblesForced?: (number | null) | undefined
  SpecialTeamsFumblesRecovered?: (number | null) | undefined
  SpecialTeamsSnapsPlayed?: (number | null) | undefined
  SpecialTeamsSoloTackles?: number | undefined
  SpecialTeamsTeamSnaps?: (number | null) | undefined
  SpecialTeamsTouchdowns?: number | undefined
  Stadium?: (string | null) | undefined
  Started?: number | undefined
  Tackles?: number | undefined
  TacklesForLoss?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  Temperature?: (number | null) | undefined
  Touchdowns?: number | undefined
  TwoPointConversionPasses?: number | undefined
  TwoPointConversionReceptions?: number | undefined
  TwoPointConversionReturns?: (number | null) | undefined
  TwoPointConversionRuns?: number | undefined
  VictivSalary?: (number | null) | undefined
  Week?: number | undefined
  WindSpeed?: (number | null) | undefined
  YahooPosition?: (string | null) | undefined
  YahooSalary?: (number | null) | undefined
}
type Player = {
  Active?: (boolean | null) | undefined
  Age?: (number | null) | undefined
  AverageDraftPosition?: (number | null) | undefined
  BirthDate?: (string | null) | undefined
  BirthDateString?: (string | null) | undefined
  ByeWeek?: (number | null) | undefined
  College?: (string | null) | undefined
  CollegeDraftPick?: (number | null) | undefined
  CollegeDraftRound?: (number | null) | undefined
  CollegeDraftTeam?: (string | null) | undefined
  CollegeDraftYear?: (number | null) | undefined
  CurrentStatus?: (string | null) | undefined
  CurrentTeam?: (string | null) | undefined
  DeclaredInactive?: boolean | undefined
  DepthDisplayOrder?: (number | null) | undefined
  DepthOrder?: (number | null) | undefined
  DepthPosition?: (string | null) | undefined
  DepthPositionCategory?: (string | null) | undefined
  DraftKingsName?: (string | null) | undefined
  DraftKingsPlayerID?: (number | null) | undefined
  Experience?: (number | null) | undefined
  ExperienceString?: (string | null) | undefined
  FanDuelName?: (string | null) | undefined
  FanDuelPlayerID?: (number | null) | undefined
  FantasyAlarmPlayerID?: (number | null) | undefined
  FantasyDraftName?: (string | null) | undefined
  FantasyDraftPlayerID?: (number | null) | undefined
  FantasyPosition?: (string | null) | undefined
  FantasyPositionDepthOrder?: (number | null) | undefined
  FirstName?: (string | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  Height?: (string | null) | undefined
  HeightFeet?: (number | null) | undefined
  HeightInches?: (number | null) | undefined
  InjuryBodyPart?: (string | null) | undefined
  InjuryNotes?: (string | null) | undefined
  InjuryPractice?: (string | null) | undefined
  InjuryPracticeDescription?: (string | null) | undefined
  InjuryStartDate?: (string | null) | undefined
  InjuryStatus?: (string | null) | undefined
  IsUndraftedFreeAgent?: boolean | undefined
  LastName?: (string | null) | undefined
  Name?: (string | null) | undefined
  Number?: (number | null) | undefined
  PhotoUrl?: (string | null) | undefined
  PlayerID?: number | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  RotoWirePlayerID?: (number | null) | undefined
  RotoworldPlayerID?: (number | null) | undefined
  ShortName?: (string | null) | undefined
  SportRadarPlayerID?: (string | null) | undefined
  SportsDirectPlayerID?: (number | null) | undefined
  StatsPlayerID?: (number | null) | undefined
  Status?: (string | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  UpcomingDraftKingsSalary?: (number | null) | undefined
  UpcomingFanDuelSalary?: (number | null) | undefined
  UpcomingGameOpponent?: (string | null) | undefined
  UpcomingGameWeek?: number | undefined
  UpcomingOpponentPositionRank?: (number | null) | undefined
  UpcomingOpponentRank?: (number | null) | undefined
  UpcomingSalary?: (number | null) | undefined
  UpcomingYahooSalary?: (number | null) | undefined
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
type PlayerSeasonProjection = {
  Activated?: number | undefined
  AssistedTackles?: number | undefined
  AuctionValue?: (number | null) | undefined
  AuctionValuePPR?: (number | null) | undefined
  AverageDraftPosition?: (number | null) | undefined
  AverageDraftPosition2QB?: (number | null) | undefined
  AverageDraftPositionDynasty?: (number | null) | undefined
  AverageDraftPositionPPR?: (number | null) | undefined
  AverageDraftPositionRookie?: (number | null) | undefined
  BlockedKickReturnTouchdowns?: (number | null) | undefined
  BlockedKickReturnYards?: (number | null) | undefined
  BlockedKicks?: number | undefined
  DefensiveSnapsPlayed?: (number | null) | undefined
  DefensiveTeamSnaps?: (number | null) | undefined
  DefensiveTouchdowns?: number | undefined
  ExtraPointsAttempted?: (number | null) | undefined
  ExtraPointsHadBlocked?: (number | null) | undefined
  ExtraPointsMade?: number | undefined
  FantasyPoints?: number | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsFantasyDraft?: (number | null) | undefined
  FantasyPointsPPR?: number | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  FantasyPosition?: (string | null) | undefined
  FieldGoalPercentage?: number | undefined
  FieldGoalReturnTouchdowns?: (number | null) | undefined
  FieldGoalReturnYards?: (number | null) | undefined
  FieldGoalsAttempted?: number | undefined
  FieldGoalsHadBlocked?: (number | null) | undefined
  FieldGoalsLongestMade?: number | undefined
  FieldGoalsMade?: number | undefined
  FieldGoalsMade0to19?: (number | null) | undefined
  FieldGoalsMade20to29?: (number | null) | undefined
  FieldGoalsMade30to39?: (number | null) | undefined
  FieldGoalsMade40to49?: (number | null) | undefined
  FieldGoalsMade50Plus?: (number | null) | undefined
  FumbleReturnTouchdowns?: number | undefined
  FumbleReturnYards?: number | undefined
  Fumbles?: number | undefined
  FumblesForced?: number | undefined
  FumblesLost?: (number | null) | undefined
  FumblesOutOfBounds?: (number | null) | undefined
  FumblesOwnRecoveries?: (number | null) | undefined
  FumblesRecovered?: number | undefined
  GlobalTeamID?: (number | null) | undefined
  Humidity?: (number | null) | undefined
  InterceptionReturnTouchdowns?: number | undefined
  InterceptionReturnYards?: number | undefined
  Interceptions?: number | undefined
  KickReturnFairCatches?: (number | null) | undefined
  KickReturnLong?: number | undefined
  KickReturnTouchdowns?: number | undefined
  KickReturnYards?: number | undefined
  KickReturnYardsPerAttempt?: number | undefined
  KickReturns?: number | undefined
  MiscAssistedTackles?: number | undefined
  MiscFumblesForced?: (number | null) | undefined
  MiscFumblesRecovered?: (number | null) | undefined
  MiscSoloTackles?: number | undefined
  Name?: (string | null) | undefined
  Number?: number | undefined
  OffensiveFumbleRecoveryTouchdowns?: (number | null) | undefined
  OffensiveSnapsPlayed?: (number | null) | undefined
  OffensiveTeamSnaps?: (number | null) | undefined
  OffensiveTouchdowns?: number | undefined
  PassesDefended?: number | undefined
  PassingAttempts?: number | undefined
  PassingCompletionPercentage?: number | undefined
  PassingCompletions?: number | undefined
  PassingInterceptions?: number | undefined
  PassingLong?: number | undefined
  PassingRating?: number | undefined
  PassingSackYards?: number | undefined
  PassingSacks?: number | undefined
  PassingTouchdowns?: number | undefined
  PassingYards?: number | undefined
  PassingYardsPerAttempt?: number | undefined
  PassingYardsPerCompletion?: number | undefined
  Played?: number | undefined
  PlayerID?: (number | null) | undefined
  PlayerSeasonID?: number | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  PuntAverage?: number | undefined
  PuntInside20?: (number | null) | undefined
  PuntLong?: (number | null) | undefined
  PuntNetAverage?: (number | null) | undefined
  PuntNetYards?: (number | null) | undefined
  PuntReturnFairCatches?: (number | null) | undefined
  PuntReturnLong?: number | undefined
  PuntReturnTouchdowns?: number | undefined
  PuntReturnYards?: number | undefined
  PuntReturnYardsPerAttempt?: number | undefined
  PuntReturns?: number | undefined
  PuntTouchbacks?: (number | null) | undefined
  PuntYards?: number | undefined
  Punts?: number | undefined
  PuntsHadBlocked?: (number | null) | undefined
  QuarterbackHits?: (number | null) | undefined
  ReceivingLong?: number | undefined
  ReceivingTargets?: (number | null) | undefined
  ReceivingTouchdowns?: number | undefined
  ReceivingYards?: number | undefined
  ReceivingYardsPerReception?: number | undefined
  ReceivingYardsPerTarget?: number | undefined
  ReceptionPercentage?: number | undefined
  Receptions?: number | undefined
  RushingAttempts?: number | undefined
  RushingLong?: number | undefined
  RushingTouchdowns?: number | undefined
  RushingYards?: number | undefined
  RushingYardsPerAttempt?: number | undefined
  SackYards?: number | undefined
  Sacks?: number | undefined
  Safeties?: (number | null) | undefined
  SafetiesAllowed?: (number | null) | undefined
  ScoringDetails?: ScoringDetail[] | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  ShortName?: (string | null) | undefined
  SoloTackles?: number | undefined
  SpecialTeamsAssistedTackles?: number | undefined
  SpecialTeamsFumblesForced?: (number | null) | undefined
  SpecialTeamsFumblesRecovered?: (number | null) | undefined
  SpecialTeamsSnapsPlayed?: (number | null) | undefined
  SpecialTeamsSoloTackles?: number | undefined
  SpecialTeamsTeamSnaps?: (number | null) | undefined
  SpecialTeamsTouchdowns?: number | undefined
  Started?: number | undefined
  Tackles?: number | undefined
  TacklesForLoss?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  Temperature?: (number | null) | undefined
  Touchdowns?: number | undefined
  TwoPointConversionPasses?: number | undefined
  TwoPointConversionReceptions?: number | undefined
  TwoPointConversionReturns?: (number | null) | undefined
  TwoPointConversionRuns?: number | undefined
  WindSpeed?: (number | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/DfsSlateOwnershipProjectionsBySlateID/:slateId': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; slateId: string } }
        output: DfsSlateWithOwnershipProjection
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
    '/:format/DfsSlatesByWeek/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
        output: DfsSlate[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/FantasyDefenseProjectionsByGame/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
        output: FantasyDefenseGameProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/FantasyDefenseProjectionsBySeason/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: FantasyDefenseSeasonProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/IdpPlayerGameProjectionStatsByPlayerID/:season/:week/:playerid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string; playerid: string } }
        output: PlayerGameProjection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/IdpPlayerGameProjectionStatsByTeam/:season/:week/:team': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string; team: string } }
        output: PlayerGameProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/IdpPlayerGameProjectionStatsByWeek/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
        output: PlayerGameProjection[]
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
    '/:format/PlayerGameProjectionStatsByPlayerID/:season/:week/:playerid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string; playerid: string } }
        output: PlayerGameProjection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameProjectionStatsByTeam/:season/:week/:team': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string; team: string } }
        output: PlayerGameProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameProjectionStatsByWeek/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
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
    '/:format/PlayerSeasonProjectionStatsByPlayerID/:season/:playerid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; playerid: string } }
        output: PlayerSeasonProjection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerSeasonProjectionStatsByTeam/:season/:team': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; team: string } }
        output: PlayerSeasonProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/UpcomingDfsSlateOwnershipProjections': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: DfsSlateWithOwnershipProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
