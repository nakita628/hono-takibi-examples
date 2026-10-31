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

const GoaltenderSchema = z
  .object({
    Confirmed: z.boolean().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    Jersey: z.int().nullable().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Goaltender')

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

const PlayerGameProjectionSchema = z
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
  .openapi('PlayerGameProjection')

const StartingGoaltendersSchema = z
  .object({
    AwayGoaltender: GoaltenderSchema.exactOptional(),
    AwayTeam: z.string().nullable().exactOptional(),
    AwayTeamID: z.int().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    GameID: z.int().exactOptional(),
    HomeGoaltender: GoaltenderSchema.exactOptional(),
    HomeTeam: z.string().nullable().exactOptional(),
    HomeTeamID: z.int().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Status: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartingGoaltenders')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

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
    'This endpoint provides all currently injured NHL players, along with injury details.',
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
              'The date of the game(s).\n <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.\n ',
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
    200: {
      description: '',
      content: { 'application/json': { schema: PlayerGameProjectionSchema } },
    },
  },
})

export const getFormatStartingGoaltendersByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/StartingGoaltendersByDate/{date}',
  summary: 'Starting Goaltenders by Date',
  description:
    'This endpoint provides the projected & confirmed starting goaltenders for NHL games on a given date.',
  operationId: 'StartingGoaltendersByDate',
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
              'The date of the game(s).\n<br>Examples: <code>2021-OCT-12</code>, <code>2021-DEC-09</code>.',
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
      content: { 'application/json': { schema: z.array(StartingGoaltendersSchema) } },
    },
  },
})
