import { createRoute, z } from '@hono/zod-openapi'

const GameSchema = z
  .object({
    BestOf: z.string().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DrawMoneyLine: z.int().nullable().exactOptional(),
    GameId: z.int().exactOptional(),
    Group: z.string().nullable().exactOptional(),
    IsClosed: z.boolean().nullable().exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    RoundId: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    TeamAId: z.int().nullable().exactOptional(),
    TeamAKey: z.string().nullable().exactOptional(),
    TeamAMoneyLine: z.int().nullable().exactOptional(),
    TeamAName: z.string().nullable().exactOptional(),
    TeamAPointSpreadPayout: z.int().nullable().exactOptional(),
    TeamAScore: z.int().nullable().exactOptional(),
    TeamBId: z.int().nullable().exactOptional(),
    TeamBKey: z.string().nullable().exactOptional(),
    TeamBMoneyLine: z.int().nullable().exactOptional(),
    TeamBName: z.string().nullable().exactOptional(),
    TeamBPointSpreadPayout: z.int().nullable().exactOptional(),
    TeamBScore: z.int().nullable().exactOptional(),
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
    VideoGameId: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DfsSlate')

const PlayerGameProjectionSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    CombatPlayerScore: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    Deaths: z.number().nullable().exactOptional(),
    DoubleKills: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    GameId: z.int().exactOptional(),
    Games: z.int().exactOptional(),
    GoldEarned: z.number().nullable().exactOptional(),
    GoldSpent: z.number().nullable().exactOptional(),
    InhibitorKills: z.number().nullable().exactOptional(),
    IsClosed: z.boolean().exactOptional(),
    KillingSpree: z.number().nullable().exactOptional(),
    Kills: z.number().nullable().exactOptional(),
    LargestCriticalStrike: z.number().nullable().exactOptional(),
    LargestKillingSpree: z.number().nullable().exactOptional(),
    LargestMultiKill: z.number().nullable().exactOptional(),
    LongestTimeSpentLiving: z.number().nullable().exactOptional(),
    MagicDamageDealt: z.number().nullable().exactOptional(),
    MagicDamageDealtToChampions: z.number().nullable().exactOptional(),
    MagicDamageTaken: z.number().nullable().exactOptional(),
    MatchName: z.string().nullable().exactOptional(),
    Matches: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    NeutralMinionsKIlled: z.number().nullable().exactOptional(),
    NeutralMinionsKIlledTeamJungle: z.number().nullable().exactOptional(),
    NeutralMinionsKilledEnemyJungle: z.number().nullable().exactOptional(),
    ObjectivePlayerScore: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentId: z.int().exactOptional(),
    PentaKills: z.number().nullable().exactOptional(),
    PhysicalDamageDealt: z.number().nullable().exactOptional(),
    PhysicalDamageDealtToChampions: z.number().nullable().exactOptional(),
    PhysicalDamageTaken: z.number().nullable().exactOptional(),
    PlayerId: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    QuadraKills: z.number().nullable().exactOptional(),
    SightWardsBoughtInGame: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamId: z.int().nullable().exactOptional(),
    TenKillsOrAssists: z.number().nullable().exactOptional(),
    TotalDamageDealt: z.number().nullable().exactOptional(),
    TotalDamageDealtToChampions: z.number().nullable().exactOptional(),
    TotalDamageTaken: z.number().nullable().exactOptional(),
    TotalHeal: z.number().nullable().exactOptional(),
    TotalMinionsKilled: z.number().nullable().exactOptional(),
    TotalPlayerScore: z.number().nullable().exactOptional(),
    TotalTimeCrowdControlDealt: z.number().nullable().exactOptional(),
    TotalUnitsHealed: z.number().nullable().exactOptional(),
    TripleKills: z.number().nullable().exactOptional(),
    TrueDamageDealt: z.number().nullable().exactOptional(),
    TrueDamageDealtToChampions: z.number().nullable().exactOptional(),
    TrueDamageTaken: z.number().nullable().exactOptional(),
    TurretKills: z.number().nullable().exactOptional(),
    UnrealKills: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    VisionWardsBoughtInGame: z.number().nullable().exactOptional(),
    WardsKilled: z.number().nullable().exactOptional(),
    WardsPlaced: z.number().nullable().exactOptional(),
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
    200: { description: '', content: { 'application/json': { schema: z.array(DfsSlateSchema) } } },
  },
})

export const getFormatPlayerGameProjectionStatsByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameProjectionStatsByDate/{date}',
  summary: 'Projected Player Game Stats by Date',
  description: 'Projected Player Game Stats by Date',
  operationId: 'ProjectedPlayerGameStatsByDate',
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
            description: 'The date of the game(s).\n<br>Example: <code>2019-01-20</code>',
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
  description: 'Projected Player Game Stats by Date',
  operationId: 'ProjectedPlayerGameStatsByPlayer',
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
            description: 'The date of the game(s).\n<br>Example: <code>2019-01-20</code>',
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
            description: 'Unique FantasyData Player ID.\nExample:<code>100001500</code>.',
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
