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

const PitchSchema = z
  .object({
    Ball: z.boolean().nullable().exactOptional(),
    BallsBeforePitch: z.int().nullable().exactOptional(),
    Foul: z.boolean().nullable().exactOptional(),
    HitterID: z.int().nullable().exactOptional(),
    Looking: z.boolean().nullable().exactOptional(),
    Outs: z.int().nullable().exactOptional(),
    PitchID: z.int().exactOptional(),
    PitchNumberThisAtBat: z.int().nullable().exactOptional(),
    PitcherID: z.int().nullable().exactOptional(),
    PlayID: z.int().exactOptional(),
    Strike: z.boolean().nullable().exactOptional(),
    StrikesBeforePitch: z.int().nullable().exactOptional(),
    Swinging: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Pitch')

const PlaySchema = z
  .object({
    AtBat: z.boolean().nullable().exactOptional(),
    AwayTeamRuns: z.int().nullable().exactOptional(),
    Balls: z.int().nullable().exactOptional(),
    Description: z.string().nullable().exactOptional(),
    Error: z.boolean().nullable().exactOptional(),
    Hit: z.boolean().nullable().exactOptional(),
    HitterBatHand: z.string().nullable().exactOptional(),
    HitterID: z.int().nullable().exactOptional(),
    HitterName: z.string().nullable().exactOptional(),
    HitterPosition: z.string().nullable().exactOptional(),
    HitterTeamID: z.int().nullable().exactOptional(),
    HomeTeamRuns: z.int().nullable().exactOptional(),
    InningBatterNumber: z.int().nullable().exactOptional(),
    InningHalf: z.string().nullable().exactOptional(),
    InningID: z.int().exactOptional(),
    InningNumber: z.int().nullable().exactOptional(),
    NumberOfOutsOnPlay: z.int().nullable().exactOptional(),
    Out: z.boolean().nullable().exactOptional(),
    Outs: z.int().nullable().exactOptional(),
    PitchNumberThisAtBat: z.int().nullable().exactOptional(),
    PitcherID: z.int().nullable().exactOptional(),
    PitcherName: z.string().nullable().exactOptional(),
    PitcherTeamID: z.int().nullable().exactOptional(),
    PitcherThrowHand: z.string().nullable().exactOptional(),
    Pitches: z.array(PitchSchema).exactOptional(),
    PlayID: z.int().exactOptional(),
    PlayNumber: z.int().nullable().exactOptional(),
    Result: z.string().nullable().exactOptional(),
    Runner1ID: z.int().nullable().exactOptional(),
    Runner2ID: z.int().nullable().exactOptional(),
    Runner3ID: z.int().nullable().exactOptional(),
    RunsBattedIn: z.int().nullable().exactOptional(),
    Sacrifice: z.boolean().nullable().exactOptional(),
    Strikeout: z.boolean().nullable().exactOptional(),
    Strikes: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Walk: z.boolean().nullable().exactOptional(),
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
