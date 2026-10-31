import { createRoute, z } from '@hono/zod-openapi'

const PlayoffAggregateScoreSchema = z
  .object({
    Created: z.string().nullable().exactOptional(),
    TeamA_AggregateScore: z.int().exactOptional(),
    TeamA_Id: z.int().exactOptional(),
    TeamB_AggregateScore: z.int().exactOptional(),
    TeamB_Id: z.int().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    WinningTeamId: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayoffAggregateScore')

const GameSchema = z
  .object({
    Attendance: z.int().nullable().exactOptional(),
    AwayTeamCountryCode: z.string().nullable().exactOptional(),
    AwayTeamFormation: z.string().nullable().exactOptional(),
    AwayTeamId: z.int().nullable().exactOptional(),
    AwayTeamKey: z.string().nullable().exactOptional(),
    AwayTeamMoneyLine: z.int().nullable().exactOptional(),
    AwayTeamName: z.string().nullable().exactOptional(),
    AwayTeamPointSpreadPayout: z.int().nullable().exactOptional(),
    AwayTeamScore: z.int().nullable().exactOptional(),
    AwayTeamScoreExtraTime: z.int().nullable().exactOptional(),
    AwayTeamScorePenalty: z.int().nullable().exactOptional(),
    AwayTeamScorePeriod1: z.int().nullable().exactOptional(),
    AwayTeamScorePeriod2: z.int().nullable().exactOptional(),
    Clock: z.int().nullable().exactOptional(),
    ClockDisplay: z.string().nullable().exactOptional(),
    ClockExtra: z.int().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DrawMoneyLine: z.int().nullable().exactOptional(),
    GameId: z.int().exactOptional(),
    GlobalAwayTeamId: z.int().nullable().exactOptional(),
    GlobalGameId: z.int().exactOptional(),
    GlobalHomeTeamId: z.int().nullable().exactOptional(),
    Group: z.string().nullable().exactOptional(),
    HomeTeamCountryCode: z.string().nullable().exactOptional(),
    HomeTeamFormation: z.string().nullable().exactOptional(),
    HomeTeamId: z.int().nullable().exactOptional(),
    HomeTeamKey: z.string().nullable().exactOptional(),
    HomeTeamMoneyLine: z.int().nullable().exactOptional(),
    HomeTeamName: z.string().nullable().exactOptional(),
    HomeTeamPointSpreadPayout: z.int().nullable().exactOptional(),
    HomeTeamScore: z.int().nullable().exactOptional(),
    HomeTeamScoreExtraTime: z.int().nullable().exactOptional(),
    HomeTeamScorePenalty: z.int().nullable().exactOptional(),
    HomeTeamScorePeriod1: z.int().nullable().exactOptional(),
    HomeTeamScorePeriod2: z.int().nullable().exactOptional(),
    IsClosed: z.boolean().nullable().exactOptional(),
    OverPayout: z.int().nullable().exactOptional(),
    OverUnder: z.number().nullable().exactOptional(),
    Period: z.string().nullable().exactOptional(),
    PlayoffAggregateScore: PlayoffAggregateScoreSchema.exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    RoundId: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    UnderPayout: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UpdatedUtc: z.string().nullable().exactOptional(),
    VenueId: z.int().nullable().exactOptional(),
    VenueType: z.string().nullable().exactOptional(),
    Week: z.int().nullable().exactOptional(),
    Winner: z.string().nullable().exactOptional(),
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
    CompetitionId: z.int().nullable().exactOptional(),
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

const PlayerSchema = z
  .object({
    BirthCity: z.string().nullable().exactOptional(),
    BirthCountry: z.string().nullable().exactOptional(),
    BirthDate: z.string().nullable().exactOptional(),
    CommonName: z.string().nullable().exactOptional(),
    DraftKingsPosition: z.string().nullable().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    Foot: z.string().nullable().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    Height: z.int().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    Jersey: z.int().nullable().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    Nationality: z.string().nullable().exactOptional(),
    PhotoUrl: z.string().nullable().exactOptional(),
    PlayerId: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    RotoWirePlayerID: z.int().nullable().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UsaTodayHeadshotNoBackgroundUpdated: z.string().nullable().exactOptional(),
    UsaTodayHeadshotNoBackgroundUrl: z.string().nullable().exactOptional(),
    UsaTodayHeadshotUpdated: z.string().nullable().exactOptional(),
    UsaTodayHeadshotUrl: z.string().nullable().exactOptional(),
    UsaTodayPlayerID: z.int().nullable().exactOptional(),
    Weight: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Player')

const PlayerGameProjectionSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    BlockedShots: z.number().nullable().exactOptional(),
    Captain: z.boolean().nullable().exactOptional(),
    CornersWon: z.number().nullable().exactOptional(),
    Crosses: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DefenderCleanSheets: z.number().nullable().exactOptional(),
    DraftKingsPosition: z.string().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    FanDuelPosition: z.string().nullable().exactOptional(),
    FanDuelSalary: z.int().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsMondogoal: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    Fouled: z.number().nullable().exactOptional(),
    Fouls: z.number().nullable().exactOptional(),
    GameId: z.int().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalGameId: z.int().nullable().exactOptional(),
    GlobalOpponentId: z.int().nullable().exactOptional(),
    GlobalTeamId: z.int().nullable().exactOptional(),
    GoalkeeperCleanSheets: z.number().nullable().exactOptional(),
    GoalkeeperGoalsAgainst: z.number().nullable().exactOptional(),
    GoalkeeperSaves: z.number().nullable().exactOptional(),
    GoalkeeperSingleGoalAgainst: z.number().nullable().exactOptional(),
    GoalkeeperWins: z.number().nullable().exactOptional(),
    Goals: z.number().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    Interceptions: z.number().nullable().exactOptional(),
    IsGameOver: z.boolean().exactOptional(),
    Jersey: z.int().nullable().exactOptional(),
    LastManTackle: z.number().nullable().exactOptional(),
    Minutes: z.number().nullable().exactOptional(),
    MondogoalPosition: z.string().nullable().exactOptional(),
    MondogoalSalary: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Offsides: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentId: z.int().nullable().exactOptional(),
    OpponentScore: z.number().nullable().exactOptional(),
    OwnGoals: z.number().nullable().exactOptional(),
    Passes: z.number().nullable().exactOptional(),
    PassesCompleted: z.number().nullable().exactOptional(),
    PenaltiesConceded: z.number().nullable().exactOptional(),
    PenaltiesWon: z.number().nullable().exactOptional(),
    PenaltyKickGoals: z.number().nullable().exactOptional(),
    PenaltyKickMisses: z.number().nullable().exactOptional(),
    PenaltyKickSaves: z.number().nullable().exactOptional(),
    PlayerId: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    RedCards: z.number().nullable().exactOptional(),
    RoundId: z.int().nullable().exactOptional(),
    Score: z.number().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    Shots: z.number().nullable().exactOptional(),
    ShotsOnGoal: z.number().nullable().exactOptional(),
    Started: z.int().nullable().exactOptional(),
    StatId: z.int().exactOptional(),
    Suspension: z.boolean().nullable().exactOptional(),
    SuspensionReason: z.string().nullable().exactOptional(),
    Tackles: z.number().nullable().exactOptional(),
    TacklesWon: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamId: z.int().nullable().exactOptional(),
    Touches: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UpdatedUtc: z.string().nullable().exactOptional(),
    YahooPosition: z.string().nullable().exactOptional(),
    YahooSalary: z.int().nullable().exactOptional(),
    YellowCards: z.number().nullable().exactOptional(),
    YellowRedCards: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerGameProjection')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getFormatDfsSlatesByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/DfsSlatesByDate/{date}',
  summary: 'Dfs Slates By Date',
  operationId: 'DfsSlatesByDate',
  request: {
    params: z.object({
      format: z
        .enum(['json', 'xml'])
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['json', 'xml'], type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description: 'The date of the game(s).\n<br>Examples: <code>2020-02-18</code>\n',
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

export const getFormatInjuredPlayersCompetitionRoute = createRoute({
  method: 'get',
  path: '/{format}/InjuredPlayers/{competition}',
  summary: 'Injured Players By Competition',
  description:
    'This endpoint provides all currently injured soccer players by competition, along with injury details.',
  operationId: 'InjuredPlayersByCompetition',
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
      competition: z
        .string()
        .openapi({
          param: {
            description:
              'An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.',
            in: 'path',
            name: 'competition',
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

export const getFormatPlayerGameProjectionStatsByCompetitionCompetitionDateRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameProjectionStatsByCompetition/{competition}/{date}',
  summary: 'Projected Player Game Stats by Competition (w/ DFS Salaries)',
  operationId: 'ProjectedPlayerGameStatsByCompetitionWDfsSalaries',
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
      competition: z
        .string()
        .openapi({
          param: {
            description:
              'An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.',
            in: 'path',
            name: 'competition',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the game(s).\n<br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.',
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

export const getFormatPlayerGameProjectionStatsByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameProjectionStatsByDate/{date}',
  summary: 'Projected Player Game Stats by Date (w/ DFS Salaries)',
  operationId: 'ProjectedPlayerGameStatsByDateWDfsSalaries',
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
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the game(s).\n<br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.',
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
  summary: 'Projected Player Game Stats by Player (w/ DFS Salaries)',
  operationId: 'ProjectedPlayerGameStatsByPlayerWDfsSalaries',
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
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the game(s).\n<br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.',
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
            description: 'Unique FantasyData Player ID.\nExample:<code>90026231</code>.',
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

export const getFormatUpcomingDfsSlatesByCompetitionCompetitionIdRoute = createRoute({
  method: 'get',
  path: '/{format}/UpcomingDfsSlatesByCompetition/{competitionId}',
  summary: 'Upcoming Dfs Slates By Competition',
  operationId: 'UpcomingDfsSlatesByCompetition',
  request: {
    params: z.object({
      format: z
        .enum(['json', 'xml'])
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['json', 'xml'], type: 'string' },
          },
        }),
      competitionId: z
        .string()
        .openapi({
          param: {
            description: 'The Competition Id.\n<br>Examples: <code>3</code>',
            in: 'path',
            name: 'competitionId',
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
