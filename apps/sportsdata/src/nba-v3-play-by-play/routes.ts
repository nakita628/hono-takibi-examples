import { createRoute, z } from '@hono/zod-openapi'

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

const PlaySchema = z
  .object({
    AssistedByPlayerID: z.int().nullable().exactOptional(),
    AwayPlayerID: z.int().nullable().exactOptional(),
    AwayTeamScore: z.int().nullable().exactOptional(),
    BaselineOffsetPercentage: z.number().nullable().exactOptional(),
    BlockedByPlayerID: z.int().nullable().exactOptional(),
    Category: z.string().nullable().exactOptional(),
    Coordinates: z.string().nullable().exactOptional(),
    Created: z.string().nullable().exactOptional(),
    Description: z.string().nullable().exactOptional(),
    FastBreak: z.boolean().nullable().exactOptional(),
    HomePlayerID: z.int().nullable().exactOptional(),
    HomeTeamScore: z.int().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    PlayID: z.int().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Points: z.int().nullable().exactOptional(),
    PotentialPoints: z.int().nullable().exactOptional(),
    QuarterID: z.int().exactOptional(),
    QuarterName: z.string().nullable().exactOptional(),
    ReceivingPlayerID: z.int().nullable().exactOptional(),
    ReceivingTeam: z.string().nullable().exactOptional(),
    ReceivingTeamID: z.int().nullable().exactOptional(),
    Sequence: z.int().exactOptional(),
    ShotMade: z.boolean().nullable().exactOptional(),
    SideOfBasket: z.string().nullable().exactOptional(),
    SidelineOffsetPercentage: z.number().nullable().exactOptional(),
    StolenByPlayerID: z.int().nullable().exactOptional(),
    SubstituteInPlayerID: z.int().nullable().exactOptional(),
    SubstituteOutPlayerID: z.int().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    TimeRemainingMinutes: z.int().nullable().exactOptional(),
    TimeRemainingSeconds: z.int().nullable().exactOptional(),
    Type: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Play')

const PlayByPlaySchema = z
  .object({
    Game: GameSchema.exactOptional(),
    Plays: z.array(PlaySchema).exactOptional(),
    Quarters: z.array(QuarterSchema).exactOptional(),
  })
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
              'The GameID of an NBA game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code>, <code>16905</code>, etc.',
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
              'The date of the game(s).\n<br>Examples: <code>2016-OCT-31</code>, <code>2017-JAN-15</code>.',
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
