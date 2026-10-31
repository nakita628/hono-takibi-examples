import { createRoute, z } from '@hono/zod-openapi'

const DfsSlatePlayerSchema = z
  .object({
    OperatorPlayerID: z.string().nullable().exactOptional(),
    OperatorPlayerName: z.string().nullable().exactOptional(),
    OperatorPosition: z.string().nullable().exactOptional(),
    OperatorRosterSlots: z.array(z.string().nullable()).exactOptional(),
    OperatorSalary: z.int().nullable().exactOptional(),
    OperatorSlatePlayerID: z.string().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlayerTournamentProjectionID: z.int().nullable().exactOptional(),
    RemovedByOperator: z.boolean().nullable().exactOptional(),
    SlateID: z.int().exactOptional(),
    SlatePlayerID: z.int().exactOptional(),
    SlateTournamentID: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DfsSlatePlayer')

const RoundSchema = z
  .object({
    Day: z.string().nullable().exactOptional(),
    Number: z.int().nullable().exactOptional(),
    RoundID: z.int().exactOptional(),
    TournamentID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Round')

const TournamentSchema = z
  .object({
    Canceled: z.boolean().nullable().exactOptional(),
    City: z.string().nullable().exactOptional(),
    Country: z.string().nullable().exactOptional(),
    Covered: z.boolean().nullable().exactOptional(),
    EndDate: z.string().nullable().exactOptional(),
    Format: z.string().nullable().exactOptional(),
    IsInProgress: z.boolean().exactOptional(),
    IsOver: z.boolean().exactOptional(),
    Location: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Par: z.int().nullable().exactOptional(),
    Purse: z.number().nullable().exactOptional(),
    Rounds: z.array(RoundSchema).exactOptional(),
    SportRadarTournamentID: z.string().nullable().exactOptional(),
    StartDate: z.string().nullable().exactOptional(),
    StartDateTime: z.string().nullable().exactOptional(),
    State: z.string().nullable().exactOptional(),
    TimeZone: z.string().nullable().exactOptional(),
    TournamentID: z.int().exactOptional(),
    Venue: z.string().nullable().exactOptional(),
    Yards: z.int().nullable().exactOptional(),
    ZipCode: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tournament')

const DfsSlateTournamentSchema = z
  .object({
    OperatorTournamentID: z.int().nullable().exactOptional(),
    RemovedByOperator: z.boolean().nullable().exactOptional(),
    SlateID: z.int().exactOptional(),
    SlateTournamentID: z.int().exactOptional(),
    Tournament: TournamentSchema.exactOptional(),
    TournamentID: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DfsSlateTournament')

const DfsSlateSchema = z
  .object({
    DfsSlatePlayers: z.array(DfsSlatePlayerSchema).exactOptional(),
    DfsSlateTournaments: z.array(DfsSlateTournamentSchema).exactOptional(),
    IsMultiDaySlate: z.boolean().nullable().exactOptional(),
    NumberOfTournaments: z.int().nullable().exactOptional(),
    Operator: z.string().nullable().exactOptional(),
    OperatorDay: z.string().nullable().exactOptional(),
    OperatorGameType: z.string().nullable().exactOptional(),
    OperatorName: z.string().nullable().exactOptional(),
    OperatorSlateID: z.int().nullable().exactOptional(),
    OperatorStartTime: z.string().nullable().exactOptional(),
    RemovedByOperator: z.boolean().nullable().exactOptional(),
    SlateID: z.int().exactOptional(),
    SlateRosterSlots: z.array(z.string().nullable()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DfsSlate')

const InjurySchema = z
  .object({
    Active: z.boolean().exactOptional(),
    BodyPart: z.string().nullable().exactOptional(),
    ExpectedReturn: z.string().nullable().exactOptional(),
    InjuryID: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    StartDate: z.string().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Injury')

const PlayerHoleSchema = z
  .object({
    Birdie: z.boolean().exactOptional(),
    Bogey: z.boolean().exactOptional(),
    DoubleBogey: z.boolean().exactOptional(),
    DoubleEagle: z.boolean().exactOptional(),
    Eagle: z.boolean().exactOptional(),
    HoleInOne: z.boolean().exactOptional(),
    IsPar: z.boolean().exactOptional(),
    Number: z.int().nullable().exactOptional(),
    Par: z.int().nullable().exactOptional(),
    PlayerRoundID: z.int().exactOptional(),
    Score: z.int().nullable().exactOptional(),
    ToPar: z.int().nullable().exactOptional(),
    WorseThanDoubleBogey: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerHole')

const PlayerRoundSchema = z
  .object({
    BackNineStart: z.boolean().nullable().exactOptional(),
    Birdies: z.int().nullable().exactOptional(),
    BogeyFree: z.boolean().exactOptional(),
    Bogeys: z.int().nullable().exactOptional(),
    BounceBackCount: z.number().nullable().exactOptional(),
    ConsecutiveBirdieOrBetterCount: z.number().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DoubleBogeys: z.int().nullable().exactOptional(),
    DoubleEagles: z.int().nullable().exactOptional(),
    Eagles: z.int().nullable().exactOptional(),
    HoleInOnes: z.int().nullable().exactOptional(),
    Holes: z.array(PlayerHoleSchema).exactOptional(),
    IncludesFiveOrMoreBirdiesOrBetter: z.boolean().exactOptional(),
    IncludesStreakOfFiveBirdiesOrBetter: z.boolean().exactOptional(),
    IncludesStreakOfFourBirdiesOrBetter: z.boolean().exactOptional(),
    IncludesStreakOfSixBirdiesOrBetter: z.boolean().exactOptional(),
    IncludesStreakOfThreeBirdiesOrBetter: z.boolean().exactOptional(),
    LongestBirdieOrBetterStreak: z.number().nullable().exactOptional(),
    Number: z.int().nullable().exactOptional(),
    Par: z.int().nullable().exactOptional(),
    Pars: z.int().nullable().exactOptional(),
    PlayerRoundID: z.int().exactOptional(),
    PlayerTournamentID: z.int().exactOptional(),
    Score: z.int().nullable().exactOptional(),
    TeeTime: z.string().nullable().exactOptional(),
    TripleBogeys: z.int().nullable().exactOptional(),
    WorseThanDoubleBogey: z.int().nullable().exactOptional(),
    WorseThanTripleBogey: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerRound')

const PlayerTournamentSchema = z
  .object({
    Birdies: z.number().nullable().exactOptional(),
    BogeyFreeRounds: z.number().nullable().exactOptional(),
    Bogeys: z.number().nullable().exactOptional(),
    BounceBackCount: z.number().nullable().exactOptional(),
    ConsecutiveBirdieOrBetterCount: z.number().nullable().exactOptional(),
    Country: z.string().nullable().exactOptional(),
    DoubleBogeys: z.number().nullable().exactOptional(),
    DoubleEagles: z.number().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    Eagles: z.number().nullable().exactOptional(),
    Earnings: z.number().nullable().exactOptional(),
    FanDuelSalary: z.int().nullable().exactOptional(),
    FantasyDraftSalary: z.int().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FedExPoints: z.int().nullable().exactOptional(),
    HoleInOnes: z.number().nullable().exactOptional(),
    IsAlternate: z.boolean().nullable().exactOptional(),
    IsWithdrawn: z.boolean().exactOptional(),
    MadeCut: z.number().nullable().exactOptional(),
    MadeCutDidNotFinish: z.boolean().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OddsToWin: z.number().nullable().exactOptional(),
    OddsToWinDescription: z.string().nullable().exactOptional(),
    Pars: z.number().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    PlayerTournamentID: z.int().exactOptional(),
    Rank: z.int().nullable().exactOptional(),
    Rounds: z.array(PlayerRoundSchema).exactOptional(),
    RoundsUnderSeventy: z.number().nullable().exactOptional(),
    RoundsWithFiveOrMoreBirdiesOrBetter: z.number().nullable().exactOptional(),
    StreaksOfFiveBirdiesOrBetter: z.number().nullable().exactOptional(),
    StreaksOfFourBirdiesOrBetter: z.number().nullable().exactOptional(),
    StreaksOfSixBirdiesOrBetter: z.number().nullable().exactOptional(),
    StreaksOfThreeBirdiesOrBetter: z.number().nullable().exactOptional(),
    TeeTime: z.string().nullable().exactOptional(),
    TotalScore: z.number().nullable().exactOptional(),
    TotalStrokes: z.number().nullable().exactOptional(),
    TotalThrough: z.int().nullable().exactOptional(),
    TournamentID: z.int().exactOptional(),
    TournamentStatus: z.string().nullable().exactOptional(),
    TripleBogeys: z.number().nullable().exactOptional(),
    Win: z.number().nullable().exactOptional(),
    WorseThanDoubleBogey: z.number().nullable().exactOptional(),
    WorseThanTripleBogey: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerTournament')

const LeaderboardSchema = z
  .object({
    Players: z.array(PlayerTournamentSchema).exactOptional(),
    Tournament: TournamentSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Leaderboard')

const NewsSchema = z
  .object({
    Author: z.string().nullable().exactOptional(),
    Categories: z.string().nullable().exactOptional(),
    Content: z.string().nullable().exactOptional(),
    NewsID: z.int().exactOptional(),
    OriginalSource: z.string().nullable().exactOptional(),
    OriginalSourceUrl: z.string().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Source: z.string().nullable().exactOptional(),
    TermsOfUse: z.string().nullable().exactOptional(),
    Title: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('News')

const PlayerSchema = z
  .object({
    BirthCity: z.string().nullable().exactOptional(),
    BirthDate: z.string().nullable().exactOptional(),
    BirthState: z.string().nullable().exactOptional(),
    College: z.string().nullable().exactOptional(),
    Country: z.string().nullable().exactOptional(),
    DraftKingsName: z.string().nullable().exactOptional(),
    DraftKingsPlayerID: z.int().nullable().exactOptional(),
    FanDuelName: z.string().nullable().exactOptional(),
    FanDuelPlayerID: z.int().nullable().exactOptional(),
    FantasyAlarmPlayerID: z.int().nullable().exactOptional(),
    FantasyDraftName: z.string().nullable().exactOptional(),
    FantasyDraftPlayerID: z.int().nullable().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    PgaDebut: z.int().nullable().exactOptional(),
    PgaTourPlayerID: z.int().nullable().exactOptional(),
    PhotoUrl: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    RotoWirePlayerID: z.int().nullable().exactOptional(),
    RotoworldPlayerID: z.int().nullable().exactOptional(),
    SportRadarPlayerID: z.string().nullable().exactOptional(),
    Swings: z.string().nullable().exactOptional(),
    Weight: z.int().nullable().exactOptional(),
    YahooPlayerID: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Player')

const PlayerSeasonSchema = z
  .object({
    AveragePoints: z.number().nullable().exactOptional(),
    Events: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    PlayerSeasonID: z.int().exactOptional(),
    PointsGained: z.number().nullable().exactOptional(),
    PointsLost: z.number().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    TotalPoints: z.number().nullable().exactOptional(),
    WorldGolfRank: z.int().nullable().exactOptional(),
    WorldGolfRankLastWeek: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerSeason')

const PlayerTournamentProjectionSchema = z
  .object({
    Birdies: z.number().nullable().exactOptional(),
    BogeyFreeRounds: z.number().nullable().exactOptional(),
    Bogeys: z.number().nullable().exactOptional(),
    BounceBackCount: z.number().nullable().exactOptional(),
    ConsecutiveBirdieOrBetterCount: z.number().nullable().exactOptional(),
    Country: z.string().nullable().exactOptional(),
    DoubleBogeys: z.number().nullable().exactOptional(),
    DoubleEagles: z.number().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    Eagles: z.number().nullable().exactOptional(),
    Earnings: z.number().nullable().exactOptional(),
    FanDuelSalary: z.int().nullable().exactOptional(),
    FantasyDraftSalary: z.int().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FedExPoints: z.int().nullable().exactOptional(),
    HoleInOnes: z.number().nullable().exactOptional(),
    IsAlternate: z.boolean().nullable().exactOptional(),
    IsWithdrawn: z.boolean().exactOptional(),
    MadeCut: z.number().nullable().exactOptional(),
    MadeCutDidNotFinish: z.boolean().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OddsToWin: z.number().nullable().exactOptional(),
    OddsToWinDescription: z.string().nullable().exactOptional(),
    Pars: z.number().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    PlayerTournamentID: z.int().exactOptional(),
    Rank: z.int().nullable().exactOptional(),
    Rounds: z.array(PlayerRoundSchema).exactOptional(),
    RoundsUnderSeventy: z.number().nullable().exactOptional(),
    RoundsWithFiveOrMoreBirdiesOrBetter: z.number().nullable().exactOptional(),
    StreaksOfFiveBirdiesOrBetter: z.number().nullable().exactOptional(),
    StreaksOfFourBirdiesOrBetter: z.number().nullable().exactOptional(),
    StreaksOfSixBirdiesOrBetter: z.number().nullable().exactOptional(),
    StreaksOfThreeBirdiesOrBetter: z.number().nullable().exactOptional(),
    TeeTime: z.string().nullable().exactOptional(),
    TotalScore: z.number().nullable().exactOptional(),
    TotalStrokes: z.number().nullable().exactOptional(),
    TotalThrough: z.int().nullable().exactOptional(),
    TournamentID: z.int().exactOptional(),
    TournamentStatus: z.string().nullable().exactOptional(),
    TripleBogeys: z.number().nullable().exactOptional(),
    Win: z.number().nullable().exactOptional(),
    WorseThanDoubleBogey: z.number().nullable().exactOptional(),
    WorseThanTripleBogey: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerTournamentProjection')

const SeasonSchema = z
  .object({
    Description: z.string().nullable().exactOptional(),
    EndDate: z.string().nullable().exactOptional(),
    SeasonID: z.int().exactOptional(),
    StartDate: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Season')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

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

export const getFormatDfsSlatesByTournamentTournamentidRoute = createRoute({
  method: 'get',
  path: '/{format}/DfsSlatesByTournament/{tournamentid}',
  summary: 'DFS Slates',
  operationId: 'DfsSlates',
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
      tournamentid: z
        .string()
        .openapi({
          param: {
            description:
              'The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.',
            in: 'path',
            name: 'tournamentid',
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

export const getFormatInjuriesRoute = createRoute({
  method: 'get',
  path: '/{format}/Injuries',
  summary: 'Injuries',
  operationId: 'Injuries',
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
    200: { description: '', content: { 'application/json': { schema: z.array(InjurySchema) } } },
  },
})

export const getFormatInjuriesByHistoricalRoute = createRoute({
  method: 'get',
  path: '/{format}/InjuriesByHistorical',
  summary: 'Injuries (Historical)',
  operationId: 'InjuriesHistorical',
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
    200: { description: '', content: { 'application/json': { schema: z.array(InjurySchema) } } },
  },
})

export const getFormatLeaderboardTournamentidRoute = createRoute({
  method: 'get',
  path: '/{format}/Leaderboard/{tournamentid}',
  summary: 'Leaderboard',
  operationId: 'Leaderboard',
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
      tournamentid: z
        .string()
        .openapi({
          param: {
            description:
              'The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.',
            in: 'path',
            name: 'tournamentid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: LeaderboardSchema } } },
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
            description: 'Unique FantasyData Player ID.\nExample:<code>40000019</code>.',
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
  summary: 'Player',
  operationId: 'Player',
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
            description: 'Unique FantasyData Player ID.\nExample:<code>40000019</code>.',
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

export const getFormatPlayerSeasonStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonStats/{season}',
  summary: 'Player Season Stats (w/ World Golf Rankings)',
  operationId: 'PlayerSeasonStatsWWorldGolfRankings',
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
            description: 'Year of the season.\n<br>Examples: <code>2016</code>, <code>2017</code>.',
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
      content: { 'application/json': { schema: z.array(PlayerSeasonSchema) } },
    },
  },
})

export const getFormatPlayerTournamentProjectionStatsTournamentidRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerTournamentProjectionStats/{tournamentid}',
  summary: 'Player Tournament Projected Stats (w/ DraftKings Salaries)',
  operationId: 'PlayerTournamentProjectedStatsWDraftkingsSalaries',
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
      tournamentid: z
        .string()
        .openapi({
          param: {
            description:
              'The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>78</code>, <code>79</code>, <code>80</code>, etc.',
            in: 'path',
            name: 'tournamentid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerTournamentProjectionSchema) } },
    },
  },
})

export const getFormatPlayerTournamentStatsByPlayerTournamentidPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerTournamentStatsByPlayer/{tournamentid}/{playerid}',
  summary: 'Player Tournament Stats By Player',
  operationId: 'PlayerTournamentStatsByPlayer',
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
      tournamentid: z
        .string()
        .openapi({
          param: {
            description:
              'The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.',
            in: 'path',
            name: 'tournamentid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      playerid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Player ID.\nExample:<code>40000019</code>.',
            in: 'path',
            name: 'playerid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PlayerTournamentSchema } } },
  },
})

export const getFormatPlayersRoute = createRoute({
  method: 'get',
  path: '/{format}/Players',
  summary: 'Players',
  operationId: 'Players',
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

export const getFormatTournamentsRoute = createRoute({
  method: 'get',
  path: '/{format}/Tournaments',
  summary: 'Schedule',
  operationId: 'Schedule',
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
      content: { 'application/json': { schema: z.array(TournamentSchema) } },
    },
  },
})

export const getFormatTournamentsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/Tournaments/{season}',
  summary: 'Schedule by Season',
  operationId: 'ScheduleBySeason',
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
            description: 'Year of the season.\n<br>Examples: <code>2016</code>, <code>2017</code>.',
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
      content: { 'application/json': { schema: z.array(TournamentSchema) } },
    },
  },
})
