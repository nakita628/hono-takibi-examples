type PlayerDefense = {
  AssistedTackles?: number | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPosition?: (string | null) | undefined
  FumbleReturnTouchdowns?: number | undefined
  FumblesForced?: number | undefined
  FumblesRecovered?: number | undefined
  InterceptionReturnTouchdowns?: number | undefined
  InterceptionReturnYards?: number | undefined
  Interceptions?: number | undefined
  Name?: (string | null) | undefined
  Number?: number | undefined
  PassesDefended?: number | undefined
  PlayerGameID?: (number | null) | undefined
  PlayerID?: (number | null) | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  QuarterbackHits?: number | undefined
  SackYards?: number | undefined
  Sacks?: number | undefined
  Safeties?: number | undefined
  ShortName?: (string | null) | undefined
  SoloTackles?: number | undefined
  Tackles?: number | undefined
  TacklesForLoss?: (number | null) | undefined
  Team?: (string | null) | undefined
  Updated?: (string | null) | undefined
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
type FantasyDefenseGame = {
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
type PlayerKickPuntReturns = {
  FantasyPoints?: (number | null) | undefined
  FantasyPosition?: (string | null) | undefined
  FumblesLost?: number | undefined
  KickReturnLong?: number | undefined
  KickReturnTouchdowns?: number | undefined
  KickReturnYards?: number | undefined
  KickReturnYardsPerAttempt?: number | undefined
  KickReturns?: number | undefined
  Name?: (string | null) | undefined
  Number?: number | undefined
  PlayerGameID?: (number | null) | undefined
  PlayerID?: (number | null) | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  PuntReturnLong?: number | undefined
  PuntReturnTouchdowns?: number | undefined
  PuntReturnYards?: number | undefined
  PuntReturnYardsPerAttempt?: number | undefined
  PuntReturns?: number | undefined
  ShortName?: (string | null) | undefined
  Team?: (string | null) | undefined
  Updated?: (string | null) | undefined
}
type PlayerKicking = {
  ExtraPointsAttempted?: number | undefined
  ExtraPointsMade?: number | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPosition?: (string | null) | undefined
  FieldGoalPercentage?: number | undefined
  FieldGoalsAttempted?: number | undefined
  FieldGoalsLongestMade?: number | undefined
  FieldGoalsMade?: number | undefined
  FieldGoalsMade0to19?: number | undefined
  FieldGoalsMade20to29?: number | undefined
  FieldGoalsMade30to39?: number | undefined
  FieldGoalsMade40to49?: number | undefined
  FieldGoalsMade50Plus?: number | undefined
  Name?: (string | null) | undefined
  Number?: number | undefined
  PlayerGameID?: (number | null) | undefined
  PlayerID?: (number | null) | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  ShortName?: (string | null) | undefined
  Team?: (string | null) | undefined
  Updated?: (string | null) | undefined
}
type PlayerPassing = {
  FantasyPoints?: (number | null) | undefined
  FantasyPosition?: (string | null) | undefined
  FumblesLost?: number | undefined
  Name?: (string | null) | undefined
  Number?: number | undefined
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
  PlayerGameID?: (number | null) | undefined
  PlayerID?: (number | null) | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  ShortName?: (string | null) | undefined
  Team?: (string | null) | undefined
  TwoPointConversionPasses?: number | undefined
  Updated?: (string | null) | undefined
}
type PlayerPunting = {
  FantasyPoints?: (number | null) | undefined
  FantasyPosition?: (string | null) | undefined
  Name?: (string | null) | undefined
  Number?: number | undefined
  PlayerGameID?: (number | null) | undefined
  PlayerID?: (number | null) | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  PuntAverage?: number | undefined
  PuntInside20?: number | undefined
  PuntTouchbacks?: number | undefined
  PuntYards?: number | undefined
  Punts?: number | undefined
  ShortName?: (string | null) | undefined
  Team?: (string | null) | undefined
  Updated?: (string | null) | undefined
}
type PlayerReceiving = {
  FantasyPoints?: (number | null) | undefined
  FantasyPosition?: (string | null) | undefined
  FumblesLost?: number | undefined
  Name?: (string | null) | undefined
  Number?: number | undefined
  PlayerGameID?: (number | null) | undefined
  PlayerID?: (number | null) | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  ReceivingLong?: number | undefined
  ReceivingTargets?: number | undefined
  ReceivingTouchdowns?: number | undefined
  ReceivingYards?: number | undefined
  ReceivingYardsPerReception?: number | undefined
  ReceivingYardsPerTarget?: number | undefined
  ReceptionPercentage?: number | undefined
  Receptions?: number | undefined
  ShortName?: (string | null) | undefined
  Team?: (string | null) | undefined
  TwoPointConversionReceptions?: number | undefined
  Updated?: (string | null) | undefined
}
type PlayerRushing = {
  FantasyPoints?: (number | null) | undefined
  FantasyPosition?: (string | null) | undefined
  FumblesLost?: number | undefined
  Name?: (string | null) | undefined
  Number?: number | undefined
  PlayerGameID?: (number | null) | undefined
  PlayerID?: (number | null) | undefined
  Position?: (string | null) | undefined
  PositionCategory?: (string | null) | undefined
  RushingAttempts?: number | undefined
  RushingLong?: number | undefined
  RushingTouchdowns?: number | undefined
  RushingYards?: number | undefined
  RushingYardsPerAttempt?: number | undefined
  ShortName?: (string | null) | undefined
  Team?: (string | null) | undefined
  TwoPointConversionRuns?: number | undefined
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
type Game = {
  AwayAssistedTackles?: (number | null) | undefined
  AwayBlockedKickReturnTouchdowns?: (number | null) | undefined
  AwayBlockedKickReturnYards?: (number | null) | undefined
  AwayBlockedKicks?: (number | null) | undefined
  AwayCompletionPercentage?: (number | null) | undefined
  AwayExtraPointKickingAttempts?: (number | null) | undefined
  AwayExtraPointKickingConversions?: (number | null) | undefined
  AwayExtraPointPassingAttempts?: (number | null) | undefined
  AwayExtraPointPassingConversions?: (number | null) | undefined
  AwayExtraPointRushingAttempts?: (number | null) | undefined
  AwayExtraPointRushingConversions?: (number | null) | undefined
  AwayExtraPointsHadBlocked?: (number | null) | undefined
  AwayFieldGoalAttempts?: (number | null) | undefined
  AwayFieldGoalReturnTouchdowns?: (number | null) | undefined
  AwayFieldGoalReturnYards?: (number | null) | undefined
  AwayFieldGoalsHadBlocked?: (number | null) | undefined
  AwayFieldGoalsMade?: (number | null) | undefined
  AwayFirstDowns?: (number | null) | undefined
  AwayFirstDownsByPassing?: (number | null) | undefined
  AwayFirstDownsByPenalty?: (number | null) | undefined
  AwayFirstDownsByRushing?: (number | null) | undefined
  AwayFourthDownAttempts?: (number | null) | undefined
  AwayFourthDownConversions?: (number | null) | undefined
  AwayFourthDownPercentage?: (number | null) | undefined
  AwayFumbleReturnTouchdowns?: (number | null) | undefined
  AwayFumbleReturnYards?: (number | null) | undefined
  AwayFumbles?: (number | null) | undefined
  AwayFumblesForced?: (number | null) | undefined
  AwayFumblesLost?: (number | null) | undefined
  AwayFumblesRecovered?: (number | null) | undefined
  AwayGiveaways?: (number | null) | undefined
  AwayGoalToGoAttempts?: (number | null) | undefined
  AwayGoalToGoConversions?: (number | null) | undefined
  AwayInterceptionReturnTouchdowns?: (number | null) | undefined
  AwayInterceptionReturnYards?: (number | null) | undefined
  AwayInterceptionReturns?: (number | null) | undefined
  AwayKickReturnLong?: (number | null) | undefined
  AwayKickReturnTouchdowns?: (number | null) | undefined
  AwayKickReturnYards?: (number | null) | undefined
  AwayKickReturns?: (number | null) | undefined
  AwayKickoffTouchbacks?: (number | null) | undefined
  AwayKickoffs?: (number | null) | undefined
  AwayKickoffsInEndZone?: (number | null) | undefined
  AwayOffensivePlays?: (number | null) | undefined
  AwayOffensiveYards?: (number | null) | undefined
  AwayOffensiveYardsPerPlay?: (number | null) | undefined
  AwayPasserRating?: (number | null) | undefined
  AwayPassesDefended?: (number | null) | undefined
  AwayPassingAttempts?: (number | null) | undefined
  AwayPassingCompletions?: (number | null) | undefined
  AwayPassingInterceptions?: (number | null) | undefined
  AwayPassingTouchdowns?: (number | null) | undefined
  AwayPassingYards?: (number | null) | undefined
  AwayPassingYardsPerAttempt?: (number | null) | undefined
  AwayPassingYardsPerCompletion?: (number | null) | undefined
  AwayPenalties?: (number | null) | undefined
  AwayPenaltyYards?: (number | null) | undefined
  AwayPuntAverage?: (number | null) | undefined
  AwayPuntNetAverage?: (number | null) | undefined
  AwayPuntNetYards?: (number | null) | undefined
  AwayPuntReturnLong?: (number | null) | undefined
  AwayPuntReturnTouchdowns?: (number | null) | undefined
  AwayPuntReturnYards?: (number | null) | undefined
  AwayPuntReturns?: (number | null) | undefined
  AwayPuntYards?: (number | null) | undefined
  AwayPunts?: (number | null) | undefined
  AwayPuntsHadBlocked?: (number | null) | undefined
  AwayQuarterbackHits?: (number | null) | undefined
  AwayRedZoneAttempts?: (number | null) | undefined
  AwayRedZoneConversions?: (number | null) | undefined
  AwayReturnYards?: (number | null) | undefined
  AwayRushingAttempts?: (number | null) | undefined
  AwayRushingTouchdowns?: (number | null) | undefined
  AwayRushingYards?: (number | null) | undefined
  AwayRushingYardsPerAttempt?: (number | null) | undefined
  AwaySackYards?: (number | null) | undefined
  AwaySacks?: (number | null) | undefined
  AwaySafeties?: (number | null) | undefined
  AwayScore?: number | undefined
  AwayScoreOvertime?: (number | null) | undefined
  AwayScoreQuarter1?: (number | null) | undefined
  AwayScoreQuarter2?: (number | null) | undefined
  AwayScoreQuarter3?: (number | null) | undefined
  AwayScoreQuarter4?: (number | null) | undefined
  AwaySoloTackles?: (number | null) | undefined
  AwayTacklesForLoss?: (number | null) | undefined
  AwayTakeaways?: (number | null) | undefined
  AwayTeam?: (string | null) | undefined
  AwayThirdDownAttempts?: (number | null) | undefined
  AwayThirdDownConversions?: (number | null) | undefined
  AwayThirdDownPercentage?: (number | null) | undefined
  AwayTimeOfPossession?: (string | null) | undefined
  AwayTimesSacked?: (number | null) | undefined
  AwayTimesSackedYards?: (number | null) | undefined
  AwayTouchdowns?: (number | null) | undefined
  AwayTurnoverDifferential?: (number | null) | undefined
  AwayTwoPointConversionReturns?: (number | null) | undefined
  Date?: (string | null) | undefined
  GameID?: number | undefined
  GameKey?: (string | null) | undefined
  HomeAssistedTackles?: (number | null) | undefined
  HomeBlockedKickReturnTouchdowns?: (number | null) | undefined
  HomeBlockedKickReturnYards?: (number | null) | undefined
  HomeBlockedKicks?: (number | null) | undefined
  HomeCompletionPercentage?: (number | null) | undefined
  HomeExtraPointKickingAttempts?: (number | null) | undefined
  HomeExtraPointKickingConversions?: (number | null) | undefined
  HomeExtraPointPassingAttempts?: (number | null) | undefined
  HomeExtraPointPassingConversions?: (number | null) | undefined
  HomeExtraPointRushingAttempts?: (number | null) | undefined
  HomeExtraPointRushingConversions?: (number | null) | undefined
  HomeExtraPointsHadBlocked?: (number | null) | undefined
  HomeFieldGoalAttempts?: (number | null) | undefined
  HomeFieldGoalReturnTouchdowns?: (number | null) | undefined
  HomeFieldGoalReturnYards?: (number | null) | undefined
  HomeFieldGoalsHadBlocked?: (number | null) | undefined
  HomeFieldGoalsMade?: (number | null) | undefined
  HomeFirstDowns?: (number | null) | undefined
  HomeFirstDownsByPassing?: (number | null) | undefined
  HomeFirstDownsByPenalty?: (number | null) | undefined
  HomeFirstDownsByRushing?: (number | null) | undefined
  HomeFourthDownAttempts?: (number | null) | undefined
  HomeFourthDownConversions?: (number | null) | undefined
  HomeFourthDownPercentage?: (number | null) | undefined
  HomeFumbleReturnTouchdowns?: (number | null) | undefined
  HomeFumbleReturnYards?: (number | null) | undefined
  HomeFumbles?: (number | null) | undefined
  HomeFumblesForced?: (number | null) | undefined
  HomeFumblesLost?: (number | null) | undefined
  HomeFumblesRecovered?: (number | null) | undefined
  HomeGiveaways?: (number | null) | undefined
  HomeGoalToGoAttempts?: (number | null) | undefined
  HomeGoalToGoConversions?: (number | null) | undefined
  HomeInterceptionReturnTouchdowns?: (number | null) | undefined
  HomeInterceptionReturnYards?: (number | null) | undefined
  HomeInterceptionReturns?: (number | null) | undefined
  HomeKickReturnLong?: (number | null) | undefined
  HomeKickReturnTouchdowns?: (number | null) | undefined
  HomeKickReturnYards?: (number | null) | undefined
  HomeKickReturns?: (number | null) | undefined
  HomeKickoffTouchbacks?: (number | null) | undefined
  HomeKickoffs?: (number | null) | undefined
  HomeKickoffsInEndZone?: (number | null) | undefined
  HomeOffensivePlays?: (number | null) | undefined
  HomeOffensiveYards?: (number | null) | undefined
  HomeOffensiveYardsPerPlay?: (number | null) | undefined
  HomePasserRating?: (number | null) | undefined
  HomePassesDefended?: (number | null) | undefined
  HomePassingAttempts?: (number | null) | undefined
  HomePassingCompletions?: (number | null) | undefined
  HomePassingInterceptions?: (number | null) | undefined
  HomePassingTouchdowns?: (number | null) | undefined
  HomePassingYards?: (number | null) | undefined
  HomePassingYardsPerAttempt?: (number | null) | undefined
  HomePassingYardsPerCompletion?: (number | null) | undefined
  HomePenalties?: (number | null) | undefined
  HomePenaltyYards?: (number | null) | undefined
  HomePuntAverage?: (number | null) | undefined
  HomePuntNetAverage?: (number | null) | undefined
  HomePuntNetYards?: (number | null) | undefined
  HomePuntReturnLong?: (number | null) | undefined
  HomePuntReturnTouchdowns?: (number | null) | undefined
  HomePuntReturnYards?: (number | null) | undefined
  HomePuntReturns?: (number | null) | undefined
  HomePuntYards?: (number | null) | undefined
  HomePunts?: (number | null) | undefined
  HomePuntsHadBlocked?: (number | null) | undefined
  HomeQuarterbackHits?: (number | null) | undefined
  HomeRedZoneAttempts?: (number | null) | undefined
  HomeRedZoneConversions?: (number | null) | undefined
  HomeReturnYards?: (number | null) | undefined
  HomeRushingAttempts?: (number | null) | undefined
  HomeRushingTouchdowns?: (number | null) | undefined
  HomeRushingYards?: (number | null) | undefined
  HomeRushingYardsPerAttempt?: (number | null) | undefined
  HomeSackYards?: (number | null) | undefined
  HomeSacks?: (number | null) | undefined
  HomeSafeties?: (number | null) | undefined
  HomeScore?: number | undefined
  HomeScoreOvertime?: (number | null) | undefined
  HomeScoreQuarter1?: (number | null) | undefined
  HomeScoreQuarter2?: (number | null) | undefined
  HomeScoreQuarter3?: (number | null) | undefined
  HomeScoreQuarter4?: (number | null) | undefined
  HomeSoloTackles?: (number | null) | undefined
  HomeTacklesForLoss?: (number | null) | undefined
  HomeTakeaways?: (number | null) | undefined
  HomeTeam?: (string | null) | undefined
  HomeThirdDownAttempts?: (number | null) | undefined
  HomeThirdDownConversions?: (number | null) | undefined
  HomeThirdDownPercentage?: (number | null) | undefined
  HomeTimeOfPossession?: (string | null) | undefined
  HomeTimesSacked?: (number | null) | undefined
  HomeTimesSackedYards?: (number | null) | undefined
  HomeTouchdowns?: (number | null) | undefined
  HomeTurnoverDifferential?: (number | null) | undefined
  HomeTwoPointConversionReturns?: (number | null) | undefined
  Humidity?: (number | null) | undefined
  IsGameOver?: (boolean | null) | undefined
  OverUnder?: (number | null) | undefined
  PlayingSurface?: (string | null) | undefined
  PointSpread?: (number | null) | undefined
  ScoreID?: number | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Stadium?: (string | null) | undefined
  StadiumDetails?: Stadium | undefined
  StadiumID?: (number | null) | undefined
  Temperature?: (number | null) | undefined
  TotalScore?: (number | null) | undefined
  Week?: number | undefined
  WindSpeed?: (number | null) | undefined
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
type BoxScore = {
  AwayDefense?: PlayerDefense[] | undefined
  AwayFantasyDefense?: FantasyDefenseGame | undefined
  AwayKickPuntReturns?: PlayerKickPuntReturns[] | undefined
  AwayKicking?: PlayerKicking[] | undefined
  AwayPassing?: PlayerPassing[] | undefined
  AwayPunting?: PlayerPunting[] | undefined
  AwayReceiving?: PlayerReceiving[] | undefined
  AwayRushing?: PlayerRushing[] | undefined
  Game?: Game | undefined
  HomeDefense?: PlayerDefense[] | undefined
  HomeFantasyDefense?: FantasyDefenseGame | undefined
  HomeKickPuntReturns?: PlayerKickPuntReturns[] | undefined
  HomeKicking?: PlayerKicking[] | undefined
  HomePassing?: PlayerPassing[] | undefined
  HomePunting?: PlayerPunting[] | undefined
  HomeReceiving?: PlayerReceiving[] | undefined
  HomeRushing?: PlayerRushing[] | undefined
  Score?: Score | undefined
  ScoringDetails?: ScoringDetail[] | undefined
  ScoringPlays?: ScoringPlay[] | undefined
}
type Team = {
  AverageDraftPosition?: (number | null) | undefined
  AverageDraftPosition2QB?: (number | null) | undefined
  AverageDraftPositionDynasty?: (number | null) | undefined
  AverageDraftPositionPPR?: (number | null) | undefined
  ByeWeek?: (number | null) | undefined
  City?: (string | null) | undefined
  Conference?: (string | null) | undefined
  DefensiveCoordinator?: (string | null) | undefined
  DefensiveScheme?: (string | null) | undefined
  Division?: (string | null) | undefined
  DraftKingsName?: (string | null) | undefined
  DraftKingsPlayerID?: (number | null) | undefined
  FanDuelName?: (string | null) | undefined
  FanDuelPlayerID?: (number | null) | undefined
  FantasyDraftName?: (string | null) | undefined
  FantasyDraftPlayerID?: (number | null) | undefined
  FullName?: (string | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  HeadCoach?: (string | null) | undefined
  Key?: (string | null) | undefined
  Name?: (string | null) | undefined
  OffensiveCoordinator?: (string | null) | undefined
  OffensiveScheme?: (string | null) | undefined
  PlayerID?: number | undefined
  PrimaryColor?: (string | null) | undefined
  QuaternaryColor?: (string | null) | undefined
  SecondaryColor?: (string | null) | undefined
  SpecialTeamsCoach?: (string | null) | undefined
  StadiumDetails?: Stadium | undefined
  StadiumID?: (number | null) | undefined
  TeamID?: number | undefined
  TertiaryColor?: (string | null) | undefined
  UpcomingDraftKingsSalary?: (number | null) | undefined
  UpcomingFanDuelSalary?: (number | null) | undefined
  UpcomingOpponent?: (string | null) | undefined
  UpcomingOpponentPositionRank?: (number | null) | undefined
  UpcomingOpponentRank?: (number | null) | undefined
  UpcomingSalary?: (number | null) | undefined
  UpcomingYahooSalary?: (number | null) | undefined
  WikipediaLogoUrl?: (string | null) | undefined
  WikipediaWordMarkUrl?: (string | null) | undefined
  YahooName?: (string | null) | undefined
  YahooPlayerID?: (number | null) | undefined
}
type PlayerGame = {
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
type TeamGame = {
  AssistedTackles?: (number | null) | undefined
  BlockedKickReturnTouchdowns?: (number | null) | undefined
  BlockedKickReturnYards?: (number | null) | undefined
  BlockedKicks?: (number | null) | undefined
  CompletionPercentage?: number | undefined
  Date?: (string | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  DayOfWeek?: (string | null) | undefined
  ExtraPointKickingAttempts?: (number | null) | undefined
  ExtraPointKickingConversions?: (number | null) | undefined
  ExtraPointPassingAttempts?: (number | null) | undefined
  ExtraPointPassingConversions?: (number | null) | undefined
  ExtraPointPercentage?: (number | null) | undefined
  ExtraPointRushingAttempts?: (number | null) | undefined
  ExtraPointRushingConversions?: (number | null) | undefined
  ExtraPointsHadBlocked?: (number | null) | undefined
  FieldGoalAttempts?: (number | null) | undefined
  FieldGoalPercentage?: (number | null) | undefined
  FieldGoalReturnTouchdowns?: (number | null) | undefined
  FieldGoalReturnYards?: (number | null) | undefined
  FieldGoalsHadBlocked?: (number | null) | undefined
  FieldGoalsMade?: (number | null) | undefined
  FirstDowns?: (number | null) | undefined
  FirstDownsByPassing?: (number | null) | undefined
  FirstDownsByPenalty?: (number | null) | undefined
  FirstDownsByRushing?: (number | null) | undefined
  FourthDownAttempts?: (number | null) | undefined
  FourthDownConversions?: (number | null) | undefined
  FourthDownPercentage?: (number | null) | undefined
  FumbleReturnTouchdowns?: (number | null) | undefined
  FumbleReturnYards?: (number | null) | undefined
  Fumbles?: (number | null) | undefined
  FumblesForced?: (number | null) | undefined
  FumblesLost?: (number | null) | undefined
  FumblesRecovered?: (number | null) | undefined
  GameKey?: (string | null) | undefined
  Giveaways?: number | undefined
  GlobalGameID?: (number | null) | undefined
  GlobalOpponentID?: (number | null) | undefined
  GlobalTeamID?: (number | null) | undefined
  GoalToGoAttempts?: (number | null) | undefined
  GoalToGoConversions?: (number | null) | undefined
  GoalToGoPercentage?: (number | null) | undefined
  HomeOrAway?: (string | null) | undefined
  Humidity?: (number | null) | undefined
  InterceptionReturnTouchdowns?: (number | null) | undefined
  InterceptionReturnYards?: (number | null) | undefined
  InterceptionReturns?: (number | null) | undefined
  IsGameOver?: (boolean | null) | undefined
  KickReturnAverage?: (number | null) | undefined
  KickReturnLong?: (number | null) | undefined
  KickReturnTouchdowns?: (number | null) | undefined
  KickReturnYardDifferential?: (number | null) | undefined
  KickReturnYards?: (number | null) | undefined
  KickReturns?: (number | null) | undefined
  KickoffTouchbacks?: (number | null) | undefined
  Kickoffs?: (number | null) | undefined
  KickoffsInEndZone?: (number | null) | undefined
  OffensivePlays?: number | undefined
  OffensiveYards?: number | undefined
  OffensiveYardsPerPlay?: number | undefined
  Opponent?: (string | null) | undefined
  OpponentAssistedTackles?: (number | null) | undefined
  OpponentBlockedKickReturnTouchdowns?: (number | null) | undefined
  OpponentBlockedKickReturnYards?: (number | null) | undefined
  OpponentBlockedKicks?: (number | null) | undefined
  OpponentCompletionPercentage?: number | undefined
  OpponentExtraPointKickingAttempts?: (number | null) | undefined
  OpponentExtraPointKickingConversions?: (number | null) | undefined
  OpponentExtraPointPassingAttempts?: (number | null) | undefined
  OpponentExtraPointPassingConversions?: (number | null) | undefined
  OpponentExtraPointPercentage?: (number | null) | undefined
  OpponentExtraPointRushingAttempts?: (number | null) | undefined
  OpponentExtraPointRushingConversions?: (number | null) | undefined
  OpponentExtraPointsHadBlocked?: (number | null) | undefined
  OpponentFieldGoalAttempts?: (number | null) | undefined
  OpponentFieldGoalPercentage?: (number | null) | undefined
  OpponentFieldGoalReturnTouchdowns?: (number | null) | undefined
  OpponentFieldGoalReturnYards?: (number | null) | undefined
  OpponentFieldGoalsHadBlocked?: (number | null) | undefined
  OpponentFieldGoalsMade?: (number | null) | undefined
  OpponentFirstDowns?: (number | null) | undefined
  OpponentFirstDownsByPassing?: (number | null) | undefined
  OpponentFirstDownsByPenalty?: (number | null) | undefined
  OpponentFirstDownsByRushing?: (number | null) | undefined
  OpponentFourthDownAttempts?: (number | null) | undefined
  OpponentFourthDownConversions?: (number | null) | undefined
  OpponentFourthDownPercentage?: (number | null) | undefined
  OpponentFumbleReturnTouchdowns?: (number | null) | undefined
  OpponentFumbleReturnYards?: (number | null) | undefined
  OpponentFumbles?: (number | null) | undefined
  OpponentFumblesForced?: (number | null) | undefined
  OpponentFumblesLost?: (number | null) | undefined
  OpponentFumblesRecovered?: (number | null) | undefined
  OpponentGiveaways?: number | undefined
  OpponentGoalToGoAttempts?: (number | null) | undefined
  OpponentGoalToGoConversions?: (number | null) | undefined
  OpponentGoalToGoPercentage?: (number | null) | undefined
  OpponentID?: (number | null) | undefined
  OpponentInterceptionReturnTouchdowns?: (number | null) | undefined
  OpponentInterceptionReturnYards?: (number | null) | undefined
  OpponentInterceptionReturns?: (number | null) | undefined
  OpponentKickReturnAverage?: (number | null) | undefined
  OpponentKickReturnLong?: (number | null) | undefined
  OpponentKickReturnTouchdowns?: (number | null) | undefined
  OpponentKickReturnYards?: (number | null) | undefined
  OpponentKickReturns?: (number | null) | undefined
  OpponentKickoffTouchbacks?: (number | null) | undefined
  OpponentKickoffs?: (number | null) | undefined
  OpponentKickoffsInEndZone?: (number | null) | undefined
  OpponentOffensivePlays?: number | undefined
  OpponentOffensiveYards?: number | undefined
  OpponentOffensiveYardsPerPlay?: number | undefined
  OpponentPasserRating?: (number | null) | undefined
  OpponentPassesDefended?: (number | null) | undefined
  OpponentPassingAttempts?: (number | null) | undefined
  OpponentPassingCompletions?: (number | null) | undefined
  OpponentPassingDropbacks?: (number | null) | undefined
  OpponentPassingInterceptionPercentage?: (number | null) | undefined
  OpponentPassingInterceptions?: (number | null) | undefined
  OpponentPassingTouchdowns?: (number | null) | undefined
  OpponentPassingYards?: (number | null) | undefined
  OpponentPassingYardsPerAttempt?: number | undefined
  OpponentPassingYardsPerCompletion?: number | undefined
  OpponentPenalties?: (number | null) | undefined
  OpponentPenaltyYards?: (number | null) | undefined
  OpponentPuntAverage?: number | undefined
  OpponentPuntNetAverage?: (number | null) | undefined
  OpponentPuntNetYards?: (number | null) | undefined
  OpponentPuntReturnAverage?: (number | null) | undefined
  OpponentPuntReturnLong?: (number | null) | undefined
  OpponentPuntReturnTouchdowns?: (number | null) | undefined
  OpponentPuntReturnYards?: (number | null) | undefined
  OpponentPuntReturns?: (number | null) | undefined
  OpponentPuntYards?: (number | null) | undefined
  OpponentPunts?: (number | null) | undefined
  OpponentPuntsHadBlocked?: (number | null) | undefined
  OpponentQuarterbackHits?: (number | null) | undefined
  OpponentQuarterbackHitsDifferential?: (number | null) | undefined
  OpponentQuarterbackHitsPercentage?: (number | null) | undefined
  OpponentQuarterbackSacksDifferential?: (number | null) | undefined
  OpponentRedZoneAttempts?: (number | null) | undefined
  OpponentRedZoneConversions?: (number | null) | undefined
  OpponentRedZonePercentage?: (number | null) | undefined
  OpponentReturnYards?: (number | null) | undefined
  OpponentRushingAttempts?: (number | null) | undefined
  OpponentRushingTouchdowns?: (number | null) | undefined
  OpponentRushingYards?: (number | null) | undefined
  OpponentRushingYardsPerAttempt?: number | undefined
  OpponentSackYards?: (number | null) | undefined
  OpponentSacks?: (number | null) | undefined
  OpponentSafeties?: (number | null) | undefined
  OpponentScore?: number | undefined
  OpponentScoreOvertime?: number | undefined
  OpponentScoreQuarter1?: (number | null) | undefined
  OpponentScoreQuarter2?: (number | null) | undefined
  OpponentScoreQuarter3?: (number | null) | undefined
  OpponentScoreQuarter4?: (number | null) | undefined
  OpponentSoloTackles?: (number | null) | undefined
  OpponentTacklesForLoss?: (number | null) | undefined
  OpponentTacklesForLossDifferential?: (number | null) | undefined
  OpponentTacklesForLossPercentage?: (number | null) | undefined
  OpponentTakeaways?: number | undefined
  OpponentThirdDownAttempts?: (number | null) | undefined
  OpponentThirdDownConversions?: (number | null) | undefined
  OpponentThirdDownPercentage?: (number | null) | undefined
  OpponentTimeOfPossession?: (string | null) | undefined
  OpponentTimeOfPossessionMinutes?: (number | null) | undefined
  OpponentTimeOfPossessionSeconds?: (number | null) | undefined
  OpponentTimesSacked?: (number | null) | undefined
  OpponentTimesSackedPercentage?: number | undefined
  OpponentTimesSackedYards?: (number | null) | undefined
  OpponentTouchdowns?: (number | null) | undefined
  OpponentTurnoverDifferential?: number | undefined
  OpponentTwoPointConversionReturns?: (number | null) | undefined
  OverUnder?: (number | null) | undefined
  PasserRating?: (number | null) | undefined
  PassesDefended?: (number | null) | undefined
  PassingAttempts?: (number | null) | undefined
  PassingCompletions?: (number | null) | undefined
  PassingDropbacks?: (number | null) | undefined
  PassingInterceptionPercentage?: (number | null) | undefined
  PassingInterceptions?: (number | null) | undefined
  PassingTouchdowns?: (number | null) | undefined
  PassingYards?: (number | null) | undefined
  PassingYardsPerAttempt?: number | undefined
  PassingYardsPerCompletion?: number | undefined
  Penalties?: (number | null) | undefined
  PenaltyYardDifferential?: (number | null) | undefined
  PenaltyYards?: (number | null) | undefined
  PlayingSurface?: (string | null) | undefined
  PointDifferential?: (number | null) | undefined
  PointSpread?: (number | null) | undefined
  PuntAverage?: number | undefined
  PuntNetAverage?: (number | null) | undefined
  PuntNetYards?: (number | null) | undefined
  PuntReturnAverage?: (number | null) | undefined
  PuntReturnLong?: (number | null) | undefined
  PuntReturnTouchdowns?: (number | null) | undefined
  PuntReturnYardDifferential?: (number | null) | undefined
  PuntReturnYards?: (number | null) | undefined
  PuntReturns?: (number | null) | undefined
  PuntYards?: (number | null) | undefined
  Punts?: (number | null) | undefined
  PuntsHadBlocked?: (number | null) | undefined
  QuarterbackHits?: (number | null) | undefined
  QuarterbackHitsDifferential?: (number | null) | undefined
  QuarterbackHitsPercentage?: (number | null) | undefined
  QuarterbackSacksDifferential?: number | undefined
  RedZoneAttempts?: (number | null) | undefined
  RedZoneConversions?: (number | null) | undefined
  RedZonePercentage?: (number | null) | undefined
  ReturnYards?: (number | null) | undefined
  RushingAttempts?: (number | null) | undefined
  RushingTouchdowns?: (number | null) | undefined
  RushingYards?: (number | null) | undefined
  RushingYardsPerAttempt?: number | undefined
  SackYards?: (number | null) | undefined
  Sacks?: (number | null) | undefined
  Safeties?: (number | null) | undefined
  Score?: number | undefined
  ScoreID?: number | undefined
  ScoreOvertime?: number | undefined
  ScoreQuarter1?: (number | null) | undefined
  ScoreQuarter2?: (number | null) | undefined
  ScoreQuarter3?: (number | null) | undefined
  ScoreQuarter4?: (number | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  SoloTackles?: (number | null) | undefined
  Stadium?: (string | null) | undefined
  TacklesForLoss?: (number | null) | undefined
  TacklesForLossDifferential?: (number | null) | undefined
  TacklesForLossPercentage?: (number | null) | undefined
  Takeaways?: number | undefined
  Team?: (string | null) | undefined
  TeamGameID?: number | undefined
  TeamID?: (number | null) | undefined
  TeamName?: (string | null) | undefined
  Temperature?: (number | null) | undefined
  ThirdDownAttempts?: (number | null) | undefined
  ThirdDownConversions?: (number | null) | undefined
  ThirdDownPercentage?: (number | null) | undefined
  TimeOfPossession?: (string | null) | undefined
  TimeOfPossessionMinutes?: (number | null) | undefined
  TimeOfPossessionSeconds?: (number | null) | undefined
  TimesSacked?: (number | null) | undefined
  TimesSackedPercentage?: number | undefined
  TimesSackedYards?: (number | null) | undefined
  TotalScore?: number | undefined
  Touchdowns?: (number | null) | undefined
  TurnoverDifferential?: number | undefined
  TwoPointConversionReturns?: (number | null) | undefined
  Week?: (number | null) | undefined
  WindSpeed?: (number | null) | undefined
}
type BoxScoreV3 = {
  FantasyDefenseGames?: FantasyDefenseGame[] | undefined
  PlayerGames?: PlayerGame[] | undefined
  Quarters?: Quarter[] | undefined
  Score?: Score | undefined
  ScoringDetails?: ScoringDetail[] | undefined
  ScoringPlays?: ScoringPlay[] | undefined
  TeamGames?: TeamGame[] | undefined
}
type Bye = {
  Season?: number | undefined
  Team?: (string | null) | undefined
  Week?: number | undefined
}
type DailyFantasyPlayer = {
  Date?: (string | null) | undefined
  DraftKingsSalary?: (number | null) | undefined
  FanDuelSalary?: (number | null) | undefined
  FantasyDataSalary?: (number | null) | undefined
  FantasyDraftSalary?: (number | null) | undefined
  HomeOrAway?: (string | null) | undefined
  LastGameFantasyPoints?: (number | null) | undefined
  Name?: (string | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentPositionRank?: (number | null) | undefined
  OpponentRank?: (number | null) | undefined
  PlayerID?: number | undefined
  Position?: (string | null) | undefined
  ProjectedFantasyPoints?: (number | null) | undefined
  Salary?: number | undefined
  ShortName?: (string | null) | undefined
  Status?: (string | null) | undefined
  StatusCode?: (string | null) | undefined
  StatusColor?: (string | null) | undefined
  Team?: (string | null) | undefined
  YahooSalary?: (number | null) | undefined
}
type DailyFantasyScoring = {
  Date?: (string | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsFantasyDraft?: (number | null) | undefined
  FantasyPointsPPR?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  HasStarted?: boolean | undefined
  IsInProgress?: boolean | undefined
  IsOver?: boolean | undefined
  Name?: (string | null) | undefined
  PlayerID?: number | undefined
  Position?: (string | null) | undefined
  Team?: (string | null) | undefined
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
type FantasyDefenseSeason = {
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
type FantasyPlayer = {
  AuctionValue?: (number | null) | undefined
  AuctionValuePPR?: (number | null) | undefined
  AverageDraftPosition?: (number | null) | undefined
  AverageDraftPosition2QB?: (number | null) | undefined
  AverageDraftPositionDynasty?: (number | null) | undefined
  AverageDraftPositionIDP?: (number | null) | undefined
  AverageDraftPositionPPR?: (number | null) | undefined
  AverageDraftPositionRookie?: (number | null) | undefined
  ByeWeek?: (number | null) | undefined
  FantasyPlayerKey?: (string | null) | undefined
  LastSeasonFantasyPoints?: (number | null) | undefined
  Name?: (string | null) | undefined
  PlayerID?: number | undefined
  Position?: (string | null) | undefined
  ProjectedFantasyPoints?: (number | null) | undefined
  Team?: (string | null) | undefined
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
type Injury = {
  BodyPart?: (string | null) | undefined
  DeclaredInactive?: (boolean | null) | undefined
  InjuryID?: number | undefined
  Name?: (string | null) | undefined
  Number?: number | undefined
  Opponent?: (string | null) | undefined
  OpponentID?: (number | null) | undefined
  PlayerID?: number | undefined
  Position?: (string | null) | undefined
  Practice?: (string | null) | undefined
  PracticeDescription?: (string | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Status?: (string | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  Updated?: (string | null) | undefined
  Week?: number | undefined
}
type News = {
  Author?: (string | null) | undefined
  Categories?: (string | null) | undefined
  Content?: (string | null) | undefined
  NewsID?: number | undefined
  OriginalSource?: (string | null) | undefined
  OriginalSourceUrl?: (string | null) | undefined
  PlayerID?: (number | null) | undefined
  PlayerID2?: (number | null) | undefined
  Source?: (string | null) | undefined
  Team?: (string | null) | undefined
  Team2?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  TeamID2?: (number | null) | undefined
  TermsOfUse?: (string | null) | undefined
  TimeAgo?: (string | null) | undefined
  Title?: (string | null) | undefined
  Updated?: (string | null) | undefined
  Url?: (string | null) | undefined
}
type PlayerSeason = {
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
type PlayerDetail = {
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
  LatestNews?: News[] | undefined
  Name?: (string | null) | undefined
  Number?: (number | null) | undefined
  PhotoUrl?: (string | null) | undefined
  PlayerID?: number | undefined
  PlayerSeason?: PlayerSeason | undefined
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
type PlayerGameRedZone = {
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
type PlayerOwnership = {
  DeltaOwnershipPercentage?: (number | null) | undefined
  DeltaStartPercentage?: (number | null) | undefined
  Name?: (string | null) | undefined
  OwnershipPercentage?: (number | null) | undefined
  PlayerID?: number | undefined
  Position?: (string | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  StartPercentage?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  Week?: number | undefined
}
type PlayerSeasonRedZone = {
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
type PlayerSeasonThirdDown = {
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
type PlayerInfo = {
  Name?: (string | null) | undefined
  PlayerID?: number | undefined
  Position?: (string | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
}
type Standing = {
  Conference?: (string | null) | undefined
  ConferenceLosses?: number | undefined
  ConferenceRank?: number | undefined
  ConferenceTies?: number | undefined
  ConferenceWins?: number | undefined
  Division?: (string | null) | undefined
  DivisionLosses?: number | undefined
  DivisionRank?: number | undefined
  DivisionTies?: number | undefined
  DivisionWins?: number | undefined
  GlobalTeamID?: (number | null) | undefined
  Losses?: number | undefined
  Name?: (string | null) | undefined
  NetPoints?: number | undefined
  Percentage?: number | undefined
  PointsAgainst?: number | undefined
  PointsFor?: number | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Team?: (string | null) | undefined
  TeamID?: number | undefined
  Ties?: number | undefined
  Touchdowns?: (number | null) | undefined
  Wins?: number | undefined
}
type TeamSeason = {
  AssistedTackles?: (number | null) | undefined
  BlockedKickReturnTouchdowns?: (number | null) | undefined
  BlockedKickReturnYards?: (number | null) | undefined
  BlockedKicks?: (number | null) | undefined
  CompletionPercentage?: number | undefined
  ExtraPointKickingAttempts?: (number | null) | undefined
  ExtraPointKickingConversions?: (number | null) | undefined
  ExtraPointPassingAttempts?: (number | null) | undefined
  ExtraPointPassingConversions?: (number | null) | undefined
  ExtraPointPercentage?: (number | null) | undefined
  ExtraPointRushingAttempts?: (number | null) | undefined
  ExtraPointRushingConversions?: (number | null) | undefined
  ExtraPointsHadBlocked?: (number | null) | undefined
  FieldGoalAttempts?: (number | null) | undefined
  FieldGoalPercentage?: (number | null) | undefined
  FieldGoalReturnTouchdowns?: (number | null) | undefined
  FieldGoalReturnYards?: (number | null) | undefined
  FieldGoalsHadBlocked?: (number | null) | undefined
  FieldGoalsMade?: (number | null) | undefined
  FirstDowns?: (number | null) | undefined
  FirstDownsByPassing?: (number | null) | undefined
  FirstDownsByPenalty?: (number | null) | undefined
  FirstDownsByRushing?: (number | null) | undefined
  FourthDownAttempts?: (number | null) | undefined
  FourthDownConversions?: (number | null) | undefined
  FourthDownPercentage?: (number | null) | undefined
  FumbleReturnTouchdowns?: (number | null) | undefined
  FumbleReturnYards?: (number | null) | undefined
  Fumbles?: (number | null) | undefined
  FumblesForced?: (number | null) | undefined
  FumblesLost?: (number | null) | undefined
  FumblesRecovered?: (number | null) | undefined
  Games?: (number | null) | undefined
  Giveaways?: number | undefined
  GlobalTeamID?: (number | null) | undefined
  GoalToGoAttempts?: (number | null) | undefined
  GoalToGoConversions?: (number | null) | undefined
  GoalToGoPercentage?: (number | null) | undefined
  Humidity?: (number | null) | undefined
  InterceptionReturnTouchdowns?: (number | null) | undefined
  InterceptionReturnYards?: (number | null) | undefined
  InterceptionReturns?: (number | null) | undefined
  KickReturnAverage?: (number | null) | undefined
  KickReturnLong?: (number | null) | undefined
  KickReturnTouchdowns?: (number | null) | undefined
  KickReturnYardDifferential?: (number | null) | undefined
  KickReturnYards?: (number | null) | undefined
  KickReturns?: (number | null) | undefined
  KickoffTouchbacks?: (number | null) | undefined
  Kickoffs?: (number | null) | undefined
  KickoffsInEndZone?: (number | null) | undefined
  OffensivePlays?: number | undefined
  OffensiveYards?: number | undefined
  OffensiveYardsPerPlay?: number | undefined
  OpponentAssistedTackles?: (number | null) | undefined
  OpponentBlockedKickReturnTouchdowns?: (number | null) | undefined
  OpponentBlockedKickReturnYards?: (number | null) | undefined
  OpponentBlockedKicks?: (number | null) | undefined
  OpponentCompletionPercentage?: number | undefined
  OpponentExtraPointKickingAttempts?: (number | null) | undefined
  OpponentExtraPointKickingConversions?: (number | null) | undefined
  OpponentExtraPointPassingAttempts?: (number | null) | undefined
  OpponentExtraPointPassingConversions?: (number | null) | undefined
  OpponentExtraPointPercentage?: (number | null) | undefined
  OpponentExtraPointRushingAttempts?: (number | null) | undefined
  OpponentExtraPointRushingConversions?: (number | null) | undefined
  OpponentExtraPointsHadBlocked?: (number | null) | undefined
  OpponentFieldGoalAttempts?: (number | null) | undefined
  OpponentFieldGoalPercentage?: (number | null) | undefined
  OpponentFieldGoalReturnTouchdowns?: (number | null) | undefined
  OpponentFieldGoalReturnYards?: (number | null) | undefined
  OpponentFieldGoalsHadBlocked?: (number | null) | undefined
  OpponentFieldGoalsMade?: (number | null) | undefined
  OpponentFirstDowns?: (number | null) | undefined
  OpponentFirstDownsByPassing?: (number | null) | undefined
  OpponentFirstDownsByPenalty?: (number | null) | undefined
  OpponentFirstDownsByRushing?: (number | null) | undefined
  OpponentFourthDownAttempts?: (number | null) | undefined
  OpponentFourthDownConversions?: (number | null) | undefined
  OpponentFourthDownPercentage?: (number | null) | undefined
  OpponentFumbleReturnTouchdowns?: (number | null) | undefined
  OpponentFumbleReturnYards?: (number | null) | undefined
  OpponentFumbles?: (number | null) | undefined
  OpponentFumblesForced?: (number | null) | undefined
  OpponentFumblesLost?: (number | null) | undefined
  OpponentFumblesRecovered?: (number | null) | undefined
  OpponentGiveaways?: number | undefined
  OpponentGoalToGoAttempts?: (number | null) | undefined
  OpponentGoalToGoConversions?: (number | null) | undefined
  OpponentGoalToGoPercentage?: (number | null) | undefined
  OpponentInterceptionReturnTouchdowns?: (number | null) | undefined
  OpponentInterceptionReturnYards?: (number | null) | undefined
  OpponentInterceptionReturns?: (number | null) | undefined
  OpponentKickReturnAverage?: (number | null) | undefined
  OpponentKickReturnLong?: (number | null) | undefined
  OpponentKickReturnTouchdowns?: (number | null) | undefined
  OpponentKickReturnYards?: (number | null) | undefined
  OpponentKickReturns?: (number | null) | undefined
  OpponentKickoffTouchbacks?: (number | null) | undefined
  OpponentKickoffs?: (number | null) | undefined
  OpponentKickoffsInEndZone?: (number | null) | undefined
  OpponentOffensivePlays?: number | undefined
  OpponentOffensiveYards?: number | undefined
  OpponentOffensiveYardsPerPlay?: number | undefined
  OpponentPasserRating?: (number | null) | undefined
  OpponentPassesDefended?: (number | null) | undefined
  OpponentPassingAttempts?: (number | null) | undefined
  OpponentPassingCompletions?: (number | null) | undefined
  OpponentPassingDropbacks?: (number | null) | undefined
  OpponentPassingInterceptionPercentage?: (number | null) | undefined
  OpponentPassingInterceptions?: (number | null) | undefined
  OpponentPassingTouchdowns?: (number | null) | undefined
  OpponentPassingYards?: (number | null) | undefined
  OpponentPassingYardsPerAttempt?: number | undefined
  OpponentPassingYardsPerCompletion?: number | undefined
  OpponentPenalties?: (number | null) | undefined
  OpponentPenaltyYards?: (number | null) | undefined
  OpponentPuntAverage?: number | undefined
  OpponentPuntNetAverage?: (number | null) | undefined
  OpponentPuntNetYards?: (number | null) | undefined
  OpponentPuntReturnAverage?: (number | null) | undefined
  OpponentPuntReturnLong?: (number | null) | undefined
  OpponentPuntReturnTouchdowns?: (number | null) | undefined
  OpponentPuntReturnYards?: (number | null) | undefined
  OpponentPuntReturns?: (number | null) | undefined
  OpponentPuntYards?: (number | null) | undefined
  OpponentPunts?: (number | null) | undefined
  OpponentPuntsHadBlocked?: (number | null) | undefined
  OpponentQuarterbackHits?: (number | null) | undefined
  OpponentQuarterbackHitsDifferential?: (number | null) | undefined
  OpponentQuarterbackHitsPercentage?: (number | null) | undefined
  OpponentQuarterbackSacksDifferential?: (number | null) | undefined
  OpponentRedZoneAttempts?: (number | null) | undefined
  OpponentRedZoneConversions?: (number | null) | undefined
  OpponentRedZonePercentage?: (number | null) | undefined
  OpponentReturnYards?: (number | null) | undefined
  OpponentRushingAttempts?: (number | null) | undefined
  OpponentRushingTouchdowns?: (number | null) | undefined
  OpponentRushingYards?: (number | null) | undefined
  OpponentRushingYardsPerAttempt?: number | undefined
  OpponentSackYards?: (number | null) | undefined
  OpponentSacks?: (number | null) | undefined
  OpponentSafeties?: (number | null) | undefined
  OpponentScore?: number | undefined
  OpponentScoreOvertime?: number | undefined
  OpponentScoreQuarter1?: (number | null) | undefined
  OpponentScoreQuarter2?: (number | null) | undefined
  OpponentScoreQuarter3?: (number | null) | undefined
  OpponentScoreQuarter4?: (number | null) | undefined
  OpponentSoloTackles?: (number | null) | undefined
  OpponentTacklesForLoss?: (number | null) | undefined
  OpponentTacklesForLossDifferential?: (number | null) | undefined
  OpponentTacklesForLossPercentage?: (number | null) | undefined
  OpponentTakeaways?: number | undefined
  OpponentThirdDownAttempts?: (number | null) | undefined
  OpponentThirdDownConversions?: (number | null) | undefined
  OpponentThirdDownPercentage?: (number | null) | undefined
  OpponentTimeOfPossession?: (string | null) | undefined
  OpponentTimesSacked?: (number | null) | undefined
  OpponentTimesSackedPercentage?: number | undefined
  OpponentTimesSackedYards?: (number | null) | undefined
  OpponentTouchdowns?: (number | null) | undefined
  OpponentTurnoverDifferential?: number | undefined
  OpponentTwoPointConversionReturns?: (number | null) | undefined
  OverUnder?: (number | null) | undefined
  PasserRating?: (number | null) | undefined
  PassesDefended?: (number | null) | undefined
  PassingAttempts?: (number | null) | undefined
  PassingCompletions?: (number | null) | undefined
  PassingDropbacks?: (number | null) | undefined
  PassingInterceptionPercentage?: (number | null) | undefined
  PassingInterceptions?: (number | null) | undefined
  PassingTouchdowns?: (number | null) | undefined
  PassingYards?: (number | null) | undefined
  PassingYardsPerAttempt?: number | undefined
  PassingYardsPerCompletion?: number | undefined
  Penalties?: (number | null) | undefined
  PenaltyYardDifferential?: (number | null) | undefined
  PenaltyYards?: (number | null) | undefined
  PointDifferential?: (number | null) | undefined
  PointSpread?: (number | null) | undefined
  PuntAverage?: number | undefined
  PuntNetAverage?: (number | null) | undefined
  PuntNetYards?: (number | null) | undefined
  PuntReturnAverage?: (number | null) | undefined
  PuntReturnLong?: (number | null) | undefined
  PuntReturnTouchdowns?: (number | null) | undefined
  PuntReturnYardDifferential?: (number | null) | undefined
  PuntReturnYards?: (number | null) | undefined
  PuntReturns?: (number | null) | undefined
  PuntYards?: (number | null) | undefined
  Punts?: (number | null) | undefined
  PuntsHadBlocked?: (number | null) | undefined
  QuarterbackHits?: (number | null) | undefined
  QuarterbackHitsDifferential?: (number | null) | undefined
  QuarterbackHitsPercentage?: (number | null) | undefined
  QuarterbackSacksDifferential?: number | undefined
  RedZoneAttempts?: (number | null) | undefined
  RedZoneConversions?: (number | null) | undefined
  RedZonePercentage?: (number | null) | undefined
  ReturnYards?: (number | null) | undefined
  RushingAttempts?: (number | null) | undefined
  RushingTouchdowns?: (number | null) | undefined
  RushingYards?: (number | null) | undefined
  RushingYardsPerAttempt?: number | undefined
  SackYards?: (number | null) | undefined
  Sacks?: (number | null) | undefined
  Safeties?: (number | null) | undefined
  Score?: number | undefined
  ScoreOvertime?: number | undefined
  ScoreQuarter1?: (number | null) | undefined
  ScoreQuarter2?: (number | null) | undefined
  ScoreQuarter3?: (number | null) | undefined
  ScoreQuarter4?: (number | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  SoloTackles?: (number | null) | undefined
  TacklesForLoss?: (number | null) | undefined
  TacklesForLossDifferential?: (number | null) | undefined
  TacklesForLossPercentage?: (number | null) | undefined
  Takeaways?: number | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  TeamName?: (string | null) | undefined
  TeamSeasonID?: number | undefined
  TeamStatID?: number | undefined
  Temperature?: (number | null) | undefined
  ThirdDownAttempts?: (number | null) | undefined
  ThirdDownConversions?: (number | null) | undefined
  ThirdDownPercentage?: (number | null) | undefined
  TimeOfPossession?: (string | null) | undefined
  TimesSacked?: (number | null) | undefined
  TimesSackedPercentage?: number | undefined
  TimesSackedYards?: (number | null) | undefined
  TotalScore?: number | undefined
  Touchdowns?: (number | null) | undefined
  TurnoverDifferential?: number | undefined
  TwoPointConversionReturns?: (number | null) | undefined
  WindSpeed?: (number | null) | undefined
}
type Timeframe = {
  ApiSeason?: (string | null) | undefined
  ApiWeek?: (string | null) | undefined
  EndDate?: (string | null) | undefined
  FirstGameEnd?: (string | null) | undefined
  FirstGameStart?: (string | null) | undefined
  HasEnded?: boolean | undefined
  HasFirstGameEnded?: boolean | undefined
  HasFirstGameStarted?: boolean | undefined
  HasGames?: boolean | undefined
  HasLastGameEnded?: boolean | undefined
  HasStarted?: boolean | undefined
  LastGameEnd?: (string | null) | undefined
  Name?: (string | null) | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  ShortName?: (string | null) | undefined
  StartDate?: (string | null) | undefined
  Week?: (number | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/ActiveBoxScores': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: BoxScore[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/AllTeams': {
      $get: {
        input: { param: { format: string } }
        output: Team[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/AreAnyGamesInProgress': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScore/:season/:week/:hometeam': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string; hometeam: string } }
        output: BoxScore
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScoreByScoreIDV3/:scoreid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; scoreid: string } }
        output: BoxScoreV3
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScoreV3/:season/:week/:hometeam': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string; hometeam: string } }
        output: BoxScoreV3
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScores/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
        output: BoxScore[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScoresDelta/:season/:week/:minutes': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string; minutes: string } }
        output: BoxScore[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScoresDeltaV3/:season/:week/:playerstoinclude/:minutes': {
      $get: {
        input: {
          param: {
            format: 'XML' | 'JSON'
            season: string
            week: string
            playerstoinclude: 'all' | 'fantasy' | 'idp'
            minutes: string
          }
        }
        output: BoxScoreV3[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Byes/:season': {
      $get: {
        input: { param: { format: string; season: string } }
        output: Bye[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/CurrentSeason': {
      $get: {
        input: { param: { format: string } }
        output: number | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/CurrentWeek': {
      $get: {
        input: { param: { format: string } }
        output: number | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/DailyFantasyPlayers/:date': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; date: string } }
        output: DailyFantasyPlayer[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/DailyFantasyPoints/:date': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; date: string } }
        output: DailyFantasyScoring[]
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
    '/:format/FantasyDefenseByGame/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
        output: FantasyDefenseGame[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/FantasyDefenseByGameByTeam/:season/:week/:team': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string; team: string } }
        output: FantasyDefenseGame
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/FantasyDefenseBySeason/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: FantasyDefenseSeason[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/FantasyDefenseBySeasonByTeam/:season/:team': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; team: string } }
        output: FantasyDefenseSeason
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/FantasyPlayers': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: FantasyPlayer[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/FantasyPlayersIDP': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: FantasyPlayer[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/FinalBoxScores': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: BoxScore[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/FreeAgents': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Player[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/GameLeagueLeaders/:season/:week/:position/:column': {
      $get: {
        input: {
          param: {
            format: 'XML' | 'JSON'
            season: string
            week: string
            position:
              | 'ALL'
              | 'OFFENSE'
              | 'QB'
              | 'RB'
              | 'WR'
              | 'TE'
              | 'DEFENSE'
              | 'DL'
              | 'LB'
              | 'DB'
              | 'K'
            column:
              | 'FantasyPoints'
              | 'PassingYards'
              | 'RushingYards'
              | 'Receptions'
              | 'Sacks'
              | 'Interceptions'
              | 'Touchdowns'
          }
        }
        output: PlayerGame[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/GameStats/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: Game[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/GameStatsByWeek/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
        output: Game[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Injuries/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
        output: Injury[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Injuries/:season/:week/:team': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string; team: string } }
        output: Injury[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/LastCompletedSeason': {
      $get: {
        input: { param: { format: string } }
        output: number | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/LastCompletedWeek': {
      $get: {
        input: { param: { format: string } }
        output: number | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/LiveBoxScores': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: BoxScore[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/News': {
      $get: {
        input: { param: { format: string } }
        output: News[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/NewsByDate/:date': {
      $get: {
        input: { param: { format: string; date: string } }
        output: News[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/NewsByPlayerID/:playerid': {
      $get: {
        input: { param: { format: string; playerid: string } }
        output: News[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/NewsByTeam/:team': {
      $get: {
        input: { param: { format: string; team: string } }
        output: News[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Player/:playerid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; playerid: string } }
        output: PlayerDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameRedZoneInsideFiveStats/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
        output: PlayerGameRedZone[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameRedZoneInsideTenStats/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
        output: PlayerGameRedZone[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameRedZoneStats/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
        output: PlayerGameRedZone[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameStatsByPlayerID/:season/:week/:playerid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string; playerid: string } }
        output: PlayerGame
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameStatsBySeason/:season/:playerid/:numberofgames': {
      $get: {
        input: {
          param: { format: 'JSON' | 'XML'; season: string; playerid: string; numberofgames: string }
        }
        output: PlayerGame[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameStatsByTeam/:season/:week/:team': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string; team: string } }
        output: PlayerGame[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameStatsByWeek/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
        output: PlayerGame[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameStatsByWeekDelta/:season/:week/:minutes': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string; minutes: string } }
        output: PlayerGame[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameStatsDelta/:minutes': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; minutes: string } }
        output: PlayerGame[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerOwnership/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
        output: PlayerOwnership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerSeasonRedZoneInsideFiveStats/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: PlayerSeasonRedZone[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerSeasonRedZoneInsideTenStats/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: PlayerSeasonRedZone[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerSeasonRedZoneStats/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: PlayerSeasonRedZone[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerSeasonStats/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: PlayerSeason[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerSeasonStatsByPlayerID/:season/:playerid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; playerid: string } }
        output: PlayerSeason[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerSeasonStatsByTeam/:season/:team': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; team: string } }
        output: PlayerSeason[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerSeasonThirdDownStats/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: PlayerSeasonThirdDown[]
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
        output: PlayerDetail[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/ProBowlers/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: PlayerInfo[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/RecentlyUpdatedBoxScores/:minutes': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; minutes: string } }
        output: BoxScore[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Rookies/:season': {
      $get: {
        input: { param: { format: string; season: string } }
        output: Player[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Schedules/:season': {
      $get: {
        input: { param: { format: string; season: string } }
        output: Schedule[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Scores/:season': {
      $get: {
        input: { param: { format: string; season: string } }
        output: Score[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/ScoresByDate/:date': {
      $get: {
        input: { param: { format: string; date: string } }
        output: Score[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/ScoresByWeek/:season/:week': {
      $get: {
        input: { param: { format: string; season: string; week: string } }
        output: Score[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/SeasonLeagueLeaders/:season/:position/:column': {
      $get: {
        input: {
          param: {
            format: 'XML' | 'JSON'
            season: string
            position:
              | 'ALL'
              | 'OFFENSE'
              | 'QB'
              | 'RB'
              | 'WR'
              | 'TE'
              | 'DEFENSE'
              | 'DL'
              | 'LB'
              | 'DB'
              | 'K'
            column:
              | 'FantasyPoints'
              | 'PassingYards'
              | 'RushingYards'
              | 'Receptions'
              | 'Sacks'
              | 'Interceptions'
              | 'Touchdowns'
          }
        }
        output: PlayerSeason[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/SimulatedBoxScoresV3/:numberofplays': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; numberofplays: string } }
        output: BoxScoreV3[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/SimulatedScores/:numberofplays': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; numberofplays: string } }
        output: Score[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Stadiums': {
      $get: {
        input: { param: { format: string } }
        output: Stadium[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Standings/:season': {
      $get: {
        input: { param: { format: string; season: string } }
        output: Standing[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/TeamGameStats/:season/:week': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string; week: string } }
        output: TeamGame[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/TeamGameStatsBySeason/:season/:teamid/:numberofgames': {
      $get: {
        input: {
          param: { format: 'JSON' | 'XML'; season: string; teamid: string; numberofgames: string }
        }
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
        input: { param: { format: string } }
        output: Team[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Teams/:season': {
      $get: {
        input: { param: { format: string; season: string } }
        output: Team[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Timeframes/:type': {
      $get: {
        input: { param: { format: string; type: string } }
        output: Timeframe[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/UpcomingSeason': {
      $get: {
        input: { param: { format: string } }
        output: number | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/UpcomingWeek': {
      $get: {
        input: { param: { format: string } }
        output: number | null
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
