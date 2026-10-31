import { createRoute, z } from '@hono/zod-openapi'

const PenaltySchema = z
  .object({
    BenchPenaltyServedByPlayerID: z.int().nullable().exactOptional(),
    Description: z.string().nullable().exactOptional(),
    DrawnByPlayerID: z.int().nullable().exactOptional(),
    DrawnByTeamID: z.int().nullable().exactOptional(),
    IsBenchPenalty: z.boolean().nullable().exactOptional(),
    PenalizedPlayerID: z.int().nullable().exactOptional(),
    PenalizedTeamID: z.int().nullable().exactOptional(),
    PenaltyID: z.int().exactOptional(),
    PenaltyMinutes: z.int().nullable().exactOptional(),
    PeriodID: z.int().exactOptional(),
    Sequence: z.int().nullable().exactOptional(),
    TimeRemainingMinutes: z.int().nullable().exactOptional(),
    TimeRemainingSeconds: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Penalty')

const ScoringPlaySchema = z
  .object({
    AllowedByTeamID: z.int().nullable().exactOptional(),
    AssistedByPlayerID1: z.int().nullable().exactOptional(),
    AssistedByPlayerID2: z.int().nullable().exactOptional(),
    AwayTeamScore: z.int().nullable().exactOptional(),
    EmptyNet: z.boolean().nullable().exactOptional(),
    HomeTeamScore: z.int().nullable().exactOptional(),
    PeriodID: z.int().exactOptional(),
    PowerPlay: z.boolean().nullable().exactOptional(),
    ScoredByPlayerID: z.int().nullable().exactOptional(),
    ScoredByTeamID: z.int().nullable().exactOptional(),
    ScoringPlayID: z.int().exactOptional(),
    Sequence: z.int().nullable().exactOptional(),
    ShortHanded: z.boolean().nullable().exactOptional(),
    TimeRemainingMinutes: z.int().nullable().exactOptional(),
    TimeRemainingSeconds: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScoringPlay')

const PeriodSchema = z
  .object({
    AwayScore: z.int().nullable().exactOptional(),
    GameID: z.int().exactOptional(),
    HomeScore: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Penalties: z.array(PenaltySchema).exactOptional(),
    PeriodID: z.int().exactOptional(),
    ScoringPlays: z.array(ScoringPlaySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Period')

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
    AwayTeamID: z.int().exactOptional(),
    AwayTeamMoneyLine: z.int().nullable().exactOptional(),
    AwayTeamScore: z.int().nullable().exactOptional(),
    Channel: z.string().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    DateTimeUTC: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    GameEndDateTime: z.string().nullable().exactOptional(),
    GameID: z.int().exactOptional(),
    GlobalAwayTeamID: z.int().exactOptional(),
    GlobalGameID: z.int().exactOptional(),
    GlobalHomeTeamID: z.int().exactOptional(),
    HomeRotationNumber: z.int().nullable().exactOptional(),
    HomeTeam: z.string().nullable().exactOptional(),
    HomeTeamID: z.int().exactOptional(),
    HomeTeamMoneyLine: z.int().nullable().exactOptional(),
    HomeTeamScore: z.int().nullable().exactOptional(),
    IsClosed: z.boolean().nullable().exactOptional(),
    LastPlay: z.string().nullable().exactOptional(),
    NeutralVenue: z.boolean().nullable().exactOptional(),
    OverPayout: z.int().nullable().exactOptional(),
    OverUnder: z.number().nullable().exactOptional(),
    Period: z.string().nullable().exactOptional(),
    Periods: z.array(PeriodSchema).exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    PointSpreadAwayTeamMoneyLine: z.int().nullable().exactOptional(),
    PointSpreadHomeTeamMoneyLine: z.int().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    SeriesInfo: SeriesSchema.exactOptional(),
    StadiumID: z.int().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    TimeRemainingMinutes: z.int().nullable().exactOptional(),
    TimeRemainingSeconds: z.int().nullable().exactOptional(),
    UnderPayout: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Game')

const PlayerGameSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    BenchPenaltyMinutes: z.number().nullable().exactOptional(),
    Blocks: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DraftKingsPosition: z.string().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    EmptyNetGoals: z.number().nullable().exactOptional(),
    FaceoffsLost: z.number().nullable().exactOptional(),
    FaceoffsWon: z.number().nullable().exactOptional(),
    FanDuelPosition: z.string().nullable().exactOptional(),
    FanDuelSalary: z.int().nullable().exactOptional(),
    FantasyDataSalary: z.int().nullable().exactOptional(),
    FantasyDraftPosition: z.string().nullable().exactOptional(),
    FantasyDraftSalary: z.int().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    GameID: z.int().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    Giveaways: z.number().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalOpponentID: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Goals: z.number().nullable().exactOptional(),
    GoaltendingGoalsAgainst: z.number().nullable().exactOptional(),
    GoaltendingLosses: z.number().nullable().exactOptional(),
    GoaltendingMinutes: z.int().nullable().exactOptional(),
    GoaltendingOvertimeLosses: z.number().nullable().exactOptional(),
    GoaltendingSaves: z.number().nullable().exactOptional(),
    GoaltendingSeconds: z.int().nullable().exactOptional(),
    GoaltendingShotsAgainst: z.number().nullable().exactOptional(),
    GoaltendingShutouts: z.number().nullable().exactOptional(),
    GoaltendingWins: z.number().nullable().exactOptional(),
    HatTricks: z.number().nullable().exactOptional(),
    Hits: z.number().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    IsGameOver: z.boolean().exactOptional(),
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    OpponentPositionRank: z.int().nullable().exactOptional(),
    OpponentRank: z.int().nullable().exactOptional(),
    PenaltyMinutes: z.number().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlusMinus: z.number().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PowerPlayAssists: z.number().nullable().exactOptional(),
    PowerPlayGoals: z.number().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    Seconds: z.int().nullable().exactOptional(),
    Shifts: z.number().nullable().exactOptional(),
    ShootoutGoals: z.number().nullable().exactOptional(),
    ShortHandedAssists: z.number().nullable().exactOptional(),
    ShortHandedGoals: z.number().nullable().exactOptional(),
    ShotsOnGoal: z.number().nullable().exactOptional(),
    Started: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Takeaways: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    YahooPosition: z.string().nullable().exactOptional(),
    YahooSalary: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerGame')

const PlaySchema = z
  .object({
    AwayTeamScore: z.int().nullable().exactOptional(),
    Category: z.string().nullable().exactOptional(),
    ClockMinutes: z.int().nullable().exactOptional(),
    ClockSeconds: z.int().nullable().exactOptional(),
    Created: z.string().nullable().exactOptional(),
    Description: z.string().nullable().exactOptional(),
    FirstAssistedByPlayerID: z.int().nullable().exactOptional(),
    HomeTeamScore: z.int().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    OpposingPlayerID: z.int().nullable().exactOptional(),
    PeriodID: z.int().exactOptional(),
    PeriodName: z.string().nullable().exactOptional(),
    PlayID: z.int().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PowerPlayTeam: z.string().nullable().exactOptional(),
    PowerPlayTeamID: z.int().nullable().exactOptional(),
    SecondAssistedByPlayerID: z.int().nullable().exactOptional(),
    Sequence: z.int().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Type: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Play')

const TeamGameSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    BenchPenaltyMinutes: z.number().nullable().exactOptional(),
    Blocks: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    EmptyNetGoals: z.number().nullable().exactOptional(),
    FaceoffsLost: z.number().nullable().exactOptional(),
    FaceoffsWon: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    GameID: z.int().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    Giveaways: z.number().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalOpponentID: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Goals: z.number().nullable().exactOptional(),
    GoaltendingGoalsAgainst: z.number().nullable().exactOptional(),
    GoaltendingLosses: z.number().nullable().exactOptional(),
    GoaltendingMinutes: z.int().nullable().exactOptional(),
    GoaltendingOvertimeLosses: z.number().nullable().exactOptional(),
    GoaltendingSaves: z.number().nullable().exactOptional(),
    GoaltendingSeconds: z.int().nullable().exactOptional(),
    GoaltendingShotsAgainst: z.number().nullable().exactOptional(),
    GoaltendingShutouts: z.number().nullable().exactOptional(),
    GoaltendingWins: z.number().nullable().exactOptional(),
    HatTricks: z.number().nullable().exactOptional(),
    Hits: z.number().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    IsGameOver: z.boolean().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    OvertimeLosses: z.int().nullable().exactOptional(),
    PenaltyMinutes: z.number().nullable().exactOptional(),
    PlusMinus: z.number().nullable().exactOptional(),
    PowerPlayAssists: z.number().nullable().exactOptional(),
    PowerPlayGoals: z.number().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    Seconds: z.int().nullable().exactOptional(),
    Shifts: z.number().nullable().exactOptional(),
    ShootoutGoals: z.number().nullable().exactOptional(),
    ShortHandedAssists: z.number().nullable().exactOptional(),
    ShortHandedGoals: z.number().nullable().exactOptional(),
    ShotsOnGoal: z.number().nullable().exactOptional(),
    Started: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Takeaways: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Wins: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamGame')

const BoxScoreSchema = z
  .object({
    Game: GameSchema.exactOptional(),
    Periods: z.array(PeriodSchema).exactOptional(),
    PlayerGames: z.array(PlayerGameSchema).exactOptional(),
    ShootoutPlays: z.array(PlaySchema).exactOptional(),
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
    Content: z.string().nullable().exactOptional(),
    NewsID: z.int().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Source: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    TermsOfUse: z.string().nullable().exactOptional(),
    Title: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('News')

const OpponentSeasonSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    BenchPenaltyMinutes: z.number().nullable().exactOptional(),
    Blocks: z.number().nullable().exactOptional(),
    EmptyNetGoals: z.number().nullable().exactOptional(),
    FaceoffsLost: z.number().nullable().exactOptional(),
    FaceoffsWon: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    Giveaways: z.number().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Goals: z.number().nullable().exactOptional(),
    GoaltendingGoalsAgainst: z.number().nullable().exactOptional(),
    GoaltendingLosses: z.number().nullable().exactOptional(),
    GoaltendingMinutes: z.int().nullable().exactOptional(),
    GoaltendingOvertimeLosses: z.number().nullable().exactOptional(),
    GoaltendingSaves: z.number().nullable().exactOptional(),
    GoaltendingSeconds: z.int().nullable().exactOptional(),
    GoaltendingShotsAgainst: z.number().nullable().exactOptional(),
    GoaltendingShutouts: z.number().nullable().exactOptional(),
    GoaltendingWins: z.number().nullable().exactOptional(),
    HatTricks: z.number().nullable().exactOptional(),
    Hits: z.number().nullable().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OpponentPosition: z.string().nullable().exactOptional(),
    OvertimeLosses: z.int().nullable().exactOptional(),
    PenaltyMinutes: z.number().nullable().exactOptional(),
    PlusMinus: z.number().nullable().exactOptional(),
    PowerPlayAssists: z.number().nullable().exactOptional(),
    PowerPlayGoals: z.number().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    Seconds: z.int().nullable().exactOptional(),
    Shifts: z.number().nullable().exactOptional(),
    ShootoutGoals: z.number().nullable().exactOptional(),
    ShortHandedAssists: z.number().nullable().exactOptional(),
    ShortHandedGoals: z.number().nullable().exactOptional(),
    ShotsOnGoal: z.number().nullable().exactOptional(),
    Started: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Takeaways: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Wins: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OpponentSeason')

const PlayerSchema = z
  .object({
    BirthCity: z.string().nullable().exactOptional(),
    BirthDate: z.string().nullable().exactOptional(),
    BirthState: z.string().nullable().exactOptional(),
    Catches: z.string().nullable().exactOptional(),
    DepthChartOrder: z.int().nullable().exactOptional(),
    DepthChartPosition: z.string().nullable().exactOptional(),
    DraftKingsName: z.string().nullable().exactOptional(),
    DraftKingsPlayerID: z.int().nullable().exactOptional(),
    FanDuelName: z.string().nullable().exactOptional(),
    FanDuelPlayerID: z.int().nullable().exactOptional(),
    FantasyAlarmPlayerID: z.int().nullable().exactOptional(),
    FantasyDraftName: z.string().nullable().exactOptional(),
    FantasyDraftPlayerID: z.int().nullable().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Height: z.int().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    Jersey: z.int().nullable().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    PhotoUrl: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    RotoWirePlayerID: z.int().nullable().exactOptional(),
    RotoworldPlayerID: z.int().nullable().exactOptional(),
    Shoots: z.string().nullable().exactOptional(),
    SportRadarPlayerID: z.string().nullable().exactOptional(),
    SportsDirectPlayerID: z.int().nullable().exactOptional(),
    StatsPlayerID: z.int().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
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

const PlayerLineSchema = z
  .object({
    LineNumber: z.int().exactOptional(),
    LineType: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    Shoots: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerLine')

const PlayerSeasonSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    BenchPenaltyMinutes: z.number().nullable().exactOptional(),
    Blocks: z.number().nullable().exactOptional(),
    EmptyNetGoals: z.number().nullable().exactOptional(),
    FaceoffsLost: z.number().nullable().exactOptional(),
    FaceoffsWon: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    Giveaways: z.number().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Goals: z.number().nullable().exactOptional(),
    GoaltendingGoalsAgainst: z.number().nullable().exactOptional(),
    GoaltendingLosses: z.number().nullable().exactOptional(),
    GoaltendingMinutes: z.int().nullable().exactOptional(),
    GoaltendingOvertimeLosses: z.number().nullable().exactOptional(),
    GoaltendingSaves: z.number().nullable().exactOptional(),
    GoaltendingSeconds: z.int().nullable().exactOptional(),
    GoaltendingShotsAgainst: z.number().nullable().exactOptional(),
    GoaltendingShutouts: z.number().nullable().exactOptional(),
    GoaltendingWins: z.number().nullable().exactOptional(),
    HatTricks: z.number().nullable().exactOptional(),
    Hits: z.number().nullable().exactOptional(),
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PenaltyMinutes: z.number().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlusMinus: z.number().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PowerPlayAssists: z.number().nullable().exactOptional(),
    PowerPlayGoals: z.number().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    Seconds: z.int().nullable().exactOptional(),
    Shifts: z.number().nullable().exactOptional(),
    ShootoutGoals: z.number().nullable().exactOptional(),
    ShortHandedAssists: z.number().nullable().exactOptional(),
    ShortHandedGoals: z.number().nullable().exactOptional(),
    ShotsOnGoal: z.number().nullable().exactOptional(),
    Started: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Takeaways: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerSeason')

const SeasonSchema = z
  .object({
    ApiSeason: z.string().nullable().exactOptional(),
    Description: z.string().nullable().exactOptional(),
    EndYear: z.int().exactOptional(),
    PostSeasonStartDate: z.string().nullable().exactOptional(),
    RegularSeasonStartDate: z.string().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.string().nullable().exactOptional(),
    StartYear: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Season')

const StadiumSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    Address: z.string().nullable().exactOptional(),
    Capacity: z.int().nullable().exactOptional(),
    City: z.string().nullable().exactOptional(),
    Country: z.string().nullable().exactOptional(),
    GeoLat: z.number().nullable().exactOptional(),
    GeoLong: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    StadiumID: z.int().exactOptional(),
    State: z.string().nullable().exactOptional(),
    Zip: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Stadium')

const StandingSchema = z
  .object({
    City: z.string().nullable().exactOptional(),
    Conference: z.string().nullable().exactOptional(),
    ConferenceLosses: z.int().nullable().exactOptional(),
    ConferenceRank: z.int().nullable().exactOptional(),
    ConferenceWins: z.int().nullable().exactOptional(),
    Division: z.string().nullable().exactOptional(),
    DivisionLosses: z.int().nullable().exactOptional(),
    DivisionRank: z.int().nullable().exactOptional(),
    DivisionWins: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OvertimeLosses: z.int().nullable().exactOptional(),
    Percentage: z.number().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    ShutoutWins: z.int().nullable().exactOptional(),
    TeamID: z.int().exactOptional(),
    Wins: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Standing')

const TeamSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    City: z.string().nullable().exactOptional(),
    Conference: z.string().nullable().exactOptional(),
    Division: z.string().nullable().exactOptional(),
    GlobalTeamID: z.int().exactOptional(),
    Key: z.string().nullable().exactOptional(),
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

const TeamLineSchema = z
  .object({
    EvenStrengthLines: z.array(PlayerLineSchema).exactOptional(),
    FullName: z.string().nullable().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    PowerPlayLines: z.array(PlayerLineSchema).exactOptional(),
    TeamID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamLine')

const TeamSeasonSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    BenchPenaltyMinutes: z.number().nullable().exactOptional(),
    Blocks: z.number().nullable().exactOptional(),
    EmptyNetGoals: z.number().nullable().exactOptional(),
    FaceoffsLost: z.number().nullable().exactOptional(),
    FaceoffsWon: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    Giveaways: z.number().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Goals: z.number().nullable().exactOptional(),
    GoaltendingGoalsAgainst: z.number().nullable().exactOptional(),
    GoaltendingLosses: z.number().nullable().exactOptional(),
    GoaltendingMinutes: z.int().nullable().exactOptional(),
    GoaltendingOvertimeLosses: z.number().nullable().exactOptional(),
    GoaltendingSaves: z.number().nullable().exactOptional(),
    GoaltendingSeconds: z.int().nullable().exactOptional(),
    GoaltendingShotsAgainst: z.number().nullable().exactOptional(),
    GoaltendingShutouts: z.number().nullable().exactOptional(),
    GoaltendingWins: z.number().nullable().exactOptional(),
    HatTricks: z.number().nullable().exactOptional(),
    Hits: z.number().nullable().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OpponentPosition: z.string().nullable().exactOptional(),
    OpponentStat: OpponentSeasonSchema.exactOptional(),
    OvertimeLosses: z.int().nullable().exactOptional(),
    PenaltyMinutes: z.number().nullable().exactOptional(),
    PlusMinus: z.number().nullable().exactOptional(),
    PowerPlayAssists: z.number().nullable().exactOptional(),
    PowerPlayGoals: z.number().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    Seconds: z.int().nullable().exactOptional(),
    Shifts: z.number().nullable().exactOptional(),
    ShootoutGoals: z.number().nullable().exactOptional(),
    ShortHandedAssists: z.number().nullable().exactOptional(),
    ShortHandedGoals: z.number().nullable().exactOptional(),
    ShotsOnGoal: z.number().nullable().exactOptional(),
    Started: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Takeaways: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Wins: z.int().nullable().exactOptional(),
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
              'The GameID of an NHL game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>',
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
              'The date of the game(s).\n <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.\n ',
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
              'The date of the game(s).\n <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.\n ',
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
              'Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:\n <code>1</code> or <code>2</code>.\n ',
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
              'The date of the game(s).\n<br>Examples: <code>2017-DEC-01</code>, <code>2018-FEB-15</code>.',
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
  summary: 'Player Details by Free Agent',
  operationId: 'PlayerDetailsByFreeAgent',
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
              'The date of the game(s).\n <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.\n ',
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

export const getFormatLinesBySeasonSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/LinesBySeason/{season}',
  summary: 'Line Combinations by Season',
  operationId: 'LineCombinationsBySeason',
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
              'Year of the season.\n <br>Examples: <code>2016</code>, <code>2017</code>.\n ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(TeamLineSchema) } } },
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
              'The date of the news.\n <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.\n ',
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
            description: 'Unique FantasyData Player ID.\n Example:<code>10000507</code>.\n ',
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
            description: 'Unique FantasyData Player ID.\nExample:<code>30000007</code>.',
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
              'The date of the game(s).\n <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.\n ',
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
              'The date of the game(s).\n\n<br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.\n ',
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
            description: 'Unique FantasyData Player ID.\nExample:<code>30000378</code>.',
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
        .enum(['XML', 'JSON'])
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['XML', 'JSON'], type: 'string' },
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
            description: 'Unique FantasyData Player ID.\nExample:<code>30000651</code>.',
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
            description:
              'Year of the season.\n <br>Examples: <code>2016</code>, <code>2017</code>.\n ',
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
            description:
              'Year of the season.\n <br>Examples: <code>2016</code>, <code>2017</code>.\n ',
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
            description: 'Unique FantasyData Player ID.\nExample:<code>30000378</code>.',
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
              'Year of the season.\n <br>Examples: <code>2016</code>, <code>2017</code>.\n ',
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
              'The abbreviation of the requested team.\n <br>Examples: <code>SF</code>, <code>NYY</code>.\n ',
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
              'The abbreviation of the requested team.\n <br>Examples: <code>SF</code>, <code>NYY</code>.\n ',
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
            description:
              'Year of the season.\n <br>Examples: <code>2016</code>, <code>2017</code>.\n ',
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
              'The date of the game(s).\n <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.\n ',
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
        .enum(['XML', 'JSON'])
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['XML', 'JSON'], type: 'string' },
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
            description: 'Unique ID of team.  Example <code> 8 </code>',
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
            description:
              'Year of the season.\n <br>Examples: <code>2016</code>, <code>2017</code>.\n ',
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

export const getFormatTeamStatsAllowedByPositionSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/TeamStatsAllowedByPosition/{season}',
  summary: 'Team Stats Allowed by Position',
  operationId: 'TeamStatsAllowedByPosition',
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
              'Year of the season.\n <br>Examples: <code>2016</code>, <code>2017</code>.\n ',
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
