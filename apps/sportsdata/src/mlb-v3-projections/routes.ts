import { createRoute, z } from '@hono/zod-openapi'

const DepthChartSchema = z
  .object({
    DepthChartID: z.int().exactOptional(),
    DepthOrder: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    TeamID: z.int().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DepthChart')

const InningSchema = z
  .object({
    AwayTeamRuns: z.int().nullable().exactOptional(),
    GameID: z.int().exactOptional(),
    HomeTeamRuns: z.int().nullable().exactOptional(),
    InningID: z.int().exactOptional(),
    InningNumber: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Inning')

const SeriesSchema = z
  .object({
    AwayTeamWins: z.int().exactOptional(),
    GameNumber: z.int().exactOptional(),
    HomeTeamWins: z.int().exactOptional(),
    MaxLength: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Series')

const GameSchema = z
  .object({
    Attendance: z.int().nullable().exactOptional(),
    AwayRotationNumber: z.int().nullable().exactOptional(),
    AwayTeam: z.string().nullable().exactOptional(),
    AwayTeamErrors: z.int().nullable().exactOptional(),
    AwayTeamHits: z.int().nullable().exactOptional(),
    AwayTeamID: z.int().exactOptional(),
    AwayTeamMoneyLine: z.int().nullable().exactOptional(),
    AwayTeamProbablePitcherID: z.int().nullable().exactOptional(),
    AwayTeamRuns: z.int().nullable().exactOptional(),
    AwayTeamStartingPitcher: z.string().nullable().exactOptional(),
    AwayTeamStartingPitcherID: z.int().nullable().exactOptional(),
    Balls: z.int().nullable().exactOptional(),
    Channel: z.string().nullable().exactOptional(),
    CurrentHitter: z.string().nullable().exactOptional(),
    CurrentHitterID: z.int().nullable().exactOptional(),
    CurrentHittingTeamID: z.int().nullable().exactOptional(),
    CurrentPitcher: z.string().nullable().exactOptional(),
    CurrentPitcherID: z.int().nullable().exactOptional(),
    CurrentPitchingTeamID: z.int().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    DateTimeUTC: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DueUpHitterID1: z.int().nullable().exactOptional(),
    DueUpHitterID2: z.int().nullable().exactOptional(),
    DueUpHitterID3: z.int().nullable().exactOptional(),
    ForecastDescription: z.string().nullable().exactOptional(),
    ForecastTempHigh: z.int().nullable().exactOptional(),
    ForecastTempLow: z.int().nullable().exactOptional(),
    ForecastWindChill: z.int().nullable().exactOptional(),
    ForecastWindDirection: z.int().nullable().exactOptional(),
    ForecastWindSpeed: z.int().nullable().exactOptional(),
    GameEndDateTime: z.string().nullable().exactOptional(),
    GameID: z.int().exactOptional(),
    GlobalAwayTeamID: z.int().exactOptional(),
    GlobalGameID: z.int().exactOptional(),
    GlobalHomeTeamID: z.int().exactOptional(),
    HomeRotationNumber: z.int().nullable().exactOptional(),
    HomeTeam: z.string().nullable().exactOptional(),
    HomeTeamErrors: z.int().nullable().exactOptional(),
    HomeTeamHits: z.int().nullable().exactOptional(),
    HomeTeamID: z.int().exactOptional(),
    HomeTeamMoneyLine: z.int().nullable().exactOptional(),
    HomeTeamProbablePitcherID: z.int().nullable().exactOptional(),
    HomeTeamRuns: z.int().nullable().exactOptional(),
    HomeTeamStartingPitcher: z.string().nullable().exactOptional(),
    HomeTeamStartingPitcherID: z.int().nullable().exactOptional(),
    Inning: z.int().nullable().exactOptional(),
    InningDescription: z.string().nullable().exactOptional(),
    InningHalf: z.string().nullable().exactOptional(),
    Innings: z.array(InningSchema).exactOptional(),
    IsClosed: z.boolean().exactOptional(),
    LastPlay: z.string().nullable().exactOptional(),
    LosingPitcher: z.string().nullable().exactOptional(),
    LosingPitcherID: z.int().nullable().exactOptional(),
    NeutralVenue: z.boolean().nullable().exactOptional(),
    Outs: z.int().nullable().exactOptional(),
    OverPayout: z.int().nullable().exactOptional(),
    OverUnder: z.number().nullable().exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    PointSpreadAwayTeamMoneyLine: z.int().nullable().exactOptional(),
    PointSpreadHomeTeamMoneyLine: z.int().nullable().exactOptional(),
    RescheduledFromGameID: z.int().nullable().exactOptional(),
    RescheduledGameID: z.int().nullable().exactOptional(),
    RunnerOnFirst: z.boolean().nullable().exactOptional(),
    RunnerOnSecond: z.boolean().nullable().exactOptional(),
    RunnerOnThird: z.boolean().nullable().exactOptional(),
    SavingPitcher: z.string().nullable().exactOptional(),
    SavingPitcherID: z.int().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    SeriesInfo: SeriesSchema.exactOptional(),
    StadiumID: z.int().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    Strikes: z.int().nullable().exactOptional(),
    UnderPayout: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    WinningPitcher: z.string().nullable().exactOptional(),
    WinningPitcherID: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Game')

const DfsSlateGameSchema = z
  .object({
    Game: GameSchema.exactOptional(),
    GameID: z.int().nullable().exactOptional(),
    OperatorGameID: z.int().nullable().exactOptional(),
    RemovedByOperator: z.boolean().nullable().exactOptional(),
    SlateGameID: z.int().exactOptional(),
    SlateID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DfsSlateGame')

const DfsSlatePlayerSchema = z
  .object({
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

const LineupSchema = z
  .object({
    BattingOrder: z.int().nullable().exactOptional(),
    Confirmed: z.boolean().nullable().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    Starting: z.boolean().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Lineup')

const PlayerSchema = z
  .object({
    BatHand: z.string().nullable().exactOptional(),
    BirthCity: z.string().nullable().exactOptional(),
    BirthCountry: z.string().nullable().exactOptional(),
    BirthDate: z.string().nullable().exactOptional(),
    BirthState: z.string().nullable().exactOptional(),
    College: z.string().nullable().exactOptional(),
    DraftKingsName: z.string().nullable().exactOptional(),
    DraftKingsPlayerID: z.int().nullable().exactOptional(),
    Experience: z.string().nullable().exactOptional(),
    FanDuelName: z.string().nullable().exactOptional(),
    FanDuelPlayerID: z.int().nullable().exactOptional(),
    FantasyAlarmPlayerID: z.int().nullable().exactOptional(),
    FantasyDraftName: z.string().nullable().exactOptional(),
    FantasyDraftPlayerID: z.int().nullable().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Height: z.int().nullable().exactOptional(),
    HighSchool: z.string().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    Jersey: z.int().nullable().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    MLBAMID: z.int().nullable().exactOptional(),
    PhotoUrl: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    ProDebut: z.string().nullable().exactOptional(),
    RotoWirePlayerID: z.int().nullable().exactOptional(),
    RotoworldPlayerID: z.int().nullable().exactOptional(),
    Salary: z.int().nullable().exactOptional(),
    SportRadarPlayerID: z.string().nullable().exactOptional(),
    SportsDataID: z.string().nullable().exactOptional(),
    SportsDirectPlayerID: z.int().nullable().exactOptional(),
    StatsPlayerID: z.int().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    ThrowHand: z.string().nullable().exactOptional(),
    UpcomingGameID: z.int().nullable().exactOptional(),
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
    AtBats: z.number().nullable().exactOptional(),
    BallsInPlay: z.number().nullable().exactOptional(),
    BattingAverage: z.number().nullable().exactOptional(),
    BattingAverageOnBallsInPlay: z.number().nullable().exactOptional(),
    BattingOrder: z.int().nullable().exactOptional(),
    BattingOrderConfirmed: z.boolean().nullable().exactOptional(),
    CaughtStealing: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DoublePlays: z.number().nullable().exactOptional(),
    Doubles: z.number().nullable().exactOptional(),
    DraftKingsPosition: z.string().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    EarnedRunAverage: z.number().nullable().exactOptional(),
    Errors: z.number().nullable().exactOptional(),
    FanDuelPosition: z.string().nullable().exactOptional(),
    FanDuelSalary: z.int().nullable().exactOptional(),
    FantasyDataSalary: z.int().nullable().exactOptional(),
    FantasyDraftPosition: z.string().nullable().exactOptional(),
    FantasyDraftSalary: z.int().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsBatting: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsPitching: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FieldingIndependentPitching: z.number().nullable().exactOptional(),
    FlyOuts: z.number().nullable().exactOptional(),
    GameID: z.int().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalOpponentID: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    GrandSlams: z.number().nullable().exactOptional(),
    GroundIntoDoublePlay: z.number().nullable().exactOptional(),
    GroundOuts: z.number().nullable().exactOptional(),
    HitByPitch: z.number().nullable().exactOptional(),
    Hits: z.number().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    HomeRuns: z.number().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    InningsPitchedDecimal: z.number().nullable().exactOptional(),
    InningsPitchedFull: z.number().nullable().exactOptional(),
    InningsPitchedOuts: z.number().nullable().exactOptional(),
    IntentionalWalks: z.number().nullable().exactOptional(),
    IsGameOver: z.boolean().exactOptional(),
    IsolatedPower: z.number().nullable().exactOptional(),
    LeftOnBase: z.number().nullable().exactOptional(),
    LineOuts: z.number().nullable().exactOptional(),
    Losses: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OnBasePercentage: z.number().nullable().exactOptional(),
    OnBasePlusSlugging: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    OpponentPositionRank: z.int().nullable().exactOptional(),
    OpponentRank: z.int().nullable().exactOptional(),
    Outs: z.number().nullable().exactOptional(),
    PitchesSeen: z.number().nullable().exactOptional(),
    PitchesThrown: z.number().nullable().exactOptional(),
    PitchesThrownStrikes: z.number().nullable().exactOptional(),
    PitchingBallsInPlay: z.number().nullable().exactOptional(),
    PitchingBattingAverageAgainst: z.number().nullable().exactOptional(),
    PitchingBattingAverageOnBallsInPlay: z.number().nullable().exactOptional(),
    PitchingBlownSaves: z.number().nullable().exactOptional(),
    PitchingCatchersInterference: z.number().nullable().exactOptional(),
    PitchingCompleteGames: z.number().nullable().exactOptional(),
    PitchingDoublePlays: z.number().nullable().exactOptional(),
    PitchingDoubles: z.number().nullable().exactOptional(),
    PitchingEarnedRuns: z.number().nullable().exactOptional(),
    PitchingFlyOuts: z.number().nullable().exactOptional(),
    PitchingGrandSlams: z.number().nullable().exactOptional(),
    PitchingGroundIntoDoublePlay: z.number().nullable().exactOptional(),
    PitchingGroundOuts: z.number().nullable().exactOptional(),
    PitchingHitByPitch: z.number().nullable().exactOptional(),
    PitchingHits: z.number().nullable().exactOptional(),
    PitchingHolds: z.number().nullable().exactOptional(),
    PitchingHomeRuns: z.number().nullable().exactOptional(),
    PitchingInningStarted: z.int().nullable().exactOptional(),
    PitchingIntentionalWalks: z.number().nullable().exactOptional(),
    PitchingLineOuts: z.number().nullable().exactOptional(),
    PitchingNoHitters: z.number().nullable().exactOptional(),
    PitchingOnBasePercentage: z.number().nullable().exactOptional(),
    PitchingOnBasePlusSlugging: z.number().nullable().exactOptional(),
    PitchingPerfectGames: z.number().nullable().exactOptional(),
    PitchingPlateAppearances: z.number().nullable().exactOptional(),
    PitchingPopOuts: z.number().nullable().exactOptional(),
    PitchingQualityStarts: z.number().nullable().exactOptional(),
    PitchingReachedOnError: z.number().nullable().exactOptional(),
    PitchingRuns: z.number().nullable().exactOptional(),
    PitchingSacrificeFlies: z.number().nullable().exactOptional(),
    PitchingSacrifices: z.number().nullable().exactOptional(),
    PitchingShutOuts: z.number().nullable().exactOptional(),
    PitchingSingles: z.number().nullable().exactOptional(),
    PitchingSluggingPercentage: z.number().nullable().exactOptional(),
    PitchingStrikeouts: z.number().nullable().exactOptional(),
    PitchingStrikeoutsPerNineInnings: z.number().nullable().exactOptional(),
    PitchingTotalBases: z.number().nullable().exactOptional(),
    PitchingTriples: z.number().nullable().exactOptional(),
    PitchingWalks: z.number().nullable().exactOptional(),
    PitchingWalksPerNineInnings: z.number().nullable().exactOptional(),
    PitchingWeightedOnBasePercentage: z.number().nullable().exactOptional(),
    PlateAppearances: z.number().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PopOuts: z.number().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    ReachedOnError: z.number().nullable().exactOptional(),
    Runs: z.number().nullable().exactOptional(),
    RunsBattedIn: z.number().nullable().exactOptional(),
    SacrificeFlies: z.number().nullable().exactOptional(),
    Sacrifices: z.number().nullable().exactOptional(),
    Saves: z.number().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    Singles: z.number().nullable().exactOptional(),
    SluggingPercentage: z.number().nullable().exactOptional(),
    Started: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    StolenBases: z.number().nullable().exactOptional(),
    Strikeouts: z.number().nullable().exactOptional(),
    SubstituteBattingOrder: z.int().nullable().exactOptional(),
    SubstituteBattingOrderSequence: z.int().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    TotalBases: z.number().nullable().exactOptional(),
    TotalOutsPitched: z.number().nullable().exactOptional(),
    Triples: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Walks: z.number().nullable().exactOptional(),
    WalksHitsPerInningsPitched: z.number().nullable().exactOptional(),
    WeightedOnBasePercentage: z.number().nullable().exactOptional(),
    Wins: z.number().nullable().exactOptional(),
    YahooPosition: z.string().nullable().exactOptional(),
    YahooSalary: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerGameProjection')

const PlayerSeasonProjectionSchema = z
  .object({
    AtBats: z.number().nullable().exactOptional(),
    AuctionValue: z.int().nullable().exactOptional(),
    AverageDraftPosition: z.number().nullable().exactOptional(),
    BallsInPlay: z.number().nullable().exactOptional(),
    BattingAverage: z.number().nullable().exactOptional(),
    BattingAverageOnBallsInPlay: z.number().nullable().exactOptional(),
    BattingOrder: z.int().nullable().exactOptional(),
    BattingOrderConfirmed: z.boolean().nullable().exactOptional(),
    CaughtStealing: z.number().nullable().exactOptional(),
    DoublePlays: z.number().nullable().exactOptional(),
    Doubles: z.number().nullable().exactOptional(),
    EarnedRunAverage: z.number().nullable().exactOptional(),
    Errors: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsBatting: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsPitching: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FieldingIndependentPitching: z.number().nullable().exactOptional(),
    FlyOuts: z.number().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    GrandSlams: z.number().nullable().exactOptional(),
    GroundIntoDoublePlay: z.number().nullable().exactOptional(),
    GroundOuts: z.number().nullable().exactOptional(),
    HitByPitch: z.number().nullable().exactOptional(),
    Hits: z.number().nullable().exactOptional(),
    HomeRuns: z.number().nullable().exactOptional(),
    InningsPitchedDecimal: z.number().nullable().exactOptional(),
    InningsPitchedFull: z.number().nullable().exactOptional(),
    InningsPitchedOuts: z.number().nullable().exactOptional(),
    IntentionalWalks: z.number().nullable().exactOptional(),
    IsolatedPower: z.number().nullable().exactOptional(),
    LeftOnBase: z.number().nullable().exactOptional(),
    LineOuts: z.number().nullable().exactOptional(),
    Losses: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OnBasePercentage: z.number().nullable().exactOptional(),
    OnBasePlusSlugging: z.number().nullable().exactOptional(),
    Outs: z.number().nullable().exactOptional(),
    PitchesSeen: z.number().nullable().exactOptional(),
    PitchesThrown: z.number().nullable().exactOptional(),
    PitchesThrownStrikes: z.number().nullable().exactOptional(),
    PitchingBallsInPlay: z.number().nullable().exactOptional(),
    PitchingBattingAverageAgainst: z.number().nullable().exactOptional(),
    PitchingBattingAverageOnBallsInPlay: z.number().nullable().exactOptional(),
    PitchingBlownSaves: z.number().nullable().exactOptional(),
    PitchingCatchersInterference: z.number().nullable().exactOptional(),
    PitchingCompleteGames: z.number().nullable().exactOptional(),
    PitchingDoublePlays: z.number().nullable().exactOptional(),
    PitchingDoubles: z.number().nullable().exactOptional(),
    PitchingEarnedRuns: z.number().nullable().exactOptional(),
    PitchingFlyOuts: z.number().nullable().exactOptional(),
    PitchingGrandSlams: z.number().nullable().exactOptional(),
    PitchingGroundIntoDoublePlay: z.number().nullable().exactOptional(),
    PitchingGroundOuts: z.number().nullable().exactOptional(),
    PitchingHitByPitch: z.number().nullable().exactOptional(),
    PitchingHits: z.number().nullable().exactOptional(),
    PitchingHolds: z.number().nullable().exactOptional(),
    PitchingHomeRuns: z.number().nullable().exactOptional(),
    PitchingInningStarted: z.int().nullable().exactOptional(),
    PitchingIntentionalWalks: z.number().nullable().exactOptional(),
    PitchingLineOuts: z.number().nullable().exactOptional(),
    PitchingNoHitters: z.number().nullable().exactOptional(),
    PitchingOnBasePercentage: z.number().nullable().exactOptional(),
    PitchingOnBasePlusSlugging: z.number().nullable().exactOptional(),
    PitchingPerfectGames: z.number().nullable().exactOptional(),
    PitchingPlateAppearances: z.number().nullable().exactOptional(),
    PitchingPopOuts: z.number().nullable().exactOptional(),
    PitchingQualityStarts: z.number().nullable().exactOptional(),
    PitchingReachedOnError: z.number().nullable().exactOptional(),
    PitchingRuns: z.number().nullable().exactOptional(),
    PitchingSacrificeFlies: z.number().nullable().exactOptional(),
    PitchingSacrifices: z.number().nullable().exactOptional(),
    PitchingShutOuts: z.number().nullable().exactOptional(),
    PitchingSingles: z.number().nullable().exactOptional(),
    PitchingSluggingPercentage: z.number().nullable().exactOptional(),
    PitchingStrikeouts: z.number().nullable().exactOptional(),
    PitchingStrikeoutsPerNineInnings: z.number().nullable().exactOptional(),
    PitchingTotalBases: z.number().nullable().exactOptional(),
    PitchingTriples: z.number().nullable().exactOptional(),
    PitchingWalks: z.number().nullable().exactOptional(),
    PitchingWalksPerNineInnings: z.number().nullable().exactOptional(),
    PitchingWeightedOnBasePercentage: z.number().nullable().exactOptional(),
    PlateAppearances: z.number().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PopOuts: z.number().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    ReachedOnError: z.number().nullable().exactOptional(),
    Runs: z.number().nullable().exactOptional(),
    RunsBattedIn: z.number().nullable().exactOptional(),
    SacrificeFlies: z.number().nullable().exactOptional(),
    Sacrifices: z.number().nullable().exactOptional(),
    Saves: z.number().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    Singles: z.number().nullable().exactOptional(),
    SluggingPercentage: z.number().nullable().exactOptional(),
    Started: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    StolenBases: z.number().nullable().exactOptional(),
    Strikeouts: z.number().nullable().exactOptional(),
    SubstituteBattingOrder: z.int().nullable().exactOptional(),
    SubstituteBattingOrderSequence: z.int().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    TotalBases: z.number().nullable().exactOptional(),
    TotalOutsPitched: z.number().nullable().exactOptional(),
    Triples: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Walks: z.number().nullable().exactOptional(),
    WalksHitsPerInningsPitched: z.number().nullable().exactOptional(),
    WeightedOnBasePercentage: z.number().nullable().exactOptional(),
    Wins: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerSeasonProjection')

const StartingLineupsSchema = z
  .object({
    AwayBattingLineup: z.array(LineupSchema).exactOptional(),
    AwayStartingPitcher: LineupSchema.exactOptional(),
    AwayTeam: z.string().nullable().exactOptional(),
    AwayTeamID: z.int().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    GameID: z.int().exactOptional(),
    HomeBattingLineup: z.array(LineupSchema).exactOptional(),
    HomeStartingPitcher: LineupSchema.exactOptional(),
    HomeTeam: z.string().nullable().exactOptional(),
    HomeTeamID: z.int().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Status: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartingLineups')

const TeamDepthChartSchema = z
  .object({
    DepthCharts: z.array(DepthChartSchema).exactOptional(),
    TeamID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamDepthChart')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getFormatDepthChartsRoute = createRoute({
  method: 'get',
  path: '/{format}/DepthCharts',
  summary: 'Depth Charts',
  description: 'Returns Depth Charts for all active MLB teams.',
  operationId: 'DepthCharts',
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
      content: { 'application/json': { schema: z.array(TeamDepthChartSchema) } },
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
              'The date of the slates.\n<br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.',
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

export const getFormatInjuredPlayersRoute = createRoute({
  method: 'get',
  path: '/{format}/InjuredPlayers',
  summary: 'Injured Players',
  description:
    'This endpoint provides all currently injured MLB players, along with injury details.',
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

export const getFormatPlayerGameProjectionStatsByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameProjectionStatsByDate/{date}',
  summary: 'Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)',
  operationId: 'ProjectedPlayerGameStatsByDateWInjuriesDfsSalaries',
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
              'The date of the game(s).\n<br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.',
            in: 'path',
            name: 'date',
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

export const getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}',
  summary: 'Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)',
  operationId: 'ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries',
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
              'The date of the game(s).\n<br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.',
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      playerid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Player ID.\nExample:<code>10000507</code>.',
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
      content: { 'application/json': { schema: z.array(PlayerGameProjectionSchema) } },
    },
  },
})

export const getFormatPlayerSeasonProjectionStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonProjectionStats/{season}',
  summary: 'Projected Player Season Stats (with ADP)',
  operationId: 'ProjectedPlayerSeasonStatsWithAdp',
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
            description: 'Year of the season.\n<br>Examples: <code>2017</code>, <code>2018</code>.',
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

export const getFormatStartingLineupsByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/StartingLineupsByDate/{date}',
  summary: 'Starting Lineups by Date',
  operationId: 'StartingLineupsByDate',
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
              'The date of the slates.\n<br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.',
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(StartingLineupsSchema) } },
    },
  },
})
