import { createRoute, z } from '@hono/zod-openapi'

const TeamSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    ApRank: z.int().nullable().exactOptional(),
    CoachesRank: z.int().nullable().exactOptional(),
    Conference: z.string().nullable().exactOptional(),
    ConferenceID: z.int().nullable().exactOptional(),
    ConferenceLosses: z.int().nullable().exactOptional(),
    ConferenceWins: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayoffRank: z.int().nullable().exactOptional(),
    RankSeason: z.int().nullable().exactOptional(),
    RankSeasonType: z.int().nullable().exactOptional(),
    RankWeek: z.int().nullable().exactOptional(),
    School: z.string().nullable().exactOptional(),
    ShortDisplayName: z.string().nullable().exactOptional(),
    StadiumID: z.int().exactOptional(),
    TeamID: z.int().exactOptional(),
    TeamLogoUrl: z.string().nullable().exactOptional(),
    Wins: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Team')

const ConferenceSchema = z
  .object({
    ConferenceID: z.int().exactOptional(),
    ConferenceName: z.string().nullable().exactOptional(),
    DivisionName: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Teams: z.array(TeamSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Conference')

const PeriodSchema = z
  .object({
    AwayScore: z.int().nullable().exactOptional(),
    GameID: z.int().exactOptional(),
    HomeScore: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    PeriodID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Period')

const StadiumSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    City: z.string().nullable().exactOptional(),
    Dome: z.boolean().exactOptional(),
    GeoLat: z.number().nullable().exactOptional(),
    GeoLong: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    StadiumID: z.int().exactOptional(),
    State: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Stadium')

const GameSchema = z
  .object({
    Attendance: z.int().nullable().exactOptional(),
    AwayPointSpreadPayout: z.int().nullable().exactOptional(),
    AwayRotationNumber: z.int().nullable().exactOptional(),
    AwayTeam: z.string().nullable().exactOptional(),
    AwayTeamID: z.int().exactOptional(),
    AwayTeamMoneyLine: z.int().nullable().exactOptional(),
    AwayTeamName: z.string().nullable().exactOptional(),
    AwayTeamScore: z.int().nullable().exactOptional(),
    Channel: z.string().nullable().exactOptional(),
    Created: z.string().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    DateTimeUTC: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    Distance: z.int().nullable().exactOptional(),
    Down: z.int().nullable().exactOptional(),
    GameEndDateTime: z.string().nullable().exactOptional(),
    GameID: z.int().exactOptional(),
    GlobalAwayTeamID: z.int().exactOptional(),
    GlobalGameID: z.int().exactOptional(),
    GlobalHomeTeamID: z.int().exactOptional(),
    HomePointSpreadPayout: z.int().nullable().exactOptional(),
    HomeRotationNumber: z.int().nullable().exactOptional(),
    HomeTeam: z.string().nullable().exactOptional(),
    HomeTeamID: z.int().exactOptional(),
    HomeTeamMoneyLine: z.int().nullable().exactOptional(),
    HomeTeamName: z.string().nullable().exactOptional(),
    HomeTeamScore: z.int().nullable().exactOptional(),
    IsClosed: z.boolean().exactOptional(),
    NeutralVenue: z.boolean().nullable().exactOptional(),
    OverPayout: z.int().nullable().exactOptional(),
    OverUnder: z.number().nullable().exactOptional(),
    Period: z.string().nullable().exactOptional(),
    Periods: z.array(PeriodSchema).exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    Possession: z.string().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Stadium: StadiumSchema.exactOptional(),
    StadiumID: z.int().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    TimeRemainingMinutes: z.int().nullable().exactOptional(),
    TimeRemainingSeconds: z.int().nullable().exactOptional(),
    Title: z.string().nullable().exactOptional(),
    UnderPayout: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Week: z.int().nullable().exactOptional(),
    YardLine: z.int().nullable().exactOptional(),
    YardLineTerritory: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Game')

const PlayerSchema = z
  .object({
    BirthCity: z.string().nullable().exactOptional(),
    BirthState: z.string().nullable().exactOptional(),
    Class: z.string().nullable().exactOptional(),
    Created: z.string().nullable().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Height: z.int().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    Jersey: z.int().nullable().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Weight: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Player')

const SeasonSchema = z
  .object({
    ApiSeason: z.string().nullable().exactOptional(),
    ApiWeek: z.int().nullable().exactOptional(),
    Description: z.string().nullable().exactOptional(),
    EndYear: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    StartYear: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Season')

const TeamGameSchema = z
  .object({
    AssistedTackles: z.number().nullable().exactOptional(),
    Created: z.string().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    ExtraPointsAttempted: z.number().nullable().exactOptional(),
    ExtraPointsMade: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FieldGoalPercentage: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.number().nullable().exactOptional(),
    FieldGoalsLongestMade: z.number().nullable().exactOptional(),
    FieldGoalsMade: z.number().nullable().exactOptional(),
    FirstDowns: z.int().nullable().exactOptional(),
    FourthDownAttempts: z.int().nullable().exactOptional(),
    FourthDownConversions: z.int().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.number().nullable().exactOptional(),
    Fumbles: z.number().nullable().exactOptional(),
    FumblesLost: z.number().nullable().exactOptional(),
    FumblesRecovered: z.number().nullable().exactOptional(),
    GameID: z.int().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalOpponentID: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.number().nullable().exactOptional(),
    InterceptionReturnYards: z.number().nullable().exactOptional(),
    Interceptions: z.number().nullable().exactOptional(),
    IsGameOver: z.boolean().exactOptional(),
    KickReturnLong: z.number().nullable().exactOptional(),
    KickReturnTouchdowns: z.number().nullable().exactOptional(),
    KickReturnYards: z.number().nullable().exactOptional(),
    KickReturnYardsPerAttempt: z.number().nullable().exactOptional(),
    KickReturns: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    OpponentScore: z.int().nullable().exactOptional(),
    PassesDefended: z.number().nullable().exactOptional(),
    PassingAttempts: z.number().nullable().exactOptional(),
    PassingCompletionPercentage: z.number().nullable().exactOptional(),
    PassingCompletions: z.number().nullable().exactOptional(),
    PassingInterceptions: z.number().nullable().exactOptional(),
    PassingRating: z.number().nullable().exactOptional(),
    PassingTouchdowns: z.number().nullable().exactOptional(),
    PassingYards: z.number().nullable().exactOptional(),
    PassingYardsPerAttempt: z.number().nullable().exactOptional(),
    PassingYardsPerCompletion: z.number().nullable().exactOptional(),
    Penalties: z.int().nullable().exactOptional(),
    PenaltyYards: z.int().nullable().exactOptional(),
    PuntAverage: z.number().nullable().exactOptional(),
    PuntLong: z.number().nullable().exactOptional(),
    PuntReturnLong: z.number().nullable().exactOptional(),
    PuntReturnTouchdowns: z.number().nullable().exactOptional(),
    PuntReturnYards: z.number().nullable().exactOptional(),
    PuntReturnYardsPerAttempt: z.number().nullable().exactOptional(),
    PuntReturns: z.number().nullable().exactOptional(),
    PuntYards: z.number().nullable().exactOptional(),
    Punts: z.number().nullable().exactOptional(),
    QuarterbackHurries: z.number().nullable().exactOptional(),
    ReceivingLong: z.number().nullable().exactOptional(),
    ReceivingTouchdowns: z.number().nullable().exactOptional(),
    ReceivingYards: z.number().nullable().exactOptional(),
    ReceivingYardsPerReception: z.number().nullable().exactOptional(),
    Receptions: z.number().nullable().exactOptional(),
    RushingAttempts: z.number().nullable().exactOptional(),
    RushingLong: z.number().nullable().exactOptional(),
    RushingTouchdowns: z.number().nullable().exactOptional(),
    RushingYards: z.number().nullable().exactOptional(),
    RushingYardsPerAttempt: z.number().nullable().exactOptional(),
    Sacks: z.number().nullable().exactOptional(),
    Score: z.int().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    SoloTackles: z.number().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    TacklesForLoss: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    ThirdDownAttempts: z.int().nullable().exactOptional(),
    ThirdDownConversions: z.int().nullable().exactOptional(),
    TimeOfPossessionMinutes: z.int().nullable().exactOptional(),
    TimeOfPossessionSeconds: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Week: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamGame')

const TeamSeasonSchema = z
  .object({
    AssistedTackles: z.number().nullable().exactOptional(),
    ConferenceLosses: z.int().nullable().exactOptional(),
    ConferencePointsAgainst: z.int().nullable().exactOptional(),
    ConferencePointsFor: z.int().nullable().exactOptional(),
    ConferenceRank: z.int().nullable().exactOptional(),
    ConferenceWins: z.int().nullable().exactOptional(),
    Created: z.string().nullable().exactOptional(),
    DivisionRank: z.int().nullable().exactOptional(),
    ExtraPointsAttempted: z.number().nullable().exactOptional(),
    ExtraPointsMade: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FieldGoalPercentage: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.number().nullable().exactOptional(),
    FieldGoalsLongestMade: z.number().nullable().exactOptional(),
    FieldGoalsMade: z.number().nullable().exactOptional(),
    FirstDowns: z.int().nullable().exactOptional(),
    FourthDownAttempts: z.int().nullable().exactOptional(),
    FourthDownConversions: z.int().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.number().nullable().exactOptional(),
    Fumbles: z.number().nullable().exactOptional(),
    FumblesLost: z.number().nullable().exactOptional(),
    FumblesRecovered: z.number().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    HomeLosses: z.int().nullable().exactOptional(),
    HomeWins: z.int().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.number().nullable().exactOptional(),
    InterceptionReturnYards: z.number().nullable().exactOptional(),
    Interceptions: z.number().nullable().exactOptional(),
    KickReturnLong: z.number().nullable().exactOptional(),
    KickReturnTouchdowns: z.number().nullable().exactOptional(),
    KickReturnYards: z.number().nullable().exactOptional(),
    KickReturnYardsPerAttempt: z.number().nullable().exactOptional(),
    KickReturns: z.number().nullable().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OpponentScore: z.int().nullable().exactOptional(),
    PassesDefended: z.number().nullable().exactOptional(),
    PassingAttempts: z.number().nullable().exactOptional(),
    PassingCompletionPercentage: z.number().nullable().exactOptional(),
    PassingCompletions: z.number().nullable().exactOptional(),
    PassingInterceptions: z.number().nullable().exactOptional(),
    PassingRating: z.number().nullable().exactOptional(),
    PassingTouchdowns: z.number().nullable().exactOptional(),
    PassingYards: z.number().nullable().exactOptional(),
    PassingYardsPerAttempt: z.number().nullable().exactOptional(),
    PassingYardsPerCompletion: z.number().nullable().exactOptional(),
    Penalties: z.int().nullable().exactOptional(),
    PenaltyYards: z.int().nullable().exactOptional(),
    PointsAgainst: z.int().nullable().exactOptional(),
    PointsFor: z.int().nullable().exactOptional(),
    PuntAverage: z.number().nullable().exactOptional(),
    PuntLong: z.number().nullable().exactOptional(),
    PuntReturnLong: z.number().nullable().exactOptional(),
    PuntReturnTouchdowns: z.number().nullable().exactOptional(),
    PuntReturnYards: z.number().nullable().exactOptional(),
    PuntReturnYardsPerAttempt: z.number().nullable().exactOptional(),
    PuntReturns: z.number().nullable().exactOptional(),
    PuntYards: z.number().nullable().exactOptional(),
    Punts: z.number().nullable().exactOptional(),
    QuarterbackHurries: z.number().nullable().exactOptional(),
    ReceivingLong: z.number().nullable().exactOptional(),
    ReceivingTouchdowns: z.number().nullable().exactOptional(),
    ReceivingYards: z.number().nullable().exactOptional(),
    ReceivingYardsPerReception: z.number().nullable().exactOptional(),
    Receptions: z.number().nullable().exactOptional(),
    RoadLosses: z.int().nullable().exactOptional(),
    RoadWins: z.int().nullable().exactOptional(),
    RushingAttempts: z.number().nullable().exactOptional(),
    RushingLong: z.number().nullable().exactOptional(),
    RushingTouchdowns: z.number().nullable().exactOptional(),
    RushingYards: z.number().nullable().exactOptional(),
    RushingYardsPerAttempt: z.number().nullable().exactOptional(),
    Sacks: z.number().nullable().exactOptional(),
    Score: z.int().nullable().exactOptional(),
    Season: z.int().nullable().exactOptional(),
    SeasonType: z.int().nullable().exactOptional(),
    SoloTackles: z.number().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Streak: z.int().nullable().exactOptional(),
    TacklesForLoss: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    ThirdDownAttempts: z.int().nullable().exactOptional(),
    ThirdDownConversions: z.int().nullable().exactOptional(),
    TimeOfPossessionMinutes: z.int().nullable().exactOptional(),
    TimeOfPossessionSeconds: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
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
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
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
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '', content: { 'application/json': { schema: z.int() } } } },
})

export const getFormatCurrentSeasonDetailsRoute = createRoute({
  method: 'get',
  path: '/{format}/CurrentSeasonDetails',
  summary: 'Current Season Details',
  operationId: 'CurrentSeasonDetails',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
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

export const getFormatCurrentSeasonTypeRoute = createRoute({
  method: 'get',
  path: '/{format}/CurrentSeasonType',
  summary: 'Current SeasonType',
  operationId: 'CurrentSeasontype',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.string().nullable() } } },
  },
})

export const getFormatCurrentWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/CurrentWeek',
  summary: 'Current Week',
  operationId: 'CurrentWeek',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.int().nullable() } } },
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
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
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
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
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
              '\n          The date of the game(s).\n          <br>Examples: <code>2016-SEP-01</code>, <code>2017-SEP-10</code>.\n        ',
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

export const getFormatGamesByWeekSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/GamesByWeek/{season}/{week}',
  summary: 'Games by Week',
  operationId: 'GamesByWeek',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
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
              '\n          Year of the season.\n          <br>Examples: <code>2015</code>, <code>2016</code>, etc.\n        ',
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
              '\n          The week of the game(s).\n          <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.\n        ',
            in: 'path',
            name: 'week',
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
    'This endpoint provides all currently injured college football players, along with injury details.',
  operationId: 'InjuredPlayers',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
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
  summary: 'Conference Hierarchy (with Teams)',
  operationId: 'ConferenceHierarchyWithTeams',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
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
  summary: 'Player Details By Player',
  operationId: 'PlayerDetailsByPlayer',
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
      playerid: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Unique FantasyData Player ID.\n          Example:<code>50002016</code>.\n        ',
            in: 'path',
            name: 'playerid',
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

export const getFormatPlayersRoute = createRoute({
  method: 'get',
  path: '/{format}/Players',
  summary: 'Player Details By Active',
  operationId: 'PlayerDetailsByActive',
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
      team: z
        .string()
        .openapi({
          param: {
            description:
              '\n          The abbreviation of the requested team.\n          <br>Examples: <code>SF</code>, <code>NYY</code>.\n        ',
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
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
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
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
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
              'Season to get games from. Example <code>2019POST</code>, <code>2020</code>        ',
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

export const getFormatTeamGameStatsByWeekSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/TeamGameStatsByWeek/{season}/{week}',
  summary: 'Team Game Stats by Week',
  operationId: 'TeamGameStatsByWeek',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
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
              '\n          Year of the season.\n          <br>Examples: <code>2015</code>, <code>2016</code>, etc.\n        ',
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
              '\n          The week of the game(s).\n          <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.\n        ',
            in: 'path',
            name: 'week',
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
  summary: 'Team Season Stats & Standings',
  operationId: 'TeamSeasonStatsStandings',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
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
              'Year of the season (with optional season type).<br>Examples: <code>2017</code>, <code>2017POST</code>, <code>2018</code>.',
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
  path: '/{format}/Teams',
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
              'Desired response format. Valid entries are <code>xml</code> or <code>json</code>.',
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
