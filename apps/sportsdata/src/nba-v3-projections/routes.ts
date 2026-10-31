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

const PlayerGameProjectionSchema = z
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
    DraftKingsPosition: z.string().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    EffectiveFieldGoalsPercentage: z.number().nullable().exactOptional(),
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
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    IsClosed: z.boolean().exactOptional(),
    IsGameOver: z.boolean().exactOptional(),
    LineupConfirmed: z.boolean().nullable().exactOptional(),
    LineupStatus: z.string().nullable().exactOptional(),
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OffensiveRebounds: z.number().nullable().exactOptional(),
    OffensiveReboundsPercentage: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    OpponentPositionRank: z.int().nullable().exactOptional(),
    OpponentRank: z.int().nullable().exactOptional(),
    PersonalFouls: z.number().nullable().exactOptional(),
    PlayerEfficiencyRating: z.number().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlusMinus: z.number().nullable().exactOptional(),
    Points: z.number().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    Rebounds: z.number().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    Seconds: z.int().nullable().exactOptional(),
    Started: z.int().nullable().exactOptional(),
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
    YahooPosition: z.string().nullable().exactOptional(),
    YahooSalary: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerGameProjection')

const PlayerSeasonProjectionSchema = z
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
    Minutes: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OffensiveRebounds: z.number().nullable().exactOptional(),
    OffensiveReboundsPercentage: z.number().nullable().exactOptional(),
    PersonalFouls: z.number().nullable().exactOptional(),
    PlayerEfficiencyRating: z.number().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlusMinus: z.number().nullable().exactOptional(),
    Points: z.number().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    Rebounds: z.number().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    Seconds: z.int().nullable().exactOptional(),
    Started: z.int().nullable().exactOptional(),
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
  })
  .openapi({ required: [] })
  .openapi('PlayerSeasonProjection')

const StartingLineupsSchema = z
  .object({
    AwayLineup: z.array(LineupSchema).exactOptional(),
    AwayTeam: z.string().nullable().exactOptional(),
    AwayTeamID: z.int().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    GameID: z.int().exactOptional(),
    HomeLineup: z.array(LineupSchema).exactOptional(),
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
  description: 'This endpoint provides a depth chart for each NBA team.',
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

export const getFormatInjuredPlayersRoute = createRoute({
  method: 'get',
  path: '/{format}/InjuredPlayers',
  summary: 'Injured Players',
  description:
    'This endpoint provides all currently injured NBA players, along with injury details.',
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
              'The date of the game(s). <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.',
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
              'The date of the game(s).<br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.',
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
    200: {
      description: '',
      content: { 'application/json': { schema: PlayerGameProjectionSchema } },
    },
  },
})

export const getFormatPlayerSeasonProjectionStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonProjectionStats/{season}',
  summary: 'Projected Player Season Stats',
  operationId: 'ProjectedPlayerSeasonStats',
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
              'Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2019</code>, etc.',
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

export const getFormatPlayerSeasonProjectionStatsByPlayerSeasonPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonProjectionStatsByPlayer/{season}/{playerid}',
  summary: 'Projected Player Season Stats by Player',
  operationId: 'ProjectedPlayerSeasonStatsByPlayer',
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
              'Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2019</code>, etc.',
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
    200: {
      description: '',
      content: { 'application/json': { schema: PlayerSeasonProjectionSchema } },
    },
  },
})

export const getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}',
  summary: 'Projected Player Season Stats by Team',
  operationId: 'ProjectedPlayerSeasonStatsByTeam',
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
              'Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2019</code>, etc.',
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
              'The abbreviation of the requested team.\n<br>Examples: <code>MIA</code>, <code>PHI</code>.',
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

export const getFormatStartingLineupsByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/StartingLineupsByDate/{date}',
  summary: 'Starting Lineups by Date',
  description:
    'This endpoint provides the projected & confirmed starting lineups for NBA games on a given date.',
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
              'The date of the game(s). <br> Examples: <code>2021-OCT-12</code>, <code>2021-DEC-09</code>.',
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
