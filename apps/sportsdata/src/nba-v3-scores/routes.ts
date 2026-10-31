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

const QuarterSchema = z
  .object({
    AwayScore: z.int().nullable().exactOptional(),
    GameID: z.int().exactOptional(),
    HomeScore: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    QuarterID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Quarter')

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
    AlternateID: z.int().nullable().exactOptional(),
    Attendance: z.int().nullable().exactOptional(),
    AwayRotationNumber: z.int().nullable().exactOptional(),
    AwayTeam: z.string().nullable().exactOptional(),
    AwayTeamID: z.int().exactOptional(),
    AwayTeamMoneyLine: z.int().nullable().exactOptional(),
    AwayTeamScore: z.int().nullable().exactOptional(),
    Channel: z.string().nullable().exactOptional(),
    CrewChiefID: z.int().nullable().exactOptional(),
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
    IsClosed: z.boolean().exactOptional(),
    LastPlay: z.string().nullable().exactOptional(),
    NeutralVenue: z.boolean().nullable().exactOptional(),
    OverPayout: z.int().nullable().exactOptional(),
    OverUnder: z.number().nullable().exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    PointSpreadAwayTeamMoneyLine: z.int().nullable().exactOptional(),
    PointSpreadHomeTeamMoneyLine: z.int().nullable().exactOptional(),
    Quarter: z.string().nullable().exactOptional(),
    Quarters: z.array(QuarterSchema).exactOptional(),
    RefereeID: z.int().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    SeriesInfo: SeriesSchema.exactOptional(),
    StadiumID: z.int().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    TimeRemainingMinutes: z.int().nullable().exactOptional(),
    TimeRemainingSeconds: z.int().nullable().exactOptional(),
    UmpireID: z.int().nullable().exactOptional(),
    UnderPayout: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Game')

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

const OpponentSeasonSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    AssistsPercentage: z.number().nullable().exactOptional(),
    BlockedShots: z.number().nullable().exactOptional(),
    BlocksPercentage: z.number().nullable().exactOptional(),
    DefensiveRebounds: z.number().nullable().exactOptional(),
    DefensiveReboundsPercentage: z.number().nullable().exactOptional(),
    DoubleDoubles: z.number().nullable().exactOptional(),
    EffectiveFieldGoalsPercentage: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.number().nullable().exactOptional(),
    FieldGoalsMade: z.number().nullable().exactOptional(),
    FieldGoalsPercentage: z.number().nullable().exactOptional(),
    FreeThrowsAttempted: z.number().nullable().exactOptional(),
    FreeThrowsMade: z.number().nullable().exactOptional(),
    FreeThrowsPercentage: z.number().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    IsClosed: z.boolean().exactOptional(),
    LineupConfirmed: z.boolean().nullable().exactOptional(),
    LineupStatus: z.string().nullable().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OffensiveRebounds: z.number().nullable().exactOptional(),
    OffensiveReboundsPercentage: z.number().nullable().exactOptional(),
    OpponentPosition: z.string().nullable().exactOptional(),
    PersonalFouls: z.number().nullable().exactOptional(),
    PlayerEfficiencyRating: z.number().nullable().exactOptional(),
    PlusMinus: z.number().nullable().exactOptional(),
    Points: z.number().nullable().exactOptional(),
    Possessions: z.number().nullable().exactOptional(),
    Rebounds: z.number().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    Seconds: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Steals: z.number().nullable().exactOptional(),
    StealsPercentage: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    ThreePointersAttempted: z.number().nullable().exactOptional(),
    ThreePointersMade: z.number().nullable().exactOptional(),
    ThreePointersPercentage: z.number().nullable().exactOptional(),
    TotalReboundsPercentage: z.number().nullable().exactOptional(),
    TripleDoubles: z.number().nullable().exactOptional(),
    TrueShootingAttempts: z.number().nullable().exactOptional(),
    TrueShootingPercentage: z.number().nullable().exactOptional(),
    TurnOversPercentage: z.number().nullable().exactOptional(),
    Turnovers: z.number().nullable().exactOptional(),
    TwoPointersAttempted: z.number().nullable().exactOptional(),
    TwoPointersMade: z.number().nullable().exactOptional(),
    TwoPointersPercentage: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UsageRatePercentage: z.number().nullable().exactOptional(),
    Wins: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OpponentSeason')

const PlayerSchema = z
  .object({
    BirthCity: z.string().nullable().exactOptional(),
    BirthCountry: z.string().nullable().exactOptional(),
    BirthDate: z.string().nullable().exactOptional(),
    BirthState: z.string().nullable().exactOptional(),
    College: z.string().nullable().exactOptional(),
    DepthChartOrder: z.int().nullable().exactOptional(),
    DepthChartPosition: z.string().nullable().exactOptional(),
    DraftKingsName: z.string().nullable().exactOptional(),
    DraftKingsPlayerID: z.int().nullable().exactOptional(),
    Experience: z.int().nullable().exactOptional(),
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
    NbaDotComPlayerID: z.int().nullable().exactOptional(),
    PhotoUrl: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
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

const RefereeSchema = z
  .object({
    College: z.string().nullable().exactOptional(),
    Experience: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    RefereeID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Referee')

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
    AwayLosses: z.int().nullable().exactOptional(),
    AwayWins: z.int().nullable().exactOptional(),
    City: z.string().nullable().exactOptional(),
    Conference: z.string().nullable().exactOptional(),
    ConferenceLosses: z.int().nullable().exactOptional(),
    ConferenceRank: z.int().nullable().exactOptional(),
    ConferenceWins: z.int().nullable().exactOptional(),
    Division: z.string().nullable().exactOptional(),
    DivisionLosses: z.int().nullable().exactOptional(),
    DivisionRank: z.int().nullable().exactOptional(),
    DivisionWins: z.int().nullable().exactOptional(),
    GamesBack: z.number().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    HomeLosses: z.int().nullable().exactOptional(),
    HomeWins: z.int().nullable().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    LastTenLosses: z.int().nullable().exactOptional(),
    LastTenWins: z.int().nullable().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Percentage: z.number().nullable().exactOptional(),
    PointsPerGameAgainst: z.number().nullable().exactOptional(),
    PointsPerGameFor: z.number().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Streak: z.int().nullable().exactOptional(),
    StreakDescription: z.string().nullable().exactOptional(),
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
    LeagueID: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    NbaDotComTeamID: z.int().nullable().exactOptional(),
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

const TeamDepthChartSchema = z
  .object({
    DepthCharts: z.array(DepthChartSchema).exactOptional(),
    TeamID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamDepthChart')

const TeamGameSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    AssistsPercentage: z.number().nullable().exactOptional(),
    BlockedShots: z.number().nullable().exactOptional(),
    BlocksPercentage: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DefensiveRebounds: z.number().nullable().exactOptional(),
    DefensiveReboundsPercentage: z.number().nullable().exactOptional(),
    DoubleDoubles: z.number().nullable().exactOptional(),
    EffectiveFieldGoalsPercentage: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.number().nullable().exactOptional(),
    FieldGoalsMade: z.number().nullable().exactOptional(),
    FieldGoalsPercentage: z.number().nullable().exactOptional(),
    FreeThrowsAttempted: z.number().nullable().exactOptional(),
    FreeThrowsMade: z.number().nullable().exactOptional(),
    FreeThrowsPercentage: z.number().nullable().exactOptional(),
    GameID: z.int().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalOpponentID: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    IsClosed: z.boolean().exactOptional(),
    IsGameOver: z.boolean().exactOptional(),
    LineupConfirmed: z.boolean().nullable().exactOptional(),
    LineupStatus: z.string().nullable().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OffensiveRebounds: z.number().nullable().exactOptional(),
    OffensiveReboundsPercentage: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    PersonalFouls: z.number().nullable().exactOptional(),
    PlayerEfficiencyRating: z.number().nullable().exactOptional(),
    PlusMinus: z.number().nullable().exactOptional(),
    Points: z.number().nullable().exactOptional(),
    Possessions: z.number().nullable().exactOptional(),
    Rebounds: z.number().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    Seconds: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Steals: z.number().nullable().exactOptional(),
    StealsPercentage: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    ThreePointersAttempted: z.number().nullable().exactOptional(),
    ThreePointersMade: z.number().nullable().exactOptional(),
    ThreePointersPercentage: z.number().nullable().exactOptional(),
    TotalReboundsPercentage: z.number().nullable().exactOptional(),
    TripleDoubles: z.number().nullable().exactOptional(),
    TrueShootingAttempts: z.number().nullable().exactOptional(),
    TrueShootingPercentage: z.number().nullable().exactOptional(),
    TurnOversPercentage: z.number().nullable().exactOptional(),
    Turnovers: z.number().nullable().exactOptional(),
    TwoPointersAttempted: z.number().nullable().exactOptional(),
    TwoPointersMade: z.number().nullable().exactOptional(),
    TwoPointersPercentage: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UsageRatePercentage: z.number().nullable().exactOptional(),
    Wins: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamGame')

const TeamSeasonSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    AssistsPercentage: z.number().nullable().exactOptional(),
    BlockedShots: z.number().nullable().exactOptional(),
    BlocksPercentage: z.number().nullable().exactOptional(),
    DefensiveRebounds: z.number().nullable().exactOptional(),
    DefensiveReboundsPercentage: z.number().nullable().exactOptional(),
    DoubleDoubles: z.number().nullable().exactOptional(),
    EffectiveFieldGoalsPercentage: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.number().nullable().exactOptional(),
    FieldGoalsMade: z.number().nullable().exactOptional(),
    FieldGoalsPercentage: z.number().nullable().exactOptional(),
    FreeThrowsAttempted: z.number().nullable().exactOptional(),
    FreeThrowsMade: z.number().nullable().exactOptional(),
    FreeThrowsPercentage: z.number().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    IsClosed: z.boolean().exactOptional(),
    LineupConfirmed: z.boolean().nullable().exactOptional(),
    LineupStatus: z.string().nullable().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OffensiveRebounds: z.number().nullable().exactOptional(),
    OffensiveReboundsPercentage: z.number().nullable().exactOptional(),
    OpponentPosition: z.string().nullable().exactOptional(),
    OpponentStat: OpponentSeasonSchema.exactOptional(),
    PersonalFouls: z.number().nullable().exactOptional(),
    PlayerEfficiencyRating: z.number().nullable().exactOptional(),
    PlusMinus: z.number().nullable().exactOptional(),
    Points: z.number().nullable().exactOptional(),
    Possessions: z.number().nullable().exactOptional(),
    Rebounds: z.number().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    Seconds: z.int().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Steals: z.number().nullable().exactOptional(),
    StealsPercentage: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    ThreePointersAttempted: z.number().nullable().exactOptional(),
    ThreePointersMade: z.number().nullable().exactOptional(),
    ThreePointersPercentage: z.number().nullable().exactOptional(),
    TotalReboundsPercentage: z.number().nullable().exactOptional(),
    TripleDoubles: z.number().nullable().exactOptional(),
    TrueShootingAttempts: z.number().nullable().exactOptional(),
    TrueShootingPercentage: z.number().nullable().exactOptional(),
    TurnOversPercentage: z.number().nullable().exactOptional(),
    Turnovers: z.number().nullable().exactOptional(),
    TwoPointersAttempted: z.number().nullable().exactOptional(),
    TwoPointersMade: z.number().nullable().exactOptional(),
    TwoPointersPercentage: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UsageRatePercentage: z.number().nullable().exactOptional(),
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

export const getFormatDepthChartsRoute = createRoute({
  method: 'get',
  path: '/{format}/DepthCharts',
  summary: 'Depth Charts',
  description: 'Returns the full list of NBA Referees.',
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
              'The date of the game(s).\n<br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.',
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
              'The date of the news.\n<br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.',
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
            description: 'Unique FantasyData Player ID. Example:<code>20000571</code>.',
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
  description: 'This endpoint provides active player details by team.',
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
              'The abbreviation of the requested team.<br>Examples: <code>PHI</code>, <code>BKN</code>.',
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

export const getFormatRefereesRoute = createRoute({
  method: 'get',
  path: '/{format}/Referees',
  summary: 'Referees',
  description: 'Returns the full list of NBA Referees.',
  operationId: 'Referees',
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
    200: { description: '', content: { 'application/json': { schema: z.array(RefereeSchema) } } },
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
            description: 'Year of the season.\n<br>Examples: <code>2015</code>, <code>2016</code>.',
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
              'The date of the game(s).\n<br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.',
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
            description: 'Year of the season.\n<br>Examples: <code>2015</code>, <code>2016</code>.',
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
