import { createRoute, z } from '@hono/zod-openapi'

const PlayStatSchema = z
  .object({
    AssistedTackles: z.int().nullable().exactOptional(),
    BlockedKickReturnTouchdowns: z.int().nullable().exactOptional(),
    BlockedKickReturnYards: z.int().nullable().exactOptional(),
    BlockedKickReturns: z.int().nullable().exactOptional(),
    BlockedKicks: z.int().nullable().exactOptional(),
    Created: z.string().nullable().exactOptional(),
    Direction: z.string().nullable().exactOptional(),
    ExtraPointsAttempted: z.int().nullable().exactOptional(),
    ExtraPointsHadBlocked: z.int().nullable().exactOptional(),
    ExtraPointsMade: z.int().nullable().exactOptional(),
    FieldGoalReturnTouchdowns: z.int().nullable().exactOptional(),
    FieldGoalReturnYards: z.int().nullable().exactOptional(),
    FieldGoalReturns: z.int().nullable().exactOptional(),
    FieldGoalsAttempted: z.int().nullable().exactOptional(),
    FieldGoalsHadBlocked: z.int().nullable().exactOptional(),
    FieldGoalsMade: z.int().nullable().exactOptional(),
    FieldGoalsYards: z.int().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.int().nullable().exactOptional(),
    FumbleReturnYards: z.int().nullable().exactOptional(),
    Fumbles: z.int().nullable().exactOptional(),
    FumblesForced: z.int().nullable().exactOptional(),
    FumblesLost: z.int().nullable().exactOptional(),
    FumblesRecovered: z.int().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.int().nullable().exactOptional(),
    InterceptionReturnYards: z.int().nullable().exactOptional(),
    Interceptions: z.int().nullable().exactOptional(),
    KickReturnTouchdowns: z.int().nullable().exactOptional(),
    KickReturnYards: z.int().nullable().exactOptional(),
    KickReturns: z.int().nullable().exactOptional(),
    KickoffTouchbacks: z.int().nullable().exactOptional(),
    KickoffYards: z.int().nullable().exactOptional(),
    Kickoffs: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    PassesDefended: z.int().nullable().exactOptional(),
    PassingAttempts: z.int().nullable().exactOptional(),
    PassingCompletions: z.int().nullable().exactOptional(),
    PassingInterceptions: z.int().nullable().exactOptional(),
    PassingSackYards: z.int().nullable().exactOptional(),
    PassingSacks: z.int().nullable().exactOptional(),
    PassingTouchdowns: z.int().nullable().exactOptional(),
    PassingYards: z.int().nullable().exactOptional(),
    Penalties: z.int().nullable().exactOptional(),
    PenaltyYards: z.int().nullable().exactOptional(),
    PlayID: z.int().exactOptional(),
    PlayStatID: z.int().exactOptional(),
    PlayerID: z.int().exactOptional(),
    PuntReturnTouchdowns: z.int().nullable().exactOptional(),
    PuntReturnYards: z.int().nullable().exactOptional(),
    PuntReturns: z.int().nullable().exactOptional(),
    PuntTouchbacks: z.int().nullable().exactOptional(),
    PuntYards: z.int().nullable().exactOptional(),
    Punts: z.int().nullable().exactOptional(),
    PuntsHadBlocked: z.int().nullable().exactOptional(),
    ReceivingTargets: z.int().nullable().exactOptional(),
    ReceivingTouchdowns: z.int().nullable().exactOptional(),
    ReceivingYards: z.int().nullable().exactOptional(),
    Receptions: z.int().nullable().exactOptional(),
    RushingAttempts: z.int().nullable().exactOptional(),
    RushingTouchdowns: z.int().nullable().exactOptional(),
    RushingYards: z.int().nullable().exactOptional(),
    SackYards: z.number().nullable().exactOptional(),
    Sacks: z.number().nullable().exactOptional(),
    Safeties: z.int().nullable().exactOptional(),
    Sequence: z.int().exactOptional(),
    SoloTackles: z.int().nullable().exactOptional(),
    TacklesForLoss: z.int().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TwoPointConversionAttempts: z.int().nullable().exactOptional(),
    TwoPointConversionPasses: z.int().nullable().exactOptional(),
    TwoPointConversionReceptions: z.int().nullable().exactOptional(),
    TwoPointConversionReturns: z.int().nullable().exactOptional(),
    TwoPointConversionRuns: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayStat')

const ScoringPlaySchema = z
  .object({
    AwayScore: z.int().nullable().exactOptional(),
    AwayTeam: z.string().nullable().exactOptional(),
    Date: z.string().nullable().exactOptional(),
    GameKey: z.string().nullable().exactOptional(),
    HomeScore: z.int().nullable().exactOptional(),
    HomeTeam: z.string().nullable().exactOptional(),
    PlayDescription: z.string().nullable().exactOptional(),
    Quarter: z.string().nullable().exactOptional(),
    ScoreID: z.int().exactOptional(),
    ScoringPlayID: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Sequence: z.int().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TimeRemaining: z.string().nullable().exactOptional(),
    Week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScoringPlay')

type PlayType = {
  Created?: string | null
  Description?: string | null
  Distance?: number | null
  Down?: number | null
  IsScoringPlay?: boolean | null
  Opponent?: string | null
  PlayID?: number
  PlayStats?: z.infer<typeof PlayStatSchema>[]
  PlayTime?: string | null
  QuarterID?: number
  QuarterName?: string | null
  ScoringPlay?: z.infer<typeof ScoringPlaySchema>
  Sequence?: number | null
  Team?: string | null
  TimeRemainingMinutes?: number | null
  TimeRemainingSeconds?: number | null
  Type?: string | null
  Updated?: string | null
  YardLine?: number | null
  YardLineTerritory?: string | null
  YardsGained?: number | null
  YardsToEndZone?: number | null
}

const PlaySchema: z.ZodType<PlayType> = z
  .lazy(() =>
    z
      .object({
        Created: z.string().nullable().exactOptional(),
        Description: z.string().nullable().exactOptional(),
        Distance: z.int().nullable().exactOptional(),
        Down: z.int().nullable().exactOptional(),
        IsScoringPlay: z.boolean().nullable().exactOptional(),
        Opponent: z.string().nullable().exactOptional(),
        PlayID: z.int().exactOptional(),
        PlayStats: z.array(PlayStatSchema).exactOptional(),
        PlayTime: z.string().nullable().exactOptional(),
        QuarterID: z.int().exactOptional(),
        QuarterName: z.string().nullable().exactOptional(),
        ScoringPlay: ScoringPlaySchema.exactOptional(),
        Sequence: z.int().nullable().exactOptional(),
        Team: z.string().nullable().exactOptional(),
        TimeRemainingMinutes: z.int().nullable().exactOptional(),
        TimeRemainingSeconds: z.int().nullable().exactOptional(),
        Type: z.string().nullable().exactOptional(),
        Updated: z.string().nullable().exactOptional(),
        YardLine: z.int().nullable().exactOptional(),
        YardLineTerritory: z.string().nullable().exactOptional(),
        YardsGained: z.int().nullable().exactOptional(),
        YardsToEndZone: z.int().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Play')

const QuarterSchema = z
  .object({
    AwayTeamScore: z.int().nullable().exactOptional(),
    Created: z.string().nullable().exactOptional(),
    Description: z.string().nullable().exactOptional(),
    HomeTeamScore: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    QuarterID: z.int().exactOptional(),
    ScoreID: z.int().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Quarter')

const StadiumSchema = z
  .object({
    Capacity: z.int().nullable().exactOptional(),
    City: z.string().nullable().exactOptional(),
    Country: z.string().nullable().exactOptional(),
    GeoLat: z.number().nullable().exactOptional(),
    GeoLong: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayingSurface: z.string().nullable().exactOptional(),
    StadiumID: z.int().exactOptional(),
    State: z.string().nullable().exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Stadium')

const ScoreSchema = z
  .object({
    Attendance: z.int().exactOptional(),
    AwayRotationNumber: z.int().nullable().exactOptional(),
    AwayScore: z.int().nullable().exactOptional(),
    AwayScoreOvertime: z.int().nullable().exactOptional(),
    AwayScoreQuarter1: z.int().nullable().exactOptional(),
    AwayScoreQuarter2: z.int().nullable().exactOptional(),
    AwayScoreQuarter3: z.int().nullable().exactOptional(),
    AwayScoreQuarter4: z.int().nullable().exactOptional(),
    AwayTeam: z.string().nullable().exactOptional(),
    AwayTeamID: z.int().nullable().exactOptional(),
    AwayTeamMoneyLine: z.int().nullable().exactOptional(),
    AwayTimeouts: z.int().nullable().exactOptional(),
    Canceled: z.boolean().nullable().exactOptional(),
    Channel: z.string().nullable().exactOptional(),
    Closed: z.boolean().nullable().exactOptional(),
    Date: z.string().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    DateTimeUTC: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    Distance: z.string().nullable().exactOptional(),
    Down: z.int().nullable().exactOptional(),
    DownAndDistance: z.string().nullable().exactOptional(),
    ForecastDescription: z.string().nullable().exactOptional(),
    ForecastTempHigh: z.int().nullable().exactOptional(),
    ForecastTempLow: z.int().nullable().exactOptional(),
    ForecastWindChill: z.int().nullable().exactOptional(),
    ForecastWindSpeed: z.int().nullable().exactOptional(),
    GameEndDateTime: z.string().nullable().exactOptional(),
    GameKey: z.string().nullable().exactOptional(),
    GeoLat: z.number().nullable().exactOptional(),
    GeoLong: z.number().nullable().exactOptional(),
    GlobalAwayTeamID: z.int().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalHomeTeamID: z.int().nullable().exactOptional(),
    Has1stQuarterStarted: z.boolean().exactOptional(),
    Has2ndQuarterStarted: z.boolean().exactOptional(),
    Has3rdQuarterStarted: z.boolean().exactOptional(),
    Has4thQuarterStarted: z.boolean().exactOptional(),
    HasStarted: z.boolean().exactOptional(),
    HomeRotationNumber: z.int().nullable().exactOptional(),
    HomeScore: z.int().nullable().exactOptional(),
    HomeScoreOvertime: z.int().nullable().exactOptional(),
    HomeScoreQuarter1: z.int().nullable().exactOptional(),
    HomeScoreQuarter2: z.int().nullable().exactOptional(),
    HomeScoreQuarter3: z.int().nullable().exactOptional(),
    HomeScoreQuarter4: z.int().nullable().exactOptional(),
    HomeTeam: z.string().nullable().exactOptional(),
    HomeTeamID: z.int().nullable().exactOptional(),
    HomeTeamMoneyLine: z.int().nullable().exactOptional(),
    HomeTimeouts: z.int().nullable().exactOptional(),
    IsInProgress: z.boolean().exactOptional(),
    IsOver: z.boolean().exactOptional(),
    IsOvertime: z.boolean().exactOptional(),
    LastPlay: z.string().nullable().exactOptional(),
    LastUpdated: z.string().nullable().exactOptional(),
    NeutralVenue: z.boolean().nullable().exactOptional(),
    OverPayout: z.int().nullable().exactOptional(),
    OverUnder: z.number().nullable().exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    PointSpreadAwayTeamMoneyLine: z.int().nullable().exactOptional(),
    PointSpreadHomeTeamMoneyLine: z.int().nullable().exactOptional(),
    Possession: z.string().nullable().exactOptional(),
    Quarter: z.string().nullable().exactOptional(),
    QuarterDescription: z.string().nullable().exactOptional(),
    RedZone: z.string().nullable().exactOptional(),
    RefereeID: z.int().nullable().exactOptional(),
    ScoreID: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    StadiumDetails: StadiumSchema.exactOptional(),
    StadiumID: z.int().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    TimeRemaining: z.string().nullable().exactOptional(),
    UnderPayout: z.int().nullable().exactOptional(),
    Week: z.int().exactOptional(),
    YardLine: z.int().nullable().exactOptional(),
    YardLineTerritory: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Score')

const PlayByPlaySchema = z
  .object({
    Plays: z.array(PlaySchema).exactOptional(),
    Quarters: z.array(QuarterSchema).exactOptional(),
    Score: ScoreSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayByPlay')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getFormatPlayByPlaySeasonWeekHometeamRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayByPlay/{season}/{week}/{hometeam}',
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
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      hometeam: z
        .string()
        .openapi({
          param: {
            description: 'Abbreviation of the home team. Example: <code>WAS</code>.',
            in: 'path',
            name: 'hometeam',
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

export const getFormatPlayByPlayDeltaSeasonWeekMinutesRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayByPlayDelta/{season}/{week}/{minutes}',
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
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      minutes: z
        .string()
        .openapi({
          param: {
            description:
              'Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br>\n          <code>1</code> or <code>2</code>.\n        ',
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

export const getFormatSimulatedPlayByPlayNumberofplaysRoute = createRoute({
  method: 'get',
  path: '/{format}/SimulatedPlayByPlay/{numberofplays}',
  summary: 'Play By Play Simulation',
  description:
    'Gets simulated live play-by-play of NFL games, covering the Conference Championship games on January 21, 2018.',
  operationId: 'PlayByPlaySimulation',
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
      numberofplays: z
        .string()
        .openapi({
          param: {
            description:
              'The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.',
            in: 'path',
            name: 'numberofplays',
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
