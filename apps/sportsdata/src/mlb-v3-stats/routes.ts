import { createRoute, z } from '@hono/zod-openapi'

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

const PlayerGameSchema = z
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
  .openapi('PlayerGame')

const TeamGameSchema = z
  .object({
    AtBats: z.number().nullable().exactOptional(),
    BallsInPlay: z.number().nullable().exactOptional(),
    BattingAverage: z.number().nullable().exactOptional(),
    BattingAverageOnBallsInPlay: z.number().nullable().exactOptional(),
    BattingOrderConfirmed: z.boolean().nullable().exactOptional(),
    CaughtStealing: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
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
    PopOuts: z.number().nullable().exactOptional(),
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
  .openapi('TeamGame')

const BoxScoreSchema = z
  .object({
    Game: GameSchema.exactOptional(),
    Innings: z.array(InningSchema).exactOptional(),
    PlayerGames: z.array(PlayerGameSchema).exactOptional(),
    TeamGames: z.array(TeamGameSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BoxScore')

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

const NewsSchema = z
  .object({
    Author: z.string().nullable().exactOptional(),
    Categories: z.string().nullable().exactOptional(),
    Content: z.string().nullable().exactOptional(),
    NewsID: z.int().exactOptional(),
    OriginalSource: z.string().nullable().exactOptional(),
    OriginalSourceUrl: z.string().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlayerID2: z.int().nullable().exactOptional(),
    Source: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    Team2: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    TeamID2: z.int().nullable().exactOptional(),
    TermsOfUse: z.string().nullable().exactOptional(),
    TimeAgo: z.string().nullable().exactOptional(),
    Title: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('News')

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

const PlayerSeasonSchema = z
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
  .openapi('PlayerSeason')

const SeasonSchema = z
  .object({
    ApiSeason: z.string().nullable().exactOptional(),
    PostSeasonStartDate: z.string().nullable().exactOptional(),
    RegularSeasonStartDate: z.string().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Season')

const StadiumSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    Altitude: z.int().nullable().exactOptional(),
    Capacity: z.int().nullable().exactOptional(),
    CenterField: z.int().nullable().exactOptional(),
    City: z.string().nullable().exactOptional(),
    Country: z.string().nullable().exactOptional(),
    GeoLat: z.number().nullable().exactOptional(),
    GeoLong: z.number().nullable().exactOptional(),
    HomePlateDirection: z.int().nullable().exactOptional(),
    LeftCenterField: z.int().nullable().exactOptional(),
    LeftField: z.int().nullable().exactOptional(),
    MidLeftCenterField: z.int().nullable().exactOptional(),
    MidLeftField: z.int().nullable().exactOptional(),
    MidRightCenterField: z.int().nullable().exactOptional(),
    MidRightField: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    RightCenterField: z.int().nullable().exactOptional(),
    RightField: z.int().nullable().exactOptional(),
    StadiumID: z.int().exactOptional(),
    State: z.string().nullable().exactOptional(),
    Surface: z.string().nullable().exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Stadium')

const StandingSchema = z
  .object({
    AwayLosses: z.int().nullable().exactOptional(),
    AwayWins: z.int().nullable().exactOptional(),
    City: z.string().nullable().exactOptional(),
    DayLosses: z.int().nullable().exactOptional(),
    DayWins: z.int().nullable().exactOptional(),
    Division: z.string().nullable().exactOptional(),
    DivisionLosses: z.int().nullable().exactOptional(),
    DivisionRank: z.int().nullable().exactOptional(),
    DivisionWins: z.int().nullable().exactOptional(),
    GamesBehind: z.number().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    HomeLosses: z.int().nullable().exactOptional(),
    HomeWins: z.int().nullable().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    LastTenGamesLosses: z.int().nullable().exactOptional(),
    LastTenGamesWins: z.int().nullable().exactOptional(),
    League: z.string().nullable().exactOptional(),
    LeagueRank: z.int().nullable().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    NightLosses: z.int().nullable().exactOptional(),
    NightWins: z.int().nullable().exactOptional(),
    Percentage: z.number().nullable().exactOptional(),
    RunsAgainst: z.int().nullable().exactOptional(),
    RunsScored: z.int().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Streak: z.string().nullable().exactOptional(),
    TeamID: z.int().exactOptional(),
    WildCardGamesBehind: z.number().nullable().exactOptional(),
    WildCardRank: z.int().nullable().exactOptional(),
    Wins: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Standing')

const TeamSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    City: z.string().nullable().exactOptional(),
    Division: z.string().nullable().exactOptional(),
    GlobalTeamID: z.int().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    League: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PrimaryColor: z.string().nullable().exactOptional(),
    QuaternaryColor: z.string().nullable().exactOptional(),
    SecondaryColor: z.string().nullable().exactOptional(),
    StadiumID: z.int().nullable().exactOptional(),
    TeamID: z.int().exactOptional(),
    TertiaryColor: z.string().nullable().exactOptional(),
    WikipediaLogoUrl: z.string().nullable().exactOptional(),
    WikipediaWordMarkUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Team')

const TeamSeasonSchema = z
  .object({
    AtBats: z.number().nullable().exactOptional(),
    BallsInPlay: z.number().nullable().exactOptional(),
    BattingAverage: z.number().nullable().exactOptional(),
    BattingAverageOnBallsInPlay: z.number().nullable().exactOptional(),
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
    PopOuts: z.number().nullable().exactOptional(),
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
  .openapi('TeamSeason')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getFormatAllTeamsRoute = createRoute({
  method: 'get',
  path: '/{format}/AllTeams',
  summary: 'Teams (All)',
  operationId: 'TeamsAll',
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
    200: { description: '', content: { 'application/json': { schema: z.array(TeamSchema) } } },
  },
})

export const getFormatAreAnyGamesInProgressRoute = createRoute({
  method: 'get',
  path: '/{format}/AreAnyGamesInProgress',
  summary: 'Are Games In Progress',
  description:
    'Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.',
  operationId: 'AreGamesInProgress',
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
  responses: { 200: { description: '', content: { 'application/json': { schema: z.boolean() } } } },
})

export const getFormatBoxScoreGameidRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScore/{gameid}',
  summary: 'Box Score',
  operationId: 'BoxScore',
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
      gameid: z
        .string()
        .openapi({
          param: {
            description:
              'The GameID of an MLB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>',
            in: 'path',
            name: 'gameid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: BoxScoreSchema } } },
  },
})

export const getFormatBoxScoresDateRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScores/{date}',
  summary: 'Box Scores by Date',
  operationId: 'BoxScoresByDate',
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
    200: { description: '', content: { 'application/json': { schema: z.array(BoxScoreSchema) } } },
  },
})

export const getFormatBoxScoresDeltaDateMinutesRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScoresDelta/{date}/{minutes}',
  summary: 'Box Scores by Date Delta',
  operationId: 'BoxScoresByDateDelta',
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
      minutes: z
        .string()
        .openapi({
          param: {
            description:
              'Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back. Valid entries are:\n<code>1</code>, <code>2</code> ... <code>all</code>.',
            in: 'path',
            name: 'minutes',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(BoxScoreSchema) } } },
  },
})

export const getFormatCurrentSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/CurrentSeason',
  summary: 'Current Season',
  operationId: 'CurrentSeason',
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
    200: { description: '', content: { 'application/json': { schema: SeasonSchema } } },
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

export const getFormatFreeAgentsRoute = createRoute({
  method: 'get',
  path: '/{format}/FreeAgents',
  summary: 'Player Details by Free Agents',
  operationId: 'PlayerDetailsByFreeAgents',
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

export const getFormatGamesSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/Games/{season}',
  summary: 'Schedules',
  operationId: 'Schedules',
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
              'Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(GameSchema) } } },
  },
})

export const getFormatGamesByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/GamesByDate/{date}',
  summary: 'Games by Date',
  operationId: 'GamesByDate',
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
    200: { description: '', content: { 'application/json': { schema: z.array(GameSchema) } } },
  },
})

export const getFormatHitterVsPitcherHitteridPitcheridRoute = createRoute({
  method: 'get',
  path: '/{format}/HitterVsPitcher/{hitterid}/{pitcherid}',
  summary: 'Batter vs. Pitcher Stats',
  operationId: 'BatterVsPitcherStats',
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
      hitterid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Player ID.\nExample:<code>10000031</code>.',
            in: 'path',
            name: 'hitterid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      pitcherid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Player ID.\nExample:<code>10000618</code>.',
            in: 'path',
            name: 'pitcherid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerSeasonSchema) } },
    },
  },
})

export const getFormatNewsRoute = createRoute({
  method: 'get',
  path: '/{format}/News',
  summary: 'News',
  operationId: 'News',
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
    200: { description: '', content: { 'application/json': { schema: z.array(NewsSchema) } } },
  },
})

export const getFormatNewsByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/NewsByDate/{date}',
  summary: 'News by Date',
  operationId: 'NewsByDate',
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
              'The date of the news.\n<br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.',
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(NewsSchema) } } },
  },
})

export const getFormatNewsByPlayerIDPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/NewsByPlayerID/{playerid}',
  summary: 'News by Player',
  operationId: 'NewsByPlayer',
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
    200: { description: '', content: { 'application/json': { schema: z.array(NewsSchema) } } },
  },
})

export const getFormatPlayerPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/Player/{playerid}',
  summary: 'Player Details by Player',
  operationId: 'PlayerDetailsByPlayer',
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
    200: { description: '', content: { 'application/json': { schema: PlayerSchema } } },
  },
})

export const getFormatPlayerGameStatsByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameStatsByDate/{date}',
  summary: 'Player Game Stats by Date',
  operationId: 'PlayerGameStatsByDate',
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
      content: { 'application/json': { schema: z.array(PlayerGameSchema) } },
    },
  },
})

export const getFormatPlayerGameStatsByPlayerDatePlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameStatsByPlayer/{date}/{playerid}',
  summary: 'Player Game Stats by Player',
  operationId: 'PlayerGameStatsByPlayer',
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
    200: { description: '', content: { 'application/json': { schema: PlayerGameSchema } } },
  },
})

export const getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}',
  summary: 'Player Game Logs By Season',
  operationId: 'PlayerGameLogsBySeason',
  request: {
    params: z.object({
      format: z
        .enum(['JSON', 'XML'])
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['JSON', 'XML'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Season to get games from. Example <code>2019POST</code>, <code>2020</code>',
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
            description: 'Unique FantasyData Player ID.\nExample:<code>10001365</code>.',
            in: 'path',
            name: 'playerid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      numberofgames: z
        .string()
        .openapi({
          param: {
            description:
              'How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>',
            in: 'path',
            name: 'numberofgames',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerGameSchema) } },
    },
  },
})

export const getFormatPlayerSeasonAwayStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonAwayStats/{season}',
  summary: 'Player Season Away Stats',
  operationId: 'PlayerSeasonAwayStats',
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
      content: { 'application/json': { schema: z.array(PlayerSeasonSchema) } },
    },
  },
})

export const getFormatPlayerSeasonHomeStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonHomeStats/{season}',
  summary: 'Player Season Home Stats',
  operationId: 'PlayerSeasonHomeStats',
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
      content: { 'application/json': { schema: z.array(PlayerSeasonSchema) } },
    },
  },
})

export const getFormatPlayerSeasonSplitStatsSeasonSplitRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonSplitStats/{season}/{split}',
  summary: 'Player Season Split Stats',
  operationId: 'PlayerSeasonSplitStats',
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
      split: z
        .enum(['L', 'R', 'S'])
        .default('L')
        .openapi({
          param: {
            description:
              'The desired split of stats. Currently, we support vs. Left/Right/Switch handed pitchers/hitters. Possible values are: <code>L</code>, <code>R</code> and <code>S</code>',
            in: 'path',
            name: 'split',
            required: true,
            schema: { default: 'L', enum: ['L', 'R', 'S'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerSeasonSchema) } },
    },
  },
})

export const getFormatPlayerSeasonStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonStats/{season}',
  summary: 'Player Season Stats',
  operationId: 'PlayerSeasonStats',
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
      content: { 'application/json': { schema: z.array(PlayerSeasonSchema) } },
    },
  },
})

export const getFormatPlayerSeasonStatsByPlayerSeasonPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonStatsByPlayer/{season}/{playerid}',
  summary: 'Player Season Stats By Player',
  operationId: 'PlayerSeasonStatsByPlayer',
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
    200: { description: '', content: { 'application/json': { schema: PlayerSeasonSchema } } },
  },
})

export const getFormatPlayerSeasonStatsByTeamSeasonTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonStatsByTeam/{season}/{team}',
  summary: 'Player Season Stats by Team',
  operationId: 'PlayerSeasonStatsByTeam',
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
              'Year of the season.\n<br>Examples: <code>2017</code>, <code>2018</code>.\n',
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
            description:
              'The abbreviation of the requested team.\n<br>Examples: <code>SF</code>, <code>NYY</code>.',
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
      content: { 'application/json': { schema: z.array(PlayerSeasonSchema) } },
    },
  },
})

export const getFormatPlayerSeasonStatsSplitByTeamSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonStatsSplitByTeam/{season}',
  summary: 'Player Season Stats Split By Team',
  operationId: 'PlayerSeasonStatsSplitByTeam',
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
      content: { 'application/json': { schema: z.array(PlayerSeasonSchema) } },
    },
  },
})

export const getFormatPlayersRoute = createRoute({
  method: 'get',
  path: '/{format}/Players',
  summary: 'Player Details by Active',
  operationId: 'PlayerDetailsByActive',
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

export const getFormatPlayersTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/Players/{team}',
  summary: 'Players by Team',
  operationId: 'PlayersByTeam',
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
      team: z
        .string()
        .openapi({
          param: {
            description:
              'The abbreviation of the requested team.\n<br>Examples: <code>SF</code>, <code>NYY</code>.',
            in: 'path',
            name: 'team',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(PlayerSchema) } } },
  },
})

export const getFormatStadiumsRoute = createRoute({
  method: 'get',
  path: '/{format}/Stadiums',
  summary: 'Stadiums',
  operationId: 'Stadiums',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(StadiumSchema) } } },
  },
})

export const getFormatStandingsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/Standings/{season}',
  summary: 'Standings',
  operationId: 'Standings',
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
    200: { description: '', content: { 'application/json': { schema: z.array(StandingSchema) } } },
  },
})

export const getFormatTeamGameStatsByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/TeamGameStatsByDate/{date}',
  summary: 'Team Game Stats by Date',
  operationId: 'TeamGameStatsByDate',
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
    200: { description: '', content: { 'application/json': { schema: z.array(TeamGameSchema) } } },
  },
})

export const getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute = createRoute({
  method: 'get',
  path: '/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}',
  summary: 'Team Game Logs By Season',
  description: 'Game by game log of total team statistics.',
  operationId: 'TeamGameLogsBySeason',
  request: {
    params: z.object({
      format: z
        .enum(['JSON', 'XML'])
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['JSON', 'XML'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Season to get games from. Example <code>2019POST</code>, <code>2020</code>',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      teamid: z
        .string()
        .openapi({
          param: {
            description: 'Unique ID of team.  Example <code> 12 </code>',
            in: 'path',
            name: 'teamid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      numberofgames: z
        .string()
        .openapi({
          param: {
            description:
              'How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>',
            in: 'path',
            name: 'numberofgames',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(TeamGameSchema) } } },
  },
})

export const getFormatTeamHittersVsPitcherGameidTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/TeamHittersVsPitcher/{gameid}/{team}',
  summary: 'Team Hitting vs. Starting Pitcher',
  operationId: 'TeamHittingVsStartingPitcher',
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
      gameid: z
        .string()
        .openapi({
          param: {
            description:
              'The GameID of an MLB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>',
            in: 'path',
            name: 'gameid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .openapi({
          param: {
            description:
              'The abbreviation of the requested team.\n<br>Examples: <code>SF</code>, <code>NYY</code>.',
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
      content: { 'application/json': { schema: z.array(PlayerSeasonSchema) } },
    },
  },
})

export const getFormatTeamSeasonStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/TeamSeasonStats/{season}',
  summary: 'Team Season Stats',
  operationId: 'TeamSeasonStats',
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
      content: { 'application/json': { schema: z.array(TeamSeasonSchema) } },
    },
  },
})

export const getFormatTeamsRoute = createRoute({
  method: 'get',
  path: '/{format}/teams',
  summary: 'Teams (Active)',
  operationId: 'TeamsActive',
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
    200: { description: '', content: { 'application/json': { schema: z.array(TeamSchema) } } },
  },
})
