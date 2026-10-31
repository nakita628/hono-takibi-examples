import { createRoute, z } from '@hono/zod-openapi'

const PeriodSchema = z
  .object({
    AwayScore: z.int().nullable().exactOptional(),
    GameID: z.int().exactOptional(),
    HomeScore: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    PeriodID: z.int().exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Period')

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

const GameSchema = z
  .object({
    Attendance: z.int().nullable().exactOptional(),
    AwayPointSpreadPayout: z.int().nullable().exactOptional(),
    AwayRotationNumber: z.int().nullable().exactOptional(),
    AwayTeam: z.string().nullable().exactOptional(),
    AwayTeamID: z.int().nullable().exactOptional(),
    AwayTeamMoneyLine: z.int().nullable().exactOptional(),
    AwayTeamPreviousGameID: z.int().nullable().exactOptional(),
    AwayTeamPreviousGlobalGameID: z.int().nullable().exactOptional(),
    AwayTeamScore: z.int().nullable().exactOptional(),
    AwayTeamSeed: z.int().nullable().exactOptional(),
    BottomTeamPreviousGameId: z.int().nullable().exactOptional(),
    Bracket: z.string().nullable().exactOptional(),
    Channel: z.string().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    DateTimeUTC: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    GameEndDateTime: z.string().nullable().exactOptional(),
    GameID: z.int().exactOptional(),
    GlobalAwayTeamID: z.int().nullable().exactOptional(),
    GlobalGameID: z.int().exactOptional(),
    GlobalHomeTeamID: z.int().nullable().exactOptional(),
    HomePointSpreadPayout: z.int().nullable().exactOptional(),
    HomeRotationNumber: z.int().nullable().exactOptional(),
    HomeTeam: z.string().nullable().exactOptional(),
    HomeTeamID: z.int().nullable().exactOptional(),
    HomeTeamMoneyLine: z.int().nullable().exactOptional(),
    HomeTeamPreviousGameID: z.int().nullable().exactOptional(),
    HomeTeamPreviousGlobalGameID: z.int().nullable().exactOptional(),
    HomeTeamScore: z.int().nullable().exactOptional(),
    HomeTeamSeed: z.int().nullable().exactOptional(),
    IsClosed: z.boolean().exactOptional(),
    NeutralVenue: z.boolean().nullable().exactOptional(),
    OverPayout: z.int().nullable().exactOptional(),
    OverUnder: z.number().nullable().exactOptional(),
    Period: z.string().nullable().exactOptional(),
    Periods: z.array(PeriodSchema).exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    Round: z.int().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Stadium: StadiumSchema.exactOptional(),
    Status: z.string().nullable().exactOptional(),
    TimeRemainingMinutes: z.int().nullable().exactOptional(),
    TimeRemainingSeconds: z.int().nullable().exactOptional(),
    TopTeamPreviousGameId: z.int().nullable().exactOptional(),
    TournamentDisplayOrder: z.int().nullable().exactOptional(),
    TournamentDisplayOrderForHomeTeam: z.string().nullable().exactOptional(),
    TournamentID: z.int().nullable().exactOptional(),
    UnderPayout: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Game')

const PlayerGameSchema = z
  .object({
    Assists: z.int().nullable().exactOptional(),
    AssistsPercentage: z.number().nullable().exactOptional(),
    BlockedShots: z.int().nullable().exactOptional(),
    BlocksPercentage: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DefensiveRebounds: z.int().nullable().exactOptional(),
    DefensiveReboundsPercentage: z.number().nullable().exactOptional(),
    DraftKingsPosition: z.string().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    EffectiveFieldGoalsPercentage: z.number().nullable().exactOptional(),
    FanDuelPosition: z.string().nullable().exactOptional(),
    FanDuelSalary: z.int().nullable().exactOptional(),
    FantasyDataSalary: z.int().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.int().nullable().exactOptional(),
    FieldGoalsMade: z.int().nullable().exactOptional(),
    FieldGoalsPercentage: z.number().nullable().exactOptional(),
    FreeThrowsAttempted: z.int().nullable().exactOptional(),
    FreeThrowsMade: z.int().nullable().exactOptional(),
    FreeThrowsPercentage: z.number().nullable().exactOptional(),
    GameID: z.int().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalOpponentID: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    IsGameOver: z.boolean().exactOptional(),
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OffensiveRebounds: z.int().nullable().exactOptional(),
    OffensiveReboundsPercentage: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    OpponentPositionRank: z.int().nullable().exactOptional(),
    OpponentRank: z.int().nullable().exactOptional(),
    PersonalFouls: z.int().nullable().exactOptional(),
    PlayerEfficiencyRating: z.number().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Points: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    Rebounds: z.int().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Steals: z.int().nullable().exactOptional(),
    StealsPercentage: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    ThreePointersAttempted: z.int().nullable().exactOptional(),
    ThreePointersMade: z.int().nullable().exactOptional(),
    ThreePointersPercentage: z.number().nullable().exactOptional(),
    TotalReboundsPercentage: z.number().nullable().exactOptional(),
    TrueShootingAttempts: z.number().nullable().exactOptional(),
    TrueShootingPercentage: z.number().nullable().exactOptional(),
    TurnOversPercentage: z.number().nullable().exactOptional(),
    Turnovers: z.int().nullable().exactOptional(),
    TwoPointersAttempted: z.int().nullable().exactOptional(),
    TwoPointersMade: z.int().nullable().exactOptional(),
    TwoPointersPercentage: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UsageRatePercentage: z.number().nullable().exactOptional(),
    YahooPosition: z.string().nullable().exactOptional(),
    YahooSalary: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerGame')

const TeamGameSchema = z
  .object({
    Assists: z.int().nullable().exactOptional(),
    AssistsPercentage: z.number().nullable().exactOptional(),
    BlockedShots: z.int().nullable().exactOptional(),
    BlocksPercentage: z.number().nullable().exactOptional(),
    ConferenceLosses: z.int().nullable().exactOptional(),
    ConferenceWins: z.int().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DefensiveRebounds: z.int().nullable().exactOptional(),
    DefensiveReboundsPercentage: z.number().nullable().exactOptional(),
    EffectiveFieldGoalsPercentage: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.int().nullable().exactOptional(),
    FieldGoalsMade: z.int().nullable().exactOptional(),
    FieldGoalsPercentage: z.number().nullable().exactOptional(),
    FreeThrowsAttempted: z.int().nullable().exactOptional(),
    FreeThrowsMade: z.int().nullable().exactOptional(),
    FreeThrowsPercentage: z.number().nullable().exactOptional(),
    GameID: z.int().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalOpponentID: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    IsGameOver: z.boolean().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OffensiveRebounds: z.int().nullable().exactOptional(),
    OffensiveReboundsPercentage: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    PersonalFouls: z.int().nullable().exactOptional(),
    PlayerEfficiencyRating: z.number().nullable().exactOptional(),
    Points: z.int().nullable().exactOptional(),
    Possessions: z.number().nullable().exactOptional(),
    Rebounds: z.int().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Steals: z.int().nullable().exactOptional(),
    StealsPercentage: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    ThreePointersAttempted: z.int().nullable().exactOptional(),
    ThreePointersMade: z.int().nullable().exactOptional(),
    ThreePointersPercentage: z.number().nullable().exactOptional(),
    TotalReboundsPercentage: z.number().nullable().exactOptional(),
    TrueShootingAttempts: z.number().nullable().exactOptional(),
    TrueShootingPercentage: z.number().nullable().exactOptional(),
    TurnOversPercentage: z.number().nullable().exactOptional(),
    Turnovers: z.int().nullable().exactOptional(),
    TwoPointersAttempted: z.int().nullable().exactOptional(),
    TwoPointersMade: z.int().nullable().exactOptional(),
    TwoPointersPercentage: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UsageRatePercentage: z.number().nullable().exactOptional(),
    Wins: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamGame')

const BoxScoreSchema = z
  .object({
    Game: GameSchema.exactOptional(),
    Periods: z.array(PeriodSchema).exactOptional(),
    PlayerGames: z.array(PlayerGameSchema).exactOptional(),
    TeamGames: z.array(TeamGameSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BoxScore')

const TeamSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    ApRank: z.int().nullable().exactOptional(),
    Conference: z.string().nullable().exactOptional(),
    ConferenceID: z.int().nullable().exactOptional(),
    ConferenceLosses: z.int().nullable().exactOptional(),
    ConferenceWins: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    School: z.string().nullable().exactOptional(),
    ShortDisplayName: z.string().nullable().exactOptional(),
    Stadium: StadiumSchema.exactOptional(),
    TeamID: z.int().exactOptional(),
    TeamLogoUrl: z.string().nullable().exactOptional(),
    Wins: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Team')

const ConferenceSchema = z
  .object({
    ConferenceID: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Teams: z.array(TeamSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Conference')

const PlayerSchema = z
  .object({
    BirthCity: z.string().nullable().exactOptional(),
    BirthState: z.string().nullable().exactOptional(),
    Class: z.string().nullable().exactOptional(),
    FantasyAlarmPlayerID: z.int().nullable().exactOptional(),
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
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    RotoWirePlayerID: z.int().nullable().exactOptional(),
    RotoworldPlayerID: z.int().nullable().exactOptional(),
    SportRadarPlayerID: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Weight: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Player')

const PlayerGameProjectionSchema = z
  .object({
    Assists: z.int().nullable().exactOptional(),
    AssistsPercentage: z.number().nullable().exactOptional(),
    BlockedShots: z.int().nullable().exactOptional(),
    BlocksPercentage: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DefensiveRebounds: z.int().nullable().exactOptional(),
    DefensiveReboundsPercentage: z.number().nullable().exactOptional(),
    DraftKingsPosition: z.string().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    EffectiveFieldGoalsPercentage: z.number().nullable().exactOptional(),
    FanDuelPosition: z.string().nullable().exactOptional(),
    FanDuelSalary: z.int().nullable().exactOptional(),
    FantasyDataSalary: z.int().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.int().nullable().exactOptional(),
    FieldGoalsMade: z.int().nullable().exactOptional(),
    FieldGoalsPercentage: z.number().nullable().exactOptional(),
    FreeThrowsAttempted: z.int().nullable().exactOptional(),
    FreeThrowsMade: z.int().nullable().exactOptional(),
    FreeThrowsPercentage: z.number().nullable().exactOptional(),
    GameID: z.int().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalOpponentID: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    IsGameOver: z.boolean().exactOptional(),
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OffensiveRebounds: z.int().nullable().exactOptional(),
    OffensiveReboundsPercentage: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    OpponentPositionRank: z.int().nullable().exactOptional(),
    OpponentRank: z.int().nullable().exactOptional(),
    PersonalFouls: z.int().nullable().exactOptional(),
    PlayerEfficiencyRating: z.number().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Points: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    Rebounds: z.int().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Steals: z.int().nullable().exactOptional(),
    StealsPercentage: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    ThreePointersAttempted: z.int().nullable().exactOptional(),
    ThreePointersMade: z.int().nullable().exactOptional(),
    ThreePointersPercentage: z.number().nullable().exactOptional(),
    TotalReboundsPercentage: z.number().nullable().exactOptional(),
    TrueShootingAttempts: z.number().nullable().exactOptional(),
    TrueShootingPercentage: z.number().nullable().exactOptional(),
    TurnOversPercentage: z.number().nullable().exactOptional(),
    Turnovers: z.int().nullable().exactOptional(),
    TwoPointersAttempted: z.int().nullable().exactOptional(),
    TwoPointersMade: z.int().nullable().exactOptional(),
    TwoPointersPercentage: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UsageRatePercentage: z.number().nullable().exactOptional(),
    YahooPosition: z.string().nullable().exactOptional(),
    YahooSalary: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerGameProjection')

const PlayerSeasonSchema = z
  .object({
    Assists: z.int().nullable().exactOptional(),
    AssistsPercentage: z.number().nullable().exactOptional(),
    BlockedShots: z.int().nullable().exactOptional(),
    BlocksPercentage: z.number().nullable().exactOptional(),
    DefensiveRebounds: z.int().nullable().exactOptional(),
    DefensiveReboundsPercentage: z.number().nullable().exactOptional(),
    EffectiveFieldGoalsPercentage: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.int().nullable().exactOptional(),
    FieldGoalsMade: z.int().nullable().exactOptional(),
    FieldGoalsPercentage: z.number().nullable().exactOptional(),
    FreeThrowsAttempted: z.int().nullable().exactOptional(),
    FreeThrowsMade: z.int().nullable().exactOptional(),
    FreeThrowsPercentage: z.number().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OffensiveRebounds: z.int().nullable().exactOptional(),
    OffensiveReboundsPercentage: z.number().nullable().exactOptional(),
    PersonalFouls: z.int().nullable().exactOptional(),
    PlayerEfficiencyRating: z.number().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Points: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    Rebounds: z.int().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Steals: z.int().nullable().exactOptional(),
    StealsPercentage: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    ThreePointersAttempted: z.int().nullable().exactOptional(),
    ThreePointersMade: z.int().nullable().exactOptional(),
    ThreePointersPercentage: z.number().nullable().exactOptional(),
    TotalReboundsPercentage: z.number().nullable().exactOptional(),
    TrueShootingAttempts: z.number().nullable().exactOptional(),
    TrueShootingPercentage: z.number().nullable().exactOptional(),
    TurnOversPercentage: z.number().nullable().exactOptional(),
    Turnovers: z.int().nullable().exactOptional(),
    TwoPointersAttempted: z.int().nullable().exactOptional(),
    TwoPointersMade: z.int().nullable().exactOptional(),
    TwoPointersPercentage: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UsageRatePercentage: z.number().nullable().exactOptional(),
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
    StartYear: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Season')

const TeamSeasonSchema = z
  .object({
    Assists: z.int().nullable().exactOptional(),
    AssistsPercentage: z.number().nullable().exactOptional(),
    BlockedShots: z.int().nullable().exactOptional(),
    BlocksPercentage: z.number().nullable().exactOptional(),
    ConferenceLosses: z.int().nullable().exactOptional(),
    ConferenceWins: z.int().nullable().exactOptional(),
    DefensiveRebounds: z.int().nullable().exactOptional(),
    DefensiveReboundsPercentage: z.number().nullable().exactOptional(),
    EffectiveFieldGoalsPercentage: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.int().nullable().exactOptional(),
    FieldGoalsMade: z.int().nullable().exactOptional(),
    FieldGoalsPercentage: z.number().nullable().exactOptional(),
    FreeThrowsAttempted: z.int().nullable().exactOptional(),
    FreeThrowsMade: z.int().nullable().exactOptional(),
    FreeThrowsPercentage: z.number().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OffensiveRebounds: z.int().nullable().exactOptional(),
    OffensiveReboundsPercentage: z.number().nullable().exactOptional(),
    PersonalFouls: z.int().nullable().exactOptional(),
    PlayerEfficiencyRating: z.number().nullable().exactOptional(),
    Points: z.int().nullable().exactOptional(),
    Possessions: z.number().nullable().exactOptional(),
    Rebounds: z.int().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Steals: z.int().nullable().exactOptional(),
    StealsPercentage: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    ThreePointersAttempted: z.int().nullable().exactOptional(),
    ThreePointersMade: z.int().nullable().exactOptional(),
    ThreePointersPercentage: z.number().nullable().exactOptional(),
    TotalReboundsPercentage: z.number().nullable().exactOptional(),
    TrueShootingAttempts: z.number().nullable().exactOptional(),
    TrueShootingPercentage: z.number().nullable().exactOptional(),
    TurnOversPercentage: z.number().nullable().exactOptional(),
    Turnovers: z.int().nullable().exactOptional(),
    TwoPointersAttempted: z.int().nullable().exactOptional(),
    TwoPointersMade: z.int().nullable().exactOptional(),
    TwoPointersPercentage: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UsageRatePercentage: z.number().nullable().exactOptional(),
    Wins: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamSeason')

const TournamentSchema = z
  .object({
    Games: z.array(GameSchema).exactOptional(),
    LeftBottomBracketConference: z.string().nullable().exactOptional(),
    LeftTopBracketConference: z.string().nullable().exactOptional(),
    Location: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    RightBottomBracketConference: z.string().nullable().exactOptional(),
    RightTopBracketConference: z.string().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    TournamentID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tournament')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

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
              'The GameID of an CBB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>',
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
              'The date of the game(s).\n<br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.',
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
              'The date of the game(s).\n<br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.',
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
              'Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:\n<code>1</code> or <code>2</code>.',
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
              'The date of the game(s).\n<br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.',
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

export const getFormatInjuredPlayersRoute = createRoute({
  method: 'get',
  path: '/{format}/InjuredPlayers',
  summary: 'Injured Players',
  description:
    'This endpoint provides all currently injured college basketball players, along with injury details.',
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

export const getFormatLeagueHierarchyRoute = createRoute({
  method: 'get',
  path: '/{format}/LeagueHierarchy',
  summary: 'League Hierarchy',
  operationId: 'LeagueHierarchy',
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
      content: { 'application/json': { schema: z.array(ConferenceSchema) } },
    },
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
            description: 'Unique FantasyData Player ID.\nExample:<code>60003802</code>.',
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

export const getFormatPlayerGameProjectionStatsByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameProjectionStatsByDate/{date}',
  summary: 'Projected Player Game Stats by Date',
  operationId: 'ProjectedPlayerGameStatsByDate',
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
              'The date of the game(s).\n<br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.',
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
  summary: 'Projected Player Game Stats by Player',
  operationId: 'ProjectedPlayerGameStatsByPlayer',
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
              'The date of the game(s).\n<br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.',
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
            description: 'Unique FantasyData Player ID.\nExample:<code>60003802</code>.',
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
              'The date of the game(s).\n<br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.',
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
              'The date of the game(s).\n<br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.',
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
            description: 'Unique FantasyData Player ID.\nExample:<code>60003802</code>.',
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
            description: 'Unique FantasyData Player ID.Example:<code>60008094</code>.',
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
              'Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.',
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
              'Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.',
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
            description: 'Unique FantasyData Player ID.\nExample:<code>60003802</code>.',
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
              'Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.',
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
  summary: 'Player Details by Team',
  operationId: 'PlayerDetailsByTeam',
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
    200: { description: '', content: { 'application/json': { schema: z.array(StadiumSchema) } } },
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
              'The date of the game(s).\n<br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.',
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
            description: 'Unique ID of team.  Example <code> 1 </code>',
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
              'Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.',
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

export const getFormatTournamentSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/Tournament/{season}',
  summary: 'Tournament Hierarchy',
  operationId: 'TournamentHierarchy',
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
              'Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018POST</code>, <code>2019</code>.',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: TournamentSchema } } },
  },
})

export const getFormatTeamsRoute = createRoute({
  method: 'get',
  path: '/{format}/teams',
  summary: 'Teams',
  operationId: 'Teams',
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
