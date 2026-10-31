import { createRoute, z } from '@hono/zod-openapi'

const StadiumSchema = z
  .object({
    Capacity: z.int().nullable().exactOptional(),
    City: z.string().nullable().exactOptional(),
    Country: z.string().nullable().exactOptional(),
    GeoLat: z.number().nullable().exactOptional(),
    GeoLong: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayingSurface: z.string().nullable().exactOptional(),
    StadiumID: z.int().exactOptional(),
    State: z.string().nullable().exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Stadium')

const ScheduleSchema = z
  .object({
    AwayTeam: z.string().nullable().exactOptional(),
    AwayTeamMoneyLine: z.int().nullable().exactOptional(),
    Canceled: z.boolean().nullable().exactOptional(),
    Channel: z.string().nullable().exactOptional(),
    Date: z.string().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    ForecastDescription: z.string().nullable().exactOptional(),
    ForecastTempHigh: z.int().nullable().exactOptional(),
    ForecastTempLow: z.int().nullable().exactOptional(),
    ForecastWindChill: z.int().nullable().exactOptional(),
    ForecastWindSpeed: z.int().nullable().exactOptional(),
    GameKey: z.string().nullable().exactOptional(),
    GeoLat: z.number().nullable().exactOptional(),
    GeoLong: z.number().nullable().exactOptional(),
    GlobalAwayTeamID: z.int().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalHomeTeamID: z.int().nullable().exactOptional(),
    HomeTeam: z.string().nullable().exactOptional(),
    HomeTeamMoneyLine: z.int().nullable().exactOptional(),
    OverUnder: z.number().nullable().exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    ScoreID: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    StadiumDetails: StadiumSchema.exactOptional(),
    StadiumID: z.int().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    Week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Schedule')

const DfsSlateGameSchema = z
  .object({
    Game: ScheduleSchema.exactOptional(),
    GameID: z.int().nullable().exactOptional(),
    OperatorGameID: z.int().nullable().exactOptional(),
    RemovedByOperator: z.boolean().nullable().exactOptional(),
    ScoreID: z.int().nullable().exactOptional(),
    SlateGameID: z.int().exactOptional(),
    SlateID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DfsSlateGame')

const DfsSlatePlayerSchema = z
  .object({
    FantasyDefenseProjectionStatID: z.int().nullable().exactOptional(),
    OperatorPlayerID: z.string().nullable().exactOptional(),
    OperatorPlayerName: z.string().nullable().exactOptional(),
    OperatorPosition: z.string().nullable().exactOptional(),
    OperatorRosterSlots: z.array(z.string().nullable()).exactOptional(),
    OperatorSalary: z.int().nullable().exactOptional(),
    OperatorSlatePlayerID: z.string().nullable().exactOptional(),
    PlayerGameProjectionStatID: z.int().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    RemovedByOperator: z.boolean().nullable().exactOptional(),
    SlateGameID: z.int().nullable().exactOptional(),
    SlateID: z.int().exactOptional(),
    SlatePlayerID: z.int().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DfsSlatePlayer')

const DfsSlateSchema = z
  .object({
    DfsSlateGames: z.array(DfsSlateGameSchema).exactOptional(),
    DfsSlatePlayers: z.array(DfsSlatePlayerSchema).exactOptional(),
    IsMultiDaySlate: z.boolean().nullable().exactOptional(),
    NumberOfGames: z.int().nullable().exactOptional(),
    Operator: z.string().nullable().exactOptional(),
    OperatorDay: z.string().nullable().exactOptional(),
    OperatorGameType: z.string().nullable().exactOptional(),
    OperatorName: z.string().nullable().exactOptional(),
    OperatorSlateID: z.int().nullable().exactOptional(),
    OperatorStartTime: z.string().nullable().exactOptional(),
    RemovedByOperator: z.boolean().nullable().exactOptional(),
    SalaryCap: z.int().nullable().exactOptional(),
    SlateID: z.int().exactOptional(),
    SlateRosterSlots: z.array(z.string().nullable()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DfsSlate')

const DfsSlatePlayerOwnershipProjectionSchema = z
  .object({
    FantasyDefensePlayerID: z.int().nullable().exactOptional(),
    IsCaptain: z.boolean().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    ProjectedOwnershipPercentage: z.number().exactOptional(),
    SlateID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DfsSlatePlayerOwnershipProjection')

const DfsSlateWithOwnershipProjectionSchema = z
  .object({
    Operator: z.string().nullable().exactOptional(),
    OperatorDay: z.string().nullable().exactOptional(),
    OperatorName: z.string().nullable().exactOptional(),
    OperatorSlateID: z.int().nullable().exactOptional(),
    OperatorStartTime: z.string().nullable().exactOptional(),
    SlateID: z.int().exactOptional(),
    SlateOwnershipProjections: z.array(DfsSlatePlayerOwnershipProjectionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DfsSlateWithOwnershipProjection')

const ScoringDetailSchema = z
  .object({
    GameKey: z.string().nullable().exactOptional(),
    Length: z.int().exactOptional(),
    PlayerGameID: z.int().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    ScoreID: z.int().nullable().exactOptional(),
    ScoringDetailID: z.int().exactOptional(),
    ScoringPlayID: z.int().nullable().exactOptional(),
    ScoringType: z.string().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    Week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScoringDetail')

const FantasyDefenseGameProjectionSchema = z
  .object({
    AssistedTackles: z.number().exactOptional(),
    BlockedKickReturnTouchdowns: z.number().nullable().exactOptional(),
    BlockedKickReturnYards: z.number().nullable().exactOptional(),
    BlockedKicks: z.number().exactOptional(),
    Date: z.string().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DefensiveTouchdowns: z.number().nullable().exactOptional(),
    DraftKingsFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsPosition: z.string().nullable().exactOptional(),
    DraftKingsQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    DraftKingsTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelPosition: z.string().nullable().exactOptional(),
    FanDuelQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelSalary: z.int().nullable().exactOptional(),
    FanDuelTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDataSalary: z.int().nullable().exactOptional(),
    FantasyDefenseID: z.int().nullable().exactOptional(),
    FantasyDraftFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftPosition: z.string().nullable().exactOptional(),
    FantasyDraftQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftSalary: z.int().nullable().exactOptional(),
    FantasyDraftTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FieldGoalReturnTouchdowns: z.number().nullable().exactOptional(),
    FieldGoalReturnYards: z.number().nullable().exactOptional(),
    FourthDownAttempts: z.number().nullable().exactOptional(),
    FourthDownConversions: z.number().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.number().exactOptional(),
    FumbleReturnYards: z.number().exactOptional(),
    FumblesForced: z.number().exactOptional(),
    FumblesRecovered: z.number().exactOptional(),
    GameKey: z.string().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalOpponentID: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    Humidity: z.int().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.number().exactOptional(),
    InterceptionReturnYards: z.number().exactOptional(),
    Interceptions: z.number().exactOptional(),
    IsGameOver: z.boolean().nullable().exactOptional(),
    KickReturnLong: z.number().exactOptional(),
    KickReturnTouchdowns: z.number().exactOptional(),
    KickReturnYards: z.number().exactOptional(),
    KickReturns: z.number().exactOptional(),
    KickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    OffensiveYardsAllowed: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    OpponentPositionRank: z.int().nullable().exactOptional(),
    OpponentRank: z.int().nullable().exactOptional(),
    PassesDefended: z.number().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PointsAllowed: z.number().exactOptional(),
    PointsAllowedByDefenseSpecialTeams: z.number().nullable().exactOptional(),
    PuntReturnLong: z.number().exactOptional(),
    PuntReturnTouchdowns: z.number().exactOptional(),
    PuntReturnYards: z.number().exactOptional(),
    PuntReturns: z.number().exactOptional(),
    QuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    QuarterbackHits: z.number().nullable().exactOptional(),
    RunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    SackYards: z.number().exactOptional(),
    Sacks: z.number().exactOptional(),
    Safeties: z.number().exactOptional(),
    ScoreID: z.int().exactOptional(),
    ScoringDetails: z.array(ScoringDetailSchema).exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    SoloTackles: z.number().exactOptional(),
    SpecialTeamsTouchdowns: z.number().nullable().exactOptional(),
    Stadium: z.string().nullable().exactOptional(),
    TacklesForLoss: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Temperature: z.int().nullable().exactOptional(),
    ThirdDownAttempts: z.number().nullable().exactOptional(),
    ThirdDownConversions: z.number().nullable().exactOptional(),
    TightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    TouchdownsScored: z.number().exactOptional(),
    TwoPointConversionReturns: z.number().nullable().exactOptional(),
    VictivSalary: z.int().nullable().exactOptional(),
    Week: z.int().nullable().exactOptional(),
    WideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    WindSpeed: z.int().nullable().exactOptional(),
    YahooFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooPosition: z.string().nullable().exactOptional(),
    YahooQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooSalary: z.int().nullable().exactOptional(),
    YahooTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FantasyDefenseGameProjection')

const FantasyDefenseSeasonProjectionSchema = z
  .object({
    AssistedTackles: z.number().exactOptional(),
    AuctionValue: z.number().nullable().exactOptional(),
    AuctionValuePPR: z.number().nullable().exactOptional(),
    AverageDraftPosition: z.number().nullable().exactOptional(),
    AverageDraftPosition2QB: z.number().nullable().exactOptional(),
    AverageDraftPositionDynasty: z.number().nullable().exactOptional(),
    AverageDraftPositionPPR: z.number().nullable().exactOptional(),
    BlockedKickReturnTouchdowns: z.number().nullable().exactOptional(),
    BlockedKickReturnYards: z.number().nullable().exactOptional(),
    BlockedKicks: z.number().exactOptional(),
    DefensiveTouchdowns: z.number().nullable().exactOptional(),
    DraftKingsFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FieldGoalReturnTouchdowns: z.number().nullable().exactOptional(),
    FieldGoalReturnYards: z.number().nullable().exactOptional(),
    FourthDownAttempts: z.number().nullable().exactOptional(),
    FourthDownConversions: z.number().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.number().exactOptional(),
    FumbleReturnYards: z.number().exactOptional(),
    FumblesForced: z.number().exactOptional(),
    FumblesRecovered: z.number().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Humidity: z.int().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.number().exactOptional(),
    InterceptionReturnYards: z.number().exactOptional(),
    Interceptions: z.number().exactOptional(),
    KickReturnLong: z.number().exactOptional(),
    KickReturnTouchdowns: z.number().exactOptional(),
    KickReturnYards: z.number().exactOptional(),
    KickReturns: z.number().exactOptional(),
    KickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    OffensiveYardsAllowed: z.number().nullable().exactOptional(),
    PassesDefended: z.number().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PointsAllowed: z.number().exactOptional(),
    PointsAllowedByDefenseSpecialTeams: z.number().nullable().exactOptional(),
    PuntReturnLong: z.number().exactOptional(),
    PuntReturnTouchdowns: z.number().exactOptional(),
    PuntReturnYards: z.number().exactOptional(),
    PuntReturns: z.number().exactOptional(),
    QuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    QuarterbackHits: z.number().nullable().exactOptional(),
    RunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    SackYards: z.number().exactOptional(),
    Sacks: z.number().exactOptional(),
    Safeties: z.number().exactOptional(),
    ScoringDetails: z.array(ScoringDetailSchema).exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    SoloTackles: z.number().exactOptional(),
    SpecialTeamsTouchdowns: z.number().nullable().exactOptional(),
    TacklesForLoss: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Temperature: z.int().nullable().exactOptional(),
    ThirdDownAttempts: z.number().nullable().exactOptional(),
    ThirdDownConversions: z.number().nullable().exactOptional(),
    TightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    TouchdownsScored: z.number().exactOptional(),
    TwoPointConversionReturns: z.number().nullable().exactOptional(),
    WideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    WindSpeed: z.int().nullable().exactOptional(),
    YahooFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FantasyDefenseSeasonProjection')

const PlayerSchema = z
  .object({
    Active: z.boolean().nullable().exactOptional(),
    Age: z.int().nullable().exactOptional(),
    AverageDraftPosition: z.number().nullable().exactOptional(),
    BirthDate: z.string().nullable().exactOptional(),
    BirthDateString: z.string().nullable().exactOptional(),
    ByeWeek: z.int().nullable().exactOptional(),
    College: z.string().nullable().exactOptional(),
    CollegeDraftPick: z.int().nullable().exactOptional(),
    CollegeDraftRound: z.int().nullable().exactOptional(),
    CollegeDraftTeam: z.string().nullable().exactOptional(),
    CollegeDraftYear: z.int().nullable().exactOptional(),
    CurrentStatus: z.string().nullable().exactOptional(),
    CurrentTeam: z.string().nullable().exactOptional(),
    DeclaredInactive: z.boolean().exactOptional(),
    DepthDisplayOrder: z.int().nullable().exactOptional(),
    DepthOrder: z.int().nullable().exactOptional(),
    DepthPosition: z.string().nullable().exactOptional(),
    DepthPositionCategory: z.string().nullable().exactOptional(),
    DraftKingsName: z.string().nullable().exactOptional(),
    DraftKingsPlayerID: z.int().nullable().exactOptional(),
    Experience: z.int().nullable().exactOptional(),
    ExperienceString: z.string().nullable().exactOptional(),
    FanDuelName: z.string().nullable().exactOptional(),
    FanDuelPlayerID: z.int().nullable().exactOptional(),
    FantasyAlarmPlayerID: z.int().nullable().exactOptional(),
    FantasyDraftName: z.string().nullable().exactOptional(),
    FantasyDraftPlayerID: z.int().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FantasyPositionDepthOrder: z.int().nullable().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Height: z.string().nullable().exactOptional(),
    HeightFeet: z.int().nullable().exactOptional(),
    HeightInches: z.int().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryPractice: z.string().nullable().exactOptional(),
    InjuryPracticeDescription: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    IsUndraftedFreeAgent: z.boolean().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().nullable().exactOptional(),
    PhotoUrl: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    RotoWirePlayerID: z.int().nullable().exactOptional(),
    RotoworldPlayerID: z.int().nullable().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    SportRadarPlayerID: z.string().nullable().exactOptional(),
    SportsDirectPlayerID: z.int().nullable().exactOptional(),
    StatsPlayerID: z.int().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    UpcomingDraftKingsSalary: z.int().nullable().exactOptional(),
    UpcomingFanDuelSalary: z.int().nullable().exactOptional(),
    UpcomingGameOpponent: z.string().nullable().exactOptional(),
    UpcomingGameWeek: z.int().exactOptional(),
    UpcomingOpponentPositionRank: z.int().nullable().exactOptional(),
    UpcomingOpponentRank: z.int().nullable().exactOptional(),
    UpcomingSalary: z.int().nullable().exactOptional(),
    UpcomingYahooSalary: z.int().nullable().exactOptional(),
    UsaTodayHeadshotNoBackgroundUpdated: z.string().nullable().exactOptional(),
    UsaTodayHeadshotNoBackgroundUrl: z.string().nullable().exactOptional(),
    UsaTodayHeadshotUpdated: z.string().nullable().exactOptional(),
    UsaTodayHeadshotUrl: z.string().nullable().exactOptional(),
    UsaTodayPlayerID: z.int().nullable().exactOptional(),
    Weight: z.int().nullable().exactOptional(),
    XmlTeamPlayerID: z.int().nullable().exactOptional(),
    YahooName: z.string().nullable().exactOptional(),
    YahooPlayerID: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Player')

const PlayerGameProjectionSchema = z
  .object({
    Activated: z.int().exactOptional(),
    AssistedTackles: z.number().exactOptional(),
    BlockedKickReturnTouchdowns: z.number().nullable().exactOptional(),
    BlockedKickReturnYards: z.number().nullable().exactOptional(),
    BlockedKicks: z.number().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DeclaredInactive: z.boolean().exactOptional(),
    DefensiveSnapsPlayed: z.int().nullable().exactOptional(),
    DefensiveTeamSnaps: z.int().nullable().exactOptional(),
    DefensiveTouchdowns: z.number().exactOptional(),
    DraftKingsPosition: z.string().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    ExtraPointsAttempted: z.number().nullable().exactOptional(),
    ExtraPointsHadBlocked: z.number().nullable().exactOptional(),
    ExtraPointsMade: z.number().exactOptional(),
    FanDuelPosition: z.string().nullable().exactOptional(),
    FanDuelSalary: z.int().nullable().exactOptional(),
    FantasyDataSalary: z.int().nullable().exactOptional(),
    FantasyDraftPosition: z.string().nullable().exactOptional(),
    FantasyDraftSalary: z.int().nullable().exactOptional(),
    FantasyPoints: z.number().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsPPR: z.number().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FieldGoalPercentage: z.number().exactOptional(),
    FieldGoalReturnTouchdowns: z.number().nullable().exactOptional(),
    FieldGoalReturnYards: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.number().exactOptional(),
    FieldGoalsHadBlocked: z.number().nullable().exactOptional(),
    FieldGoalsLongestMade: z.number().exactOptional(),
    FieldGoalsMade: z.number().exactOptional(),
    FieldGoalsMade0to19: z.number().nullable().exactOptional(),
    FieldGoalsMade20to29: z.number().nullable().exactOptional(),
    FieldGoalsMade30to39: z.number().nullable().exactOptional(),
    FieldGoalsMade40to49: z.number().nullable().exactOptional(),
    FieldGoalsMade50Plus: z.number().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.number().exactOptional(),
    FumbleReturnYards: z.number().exactOptional(),
    Fumbles: z.number().exactOptional(),
    FumblesForced: z.number().exactOptional(),
    FumblesLost: z.number().nullable().exactOptional(),
    FumblesOutOfBounds: z.number().nullable().exactOptional(),
    FumblesOwnRecoveries: z.number().nullable().exactOptional(),
    FumblesRecovered: z.number().exactOptional(),
    GameDate: z.string().nullable().exactOptional(),
    GameKey: z.string().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalOpponentID: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    Humidity: z.int().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryPractice: z.string().nullable().exactOptional(),
    InjuryPracticeDescription: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.number().exactOptional(),
    InterceptionReturnYards: z.number().exactOptional(),
    Interceptions: z.number().exactOptional(),
    IsGameOver: z.boolean().nullable().exactOptional(),
    KickReturnFairCatches: z.number().nullable().exactOptional(),
    KickReturnLong: z.number().exactOptional(),
    KickReturnTouchdowns: z.number().exactOptional(),
    KickReturnYards: z.number().exactOptional(),
    KickReturnYardsPerAttempt: z.number().exactOptional(),
    KickReturns: z.number().exactOptional(),
    MiscAssistedTackles: z.number().exactOptional(),
    MiscFumblesForced: z.number().nullable().exactOptional(),
    MiscFumblesRecovered: z.number().nullable().exactOptional(),
    MiscSoloTackles: z.number().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    OffensiveFumbleRecoveryTouchdowns: z.number().nullable().exactOptional(),
    OffensiveSnapsPlayed: z.int().nullable().exactOptional(),
    OffensiveTeamSnaps: z.int().nullable().exactOptional(),
    OffensiveTouchdowns: z.number().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    OpponentPositionRank: z.int().nullable().exactOptional(),
    OpponentRank: z.int().nullable().exactOptional(),
    PassesDefended: z.number().exactOptional(),
    PassingAttempts: z.number().exactOptional(),
    PassingCompletionPercentage: z.number().exactOptional(),
    PassingCompletions: z.number().exactOptional(),
    PassingInterceptions: z.number().exactOptional(),
    PassingLong: z.number().exactOptional(),
    PassingRating: z.number().exactOptional(),
    PassingSackYards: z.number().exactOptional(),
    PassingSacks: z.number().exactOptional(),
    PassingTouchdowns: z.number().exactOptional(),
    PassingYards: z.number().exactOptional(),
    PassingYardsPerAttempt: z.number().exactOptional(),
    PassingYardsPerCompletion: z.number().exactOptional(),
    Played: z.int().exactOptional(),
    PlayerGameID: z.int().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlayingSurface: z.string().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    PuntAverage: z.number().exactOptional(),
    PuntInside20: z.number().nullable().exactOptional(),
    PuntLong: z.number().nullable().exactOptional(),
    PuntNetAverage: z.number().nullable().exactOptional(),
    PuntNetYards: z.number().nullable().exactOptional(),
    PuntReturnFairCatches: z.number().nullable().exactOptional(),
    PuntReturnLong: z.number().exactOptional(),
    PuntReturnTouchdowns: z.number().exactOptional(),
    PuntReturnYards: z.number().exactOptional(),
    PuntReturnYardsPerAttempt: z.number().exactOptional(),
    PuntReturns: z.number().exactOptional(),
    PuntTouchbacks: z.number().nullable().exactOptional(),
    PuntYards: z.number().exactOptional(),
    Punts: z.number().exactOptional(),
    PuntsHadBlocked: z.number().nullable().exactOptional(),
    QuarterbackHits: z.number().nullable().exactOptional(),
    ReceivingLong: z.number().exactOptional(),
    ReceivingTargets: z.number().nullable().exactOptional(),
    ReceivingTouchdowns: z.number().exactOptional(),
    ReceivingYards: z.number().exactOptional(),
    ReceivingYardsPerReception: z.number().exactOptional(),
    ReceivingYardsPerTarget: z.number().exactOptional(),
    ReceptionPercentage: z.number().exactOptional(),
    Receptions: z.number().exactOptional(),
    RushingAttempts: z.number().exactOptional(),
    RushingLong: z.number().exactOptional(),
    RushingTouchdowns: z.number().exactOptional(),
    RushingYards: z.number().exactOptional(),
    RushingYardsPerAttempt: z.number().exactOptional(),
    SackYards: z.number().exactOptional(),
    Sacks: z.number().exactOptional(),
    Safeties: z.number().nullable().exactOptional(),
    SafetiesAllowed: z.number().nullable().exactOptional(),
    ScoreID: z.int().exactOptional(),
    ScoringDetails: z.array(ScoringDetailSchema).exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    SnapCountsConfirmed: z.boolean().nullable().exactOptional(),
    SoloTackles: z.number().exactOptional(),
    SpecialTeamsAssistedTackles: z.number().exactOptional(),
    SpecialTeamsFumblesForced: z.number().nullable().exactOptional(),
    SpecialTeamsFumblesRecovered: z.number().nullable().exactOptional(),
    SpecialTeamsSnapsPlayed: z.int().nullable().exactOptional(),
    SpecialTeamsSoloTackles: z.number().exactOptional(),
    SpecialTeamsTeamSnaps: z.int().nullable().exactOptional(),
    SpecialTeamsTouchdowns: z.number().exactOptional(),
    Stadium: z.string().nullable().exactOptional(),
    Started: z.int().exactOptional(),
    Tackles: z.number().exactOptional(),
    TacklesForLoss: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Temperature: z.int().nullable().exactOptional(),
    Touchdowns: z.number().exactOptional(),
    TwoPointConversionPasses: z.number().exactOptional(),
    TwoPointConversionReceptions: z.number().exactOptional(),
    TwoPointConversionReturns: z.number().nullable().exactOptional(),
    TwoPointConversionRuns: z.number().exactOptional(),
    VictivSalary: z.int().nullable().exactOptional(),
    Week: z.int().exactOptional(),
    WindSpeed: z.int().nullable().exactOptional(),
    YahooPosition: z.string().nullable().exactOptional(),
    YahooSalary: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerGameProjection')

const PlayerSeasonProjectionSchema = z
  .object({
    Activated: z.int().exactOptional(),
    AssistedTackles: z.number().exactOptional(),
    AuctionValue: z.number().nullable().exactOptional(),
    AuctionValuePPR: z.number().nullable().exactOptional(),
    AverageDraftPosition: z.number().nullable().exactOptional(),
    AverageDraftPosition2QB: z.number().nullable().exactOptional(),
    AverageDraftPositionDynasty: z.number().nullable().exactOptional(),
    AverageDraftPositionPPR: z.number().nullable().exactOptional(),
    AverageDraftPositionRookie: z.number().nullable().exactOptional(),
    BlockedKickReturnTouchdowns: z.number().nullable().exactOptional(),
    BlockedKickReturnYards: z.number().nullable().exactOptional(),
    BlockedKicks: z.number().exactOptional(),
    DefensiveSnapsPlayed: z.int().nullable().exactOptional(),
    DefensiveTeamSnaps: z.int().nullable().exactOptional(),
    DefensiveTouchdowns: z.number().exactOptional(),
    ExtraPointsAttempted: z.number().nullable().exactOptional(),
    ExtraPointsHadBlocked: z.number().nullable().exactOptional(),
    ExtraPointsMade: z.number().exactOptional(),
    FantasyPoints: z.number().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsPPR: z.number().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FieldGoalPercentage: z.number().exactOptional(),
    FieldGoalReturnTouchdowns: z.number().nullable().exactOptional(),
    FieldGoalReturnYards: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.number().exactOptional(),
    FieldGoalsHadBlocked: z.number().nullable().exactOptional(),
    FieldGoalsLongestMade: z.number().exactOptional(),
    FieldGoalsMade: z.number().exactOptional(),
    FieldGoalsMade0to19: z.number().nullable().exactOptional(),
    FieldGoalsMade20to29: z.number().nullable().exactOptional(),
    FieldGoalsMade30to39: z.number().nullable().exactOptional(),
    FieldGoalsMade40to49: z.number().nullable().exactOptional(),
    FieldGoalsMade50Plus: z.number().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.number().exactOptional(),
    FumbleReturnYards: z.number().exactOptional(),
    Fumbles: z.number().exactOptional(),
    FumblesForced: z.number().exactOptional(),
    FumblesLost: z.number().nullable().exactOptional(),
    FumblesOutOfBounds: z.number().nullable().exactOptional(),
    FumblesOwnRecoveries: z.number().nullable().exactOptional(),
    FumblesRecovered: z.number().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Humidity: z.int().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.number().exactOptional(),
    InterceptionReturnYards: z.number().exactOptional(),
    Interceptions: z.number().exactOptional(),
    KickReturnFairCatches: z.number().nullable().exactOptional(),
    KickReturnLong: z.number().exactOptional(),
    KickReturnTouchdowns: z.number().exactOptional(),
    KickReturnYards: z.number().exactOptional(),
    KickReturnYardsPerAttempt: z.number().exactOptional(),
    KickReturns: z.number().exactOptional(),
    MiscAssistedTackles: z.number().exactOptional(),
    MiscFumblesForced: z.number().nullable().exactOptional(),
    MiscFumblesRecovered: z.number().nullable().exactOptional(),
    MiscSoloTackles: z.number().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    OffensiveFumbleRecoveryTouchdowns: z.int().nullable().exactOptional(),
    OffensiveSnapsPlayed: z.int().nullable().exactOptional(),
    OffensiveTeamSnaps: z.int().nullable().exactOptional(),
    OffensiveTouchdowns: z.number().exactOptional(),
    PassesDefended: z.number().exactOptional(),
    PassingAttempts: z.number().exactOptional(),
    PassingCompletionPercentage: z.number().exactOptional(),
    PassingCompletions: z.number().exactOptional(),
    PassingInterceptions: z.number().exactOptional(),
    PassingLong: z.number().exactOptional(),
    PassingRating: z.number().exactOptional(),
    PassingSackYards: z.number().exactOptional(),
    PassingSacks: z.number().exactOptional(),
    PassingTouchdowns: z.number().exactOptional(),
    PassingYards: z.number().exactOptional(),
    PassingYardsPerAttempt: z.number().exactOptional(),
    PassingYardsPerCompletion: z.number().exactOptional(),
    Played: z.int().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlayerSeasonID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    PuntAverage: z.number().exactOptional(),
    PuntInside20: z.number().nullable().exactOptional(),
    PuntLong: z.number().nullable().exactOptional(),
    PuntNetAverage: z.number().nullable().exactOptional(),
    PuntNetYards: z.number().nullable().exactOptional(),
    PuntReturnFairCatches: z.number().nullable().exactOptional(),
    PuntReturnLong: z.number().exactOptional(),
    PuntReturnTouchdowns: z.number().exactOptional(),
    PuntReturnYards: z.number().exactOptional(),
    PuntReturnYardsPerAttempt: z.number().exactOptional(),
    PuntReturns: z.number().exactOptional(),
    PuntTouchbacks: z.number().nullable().exactOptional(),
    PuntYards: z.number().exactOptional(),
    Punts: z.number().exactOptional(),
    PuntsHadBlocked: z.number().nullable().exactOptional(),
    QuarterbackHits: z.number().nullable().exactOptional(),
    ReceivingLong: z.number().exactOptional(),
    ReceivingTargets: z.number().nullable().exactOptional(),
    ReceivingTouchdowns: z.number().exactOptional(),
    ReceivingYards: z.number().exactOptional(),
    ReceivingYardsPerReception: z.number().exactOptional(),
    ReceivingYardsPerTarget: z.number().exactOptional(),
    ReceptionPercentage: z.number().exactOptional(),
    Receptions: z.number().exactOptional(),
    RushingAttempts: z.number().exactOptional(),
    RushingLong: z.number().exactOptional(),
    RushingTouchdowns: z.number().exactOptional(),
    RushingYards: z.number().exactOptional(),
    RushingYardsPerAttempt: z.number().exactOptional(),
    SackYards: z.number().exactOptional(),
    Sacks: z.number().exactOptional(),
    Safeties: z.number().nullable().exactOptional(),
    SafetiesAllowed: z.number().nullable().exactOptional(),
    ScoringDetails: z.array(ScoringDetailSchema).exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    SoloTackles: z.number().exactOptional(),
    SpecialTeamsAssistedTackles: z.number().exactOptional(),
    SpecialTeamsFumblesForced: z.number().nullable().exactOptional(),
    SpecialTeamsFumblesRecovered: z.number().nullable().exactOptional(),
    SpecialTeamsSnapsPlayed: z.int().nullable().exactOptional(),
    SpecialTeamsSoloTackles: z.number().exactOptional(),
    SpecialTeamsTeamSnaps: z.int().nullable().exactOptional(),
    SpecialTeamsTouchdowns: z.number().exactOptional(),
    Started: z.int().exactOptional(),
    Tackles: z.number().exactOptional(),
    TacklesForLoss: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Temperature: z.int().nullable().exactOptional(),
    Touchdowns: z.number().exactOptional(),
    TwoPointConversionPasses: z.number().exactOptional(),
    TwoPointConversionReceptions: z.number().exactOptional(),
    TwoPointConversionReturns: z.number().nullable().exactOptional(),
    TwoPointConversionRuns: z.number().exactOptional(),
    WindSpeed: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerSeasonProjection')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getFormatDfsSlateOwnershipProjectionsBySlateIDSlateIdRoute = createRoute({
  method: 'get',
  path: '/{format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}',
  summary: 'DFS Slate Ownership Projections by SlateID',
  description:
    'Slate Ownership Projections for a specific slate. Projections are for GPP format ownership. Will return an empty list if the slate is not yet projected or not a slate we have projections for.',
  operationId: 'DfsSlateOwnershipProjectionsBySlateid',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      slateId: z
        .string()
        .openapi({
          param: {
            description:
              'SlateID of the DFS Slate you wish to get ownership projections for. Will have an empty SlateOwnershipProjections if this slate was not projected',
            in: 'path',
            name: 'slateId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DfsSlateWithOwnershipProjectionSchema } },
    },
  },
})

export const getFormatDfsSlatesByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/DfsSlatesByDate/{date}',
  summary: 'DFS Slates by Date',
  operationId: 'DfsSlatesByDate',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the slates.\n<br>Examples: <code>2017-SEP-25</code>, <code>2017-10-31</code>.',
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(DfsSlateSchema) } } },
  },
})

export const getFormatDfsSlatesByWeekSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/DfsSlatesByWeek/{season}/{week}',
  summary: 'DFS Slates by Week',
  operationId: 'DfsSlatesByWeek',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(DfsSlateSchema) } } },
  },
})

export const getFormatFantasyDefenseProjectionsByGameSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/FantasyDefenseProjectionsByGame/{season}/{week}',
  summary: 'Projected Fantasy Defense Game Stats (w/ DFS Salaries)',
  operationId: 'ProjectedFantasyDefenseGameStatsWDfsSalaries',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(FantasyDefenseGameProjectionSchema) } },
    },
  },
})

export const getFormatFantasyDefenseProjectionsBySeasonSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/FantasyDefenseProjectionsBySeason/{season}',
  summary: 'Projected Fantasy Defense Season Stats (w/ ADP)',
  operationId: 'ProjectedFantasyDefenseSeasonStatsWAdp',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(FantasyDefenseSeasonProjectionSchema) } },
    },
  },
})

export const getFormatIdpPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/IdpPlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}',
  summary: 'IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)',
  operationId: 'IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      playerid: z
        .string()
        .openapi({
          param: {
            description:
              'Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.',
            in: 'path',
            name: 'playerid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PlayerGameProjectionSchema } },
    },
  },
})

export const getFormatIdpPlayerGameProjectionStatsByTeamSeasonWeekTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/IdpPlayerGameProjectionStatsByTeam/{season}/{week}/{team}',
  summary: 'IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)',
  operationId: 'IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .openapi({
          param: {
            description: 'Abbreviation of the team. Example: <code>WAS</code>.',
            in: 'path',
            name: 'team',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerGameProjectionSchema) } },
    },
  },
})

export const getFormatIdpPlayerGameProjectionStatsByWeekSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/IdpPlayerGameProjectionStatsByWeek/{season}/{week}',
  summary: 'IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)',
  operationId: 'IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerGameProjectionSchema) } },
    },
  },
})

export const getFormatInjuredPlayersRoute = createRoute({
  method: 'get',
  path: '/{format}/InjuredPlayers',
  summary: 'Injured Players',
  description:
    'This endpoint provides all currently injured NFL players, along with injury details.',
  operationId: 'InjuredPlayers',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(PlayerSchema) } } },
  },
})

export const getFormatPlayerGameProjectionStatsByPlayerIDSeasonWeekPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}',
  summary: 'Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)',
  operationId: 'ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      playerid: z
        .string()
        .openapi({
          param: {
            description:
              'Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.',
            in: 'path',
            name: 'playerid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PlayerGameProjectionSchema } },
    },
  },
})

export const getFormatPlayerGameProjectionStatsByTeamSeasonWeekTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameProjectionStatsByTeam/{season}/{week}/{team}',
  summary: 'Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)',
  operationId: 'ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .openapi({
          param: {
            description: 'Abbreviation of the team. Example: <code>WAS</code>.',
            in: 'path',
            name: 'team',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerGameProjectionSchema) } },
    },
  },
})

export const getFormatPlayerGameProjectionStatsByWeekSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}',
  summary: 'Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)',
  operationId: 'ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerGameProjectionSchema) } },
    },
  },
})

export const getFormatPlayerSeasonProjectionStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonProjectionStats/{season}',
  summary: 'Projected Player Season Stats (w/ ADP)',
  operationId: 'ProjectedPlayerSeasonStatsWAdp',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerSeasonProjectionSchema) } },
    },
  },
})

export const getFormatPlayerSeasonProjectionStatsByPlayerIDSeasonPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonProjectionStatsByPlayerID/{season}/{playerid}',
  summary: 'Projected Player Season Stats by Player (w/ ADP)',
  operationId: 'ProjectedPlayerSeasonStatsByPlayerWAdp',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      playerid: z
        .string()
        .openapi({
          param: {
            description:
              'Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.',
            in: 'path',
            name: 'playerid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PlayerSeasonProjectionSchema } },
    },
  },
})

export const getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}',
  summary: 'Projected Player Season Stats by Team (w/ ADP)',
  operationId: 'ProjectedPlayerSeasonStatsByTeamWAdp',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .openapi({
          param: {
            description: 'Abbreviation of the team. Example: <code>WAS</code>.',
            in: 'path',
            name: 'team',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerSeasonProjectionSchema) } },
    },
  },
})

export const getFormatUpcomingDfsSlateOwnershipProjectionsRoute = createRoute({
  method: 'get',
  path: '/{format}/UpcomingDfsSlateOwnershipProjections',
  summary: 'Upcoming DFS Slate Ownership Projections',
  description:
    'Grabs DFS Slates which have not yet started for which we have DFS Ownership projections. ',
  operationId: 'UpcomingDfsSlateOwnershipProjections',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(DfsSlateWithOwnershipProjectionSchema) } },
    },
  },
})
