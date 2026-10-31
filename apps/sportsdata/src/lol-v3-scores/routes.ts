import { createRoute, z } from '@hono/zod-openapi'

const AreaSchema = z
  .object({
    AreaId: z.int().exactOptional(),
    CountryCode: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Area')

const RoundSchema = z
  .object({
    CurrentRound: z.boolean().exactOptional(),
    CurrentWeek: z.int().nullable().exactOptional(),
    EndDate: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    RoundId: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonId: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    StartDate: z.string().nullable().exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Round')

const SeasonSchema = z
  .object({
    CompetitionId: z.int().exactOptional(),
    CompetitionName: z.string().nullable().exactOptional(),
    CurrentSeason: z.boolean().exactOptional(),
    EndDate: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Rounds: z.array(RoundSchema).exactOptional(),
    Season: z.int().exactOptional(),
    SeasonId: z.int().exactOptional(),
    StartDate: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Season')

const CompetitionSchema = z
  .object({
    AreaId: z.int().exactOptional(),
    AreaName: z.string().nullable().exactOptional(),
    CompetitionId: z.int().exactOptional(),
    Format: z.string().nullable().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayerStatsCoverage: z.boolean().nullable().exactOptional(),
    Seasons: z.array(SeasonSchema).exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Competition')

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

const PlayerSchema = z
  .object({
    BirthCity: z.string().nullable().exactOptional(),
    BirthCountry: z.string().nullable().exactOptional(),
    BirthDate: z.string().nullable().exactOptional(),
    CommonName: z.string().nullable().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    MatchName: z.string().nullable().exactOptional(),
    Nationality: z.string().nullable().exactOptional(),
    PlayerId: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Player')

const TeamDetailSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    AreaId: z.int().nullable().exactOptional(),
    AreaName: z.string().nullable().exactOptional(),
    Email: z.string().nullable().exactOptional(),
    Facebook: z.string().nullable().exactOptional(),
    Founded: z.int().nullable().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    Instagram: z.string().nullable().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Players: z.array(PlayerSchema).exactOptional(),
    PrimaryColor: z.string().nullable().exactOptional(),
    QuaternaryColor: z.string().nullable().exactOptional(),
    SecondaryColor: z.string().nullable().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    TeamId: z.int().exactOptional(),
    TertiaryColor: z.string().nullable().exactOptional(),
    Twitter: z.string().nullable().exactOptional(),
    Type: z.string().nullable().exactOptional(),
    Website: z.string().nullable().exactOptional(),
    YouTube: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamDetail')

const CompetitionDetailSchema = z
  .object({
    AreaId: z.int().exactOptional(),
    AreaName: z.string().nullable().exactOptional(),
    CompetitionId: z.int().exactOptional(),
    CurrentSeason: SeasonSchema.exactOptional(),
    Format: z.string().nullable().exactOptional(),
    Games: z.array(GameSchema).exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayerStatsCoverage: z.boolean().nullable().exactOptional(),
    Seasons: z.array(SeasonSchema).exactOptional(),
    Teams: z.array(TeamDetailSchema).exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompetitionDetail')

const MembershipSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    EndDate: z.string().nullable().exactOptional(),
    MembershipId: z.int().exactOptional(),
    PlayerId: z.int().exactOptional(),
    PlayerName: z.string().nullable().exactOptional(),
    StartDate: z.string().nullable().exactOptional(),
    TeamArea: z.string().nullable().exactOptional(),
    TeamId: z.int().exactOptional(),
    TeamName: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Membership')

const TeamSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    AreaId: z.int().nullable().exactOptional(),
    AreaName: z.string().nullable().exactOptional(),
    Email: z.string().nullable().exactOptional(),
    Facebook: z.string().nullable().exactOptional(),
    Founded: z.int().nullable().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    Instagram: z.string().nullable().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PrimaryColor: z.string().nullable().exactOptional(),
    QuaternaryColor: z.string().nullable().exactOptional(),
    SecondaryColor: z.string().nullable().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    TeamId: z.int().exactOptional(),
    TertiaryColor: z.string().nullable().exactOptional(),
    Twitter: z.string().nullable().exactOptional(),
    Type: z.string().nullable().exactOptional(),
    Website: z.string().nullable().exactOptional(),
    YouTube: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Team')

const SeasonTeamSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    SeasonId: z.int().exactOptional(),
    SeasonTeamId: z.int().exactOptional(),
    Team: TeamSchema.exactOptional(),
    TeamId: z.int().exactOptional(),
    TeamName: z.string().nullable().exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeasonTeam')

const StandingSchema = z
  .object({
    Games: z.int().exactOptional(),
    Group: z.string().nullable().exactOptional(),
    Losses: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Order: z.int().nullable().exactOptional(),
    Points: z.int().exactOptional(),
    RoundId: z.int().exactOptional(),
    ScoreAgainst: z.int().exactOptional(),
    ScoreDifference: z.int().exactOptional(),
    ScoreFor: z.int().exactOptional(),
    StandingId: z.int().exactOptional(),
    TeamId: z.int().exactOptional(),
    Wins: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Standing')

const VenueSchema = z
  .object({
    Address: z.string().nullable().exactOptional(),
    Capacity: z.int().nullable().exactOptional(),
    City: z.string().nullable().exactOptional(),
    Country: z.string().nullable().exactOptional(),
    GeoLat: z.number().nullable().exactOptional(),
    GeoLong: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Nickname1: z.string().nullable().exactOptional(),
    Nickname2: z.string().nullable().exactOptional(),
    Open: z.boolean().exactOptional(),
    Opened: z.int().nullable().exactOptional(),
    VenueId: z.int().exactOptional(),
    Zip: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Venue')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getFormatActiveMembershipsRoute = createRoute({
  method: 'get',
  path: '/{format}/ActiveMemberships',
  summary: 'Memberships (Active)',
  description: 'Memberships (Active)',
  operationId: 'MembershipsActive',
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
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MembershipSchema) } },
    },
  },
})

export const getFormatAreasRoute = createRoute({
  method: 'get',
  path: '/{format}/Areas',
  summary: 'Areas (Countries)',
  description: 'Areas (Countries)',
  operationId: 'AreasCountries',
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
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(AreaSchema) } } },
  },
})

export const getFormatCompetitionDetailsCompetitionidRoute = createRoute({
  method: 'get',
  path: '/{format}/CompetitionDetails/{competitionid}',
  summary: 'Competition Fixtures (League Details)',
  description: 'Competition Fixtures (League Details)',
  operationId: 'CompetitionFixturesLeagueDetails',
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
      competitionid: z
        .string()
        .openapi({
          param: {
            description:
              'A LoL competition/league unique CompetitionId. Possible values include: <code>100000009</code>, etc.',
            in: 'path',
            name: 'competitionid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: CompetitionDetailSchema } } },
  },
})

export const getFormatCompetitionsRoute = createRoute({
  method: 'get',
  path: '/{format}/Competitions',
  summary: 'Competitions (Leagues)',
  description: 'Competitions (Leagues)',
  operationId: 'CompetitionsLeagues',
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
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(CompetitionSchema) } },
    },
  },
})

export const getFormatGamesByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/GamesByDate/{date}',
  summary: 'Games by Date',
  description: 'Games by Date',
  operationId: 'GamesByDate',
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
              'The date of the game(s).\n<br>Examples: <code>2018-01-13</code>, <code>2018-06-13</code>.',
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

export const getFormatHistoricalMembershipsRoute = createRoute({
  method: 'get',
  path: '/{format}/HistoricalMemberships',
  summary: 'Memberships (Historical)',
  description: 'Memberships (Historical)',
  operationId: 'MembershipsHistorical',
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
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MembershipSchema) } },
    },
  },
})

export const getFormatHistoricalMembershipsByTeamTeamidRoute = createRoute({
  method: 'get',
  path: '/{format}/HistoricalMembershipsByTeam/{teamid}',
  summary: 'Memberships by Team (Historical)',
  description: 'Memberships by Team (Historical)',
  operationId: 'MembershipsByTeamHistorical',
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
      teamid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Team ID. \nExample:<code>100000001</code>.',
            in: 'path',
            name: 'teamid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MembershipSchema) } },
    },
  },
})

export const getFormatMembershipsByTeamTeamidRoute = createRoute({
  method: 'get',
  path: '/{format}/MembershipsByTeam/{teamid}',
  summary: 'Memberships by Team (Active)',
  description: 'Memberships by Team (Active)',
  operationId: 'MembershipsByTeamActive',
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
      teamid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Team ID. \nExample:<code>100000001</code>.',
            in: 'path',
            name: 'teamid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MembershipSchema) } },
    },
  },
})

export const getFormatPlayerPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/Player/{playerid}',
  summary: 'Player',
  description: 'Player',
  operationId: 'Player',
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
      playerid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Player ID.\nExample:<code>100000576</code>.',
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

export const getFormatPlayersRoute = createRoute({
  method: 'get',
  path: '/{format}/Players',
  summary: 'Players',
  description: 'Players',
  operationId: 'Players',
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
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(PlayerSchema) } } },
  },
})

export const getFormatPlayersByTeamTeamidRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayersByTeam/{teamid}',
  summary: 'Players by Team',
  description: 'Players by Team',
  operationId: 'PlayersByTeam',
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
      teamid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Team ID. \nExample:<code>100000001</code>.',
            in: 'path',
            name: 'teamid',
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

export const getFormatScheduleRoundidRoute = createRoute({
  method: 'get',
  path: '/{format}/Schedule/{roundid}',
  summary: 'Schedule',
  description: 'Schedule',
  operationId: 'Schedule',
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
      roundid: z
        .string()
        .openapi({
          param: {
            description:
              'Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints. \nExamples: <code>100000138</code>, <code>1000001412</code>, etc',
            in: 'path',
            name: 'roundid',
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

export const getFormatSeasonTeamsSeasonidRoute = createRoute({
  method: 'get',
  path: '/{format}/SeasonTeams/{seasonid}',
  summary: 'Season Teams',
  description: 'Season Teams',
  operationId: 'SeasonTeams',
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
      seasonid: z
        .string()
        .openapi({
          param: {
            description:
              'Unique FantasyData Season ID. SeasonIDs can be found in the Competitions and Competition Details endpoints. \nExamples: <code>100000023</code>, <code>100000024</code>, etc',
            in: 'path',
            name: 'seasonid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(SeasonTeamSchema) } },
    },
  },
})

export const getFormatStandingsRoundidRoute = createRoute({
  method: 'get',
  path: '/{format}/Standings/{roundid}',
  summary: 'Standings',
  description: 'Standings',
  operationId: 'Standings',
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
      roundid: z
        .string()
        .openapi({
          param: {
            description:
              'Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints. \nExample: <code>100000138</code>, etc',
            in: 'path',
            name: 'roundid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(StandingSchema) } } },
  },
})

export const getFormatTeamsRoute = createRoute({
  method: 'get',
  path: '/{format}/Teams',
  summary: 'Teams',
  description: 'Teams',
  operationId: 'Teams',
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
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(TeamSchema) } } },
  },
})

export const getFormatVenuesRoute = createRoute({
  method: 'get',
  path: '/{format}/Venues',
  summary: 'Venues',
  description: 'Venues',
  operationId: 'Venues',
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
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(VenueSchema) } } },
  },
})
