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

const PlayByPlaySchema = z
  .object({ Game: GameSchema.exactOptional(), Plays: z.array(PlaySchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('PlayByPlay')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getFormatPlayByPlayGameidRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayByPlay/{gameid}',
  summary: 'Play By Play',
  operationId: 'PlayByPlay',
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
    200: { description: '', content: { 'application/json': { schema: PlayByPlaySchema } } },
  },
})

export const getFormatPlayByPlayDeltaDateMinutesRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayByPlayDelta/{date}/{minutes}',
  summary: 'Play By Play Delta',
  operationId: 'PlayByPlayDelta',
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
              'The date of the game(s).\n<br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.',
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
              'Only returns plays that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:\n<code>1</code>, <code>2</code> ... <code>all</code>.',
            in: 'path',
            name: 'minutes',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayByPlaySchema) } },
    },
  },
})
