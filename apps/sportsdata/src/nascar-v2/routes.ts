import { createRoute, z } from '@hono/zod-openapi'

const DriverSchema = z
  .object({
    BirthDate: z.string().nullable().exactOptional(),
    BirthPlace: z.string().nullable().exactOptional(),
    Chassis: z.string().nullable().exactOptional(),
    Created: z.string().nullable().exactOptional(),
    CrewChief: z.string().nullable().exactOptional(),
    DriverID: z.int().exactOptional(),
    Engine: z.string().nullable().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    Height: z.int().nullable().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    Manufacturer: z.string().nullable().exactOptional(),
    Number: z.int().nullable().exactOptional(),
    NumberDisplay: z.string().nullable().exactOptional(),
    PhotoUrl: z.string().nullable().exactOptional(),
    Sponsors: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Weight: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Driver')

const DriverRaceSchema = z
  .object({
    Bonus: z.number().nullable().exactOptional(),
    Created: z.string().nullable().exactOptional(),
    CurrentPosition: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    DriverID: z.int().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FastestLaps: z.number().nullable().exactOptional(),
    FinalPosition: z.number().nullable().exactOptional(),
    Laps: z.number().nullable().exactOptional(),
    LapsLed: z.number().nullable().exactOptional(),
    Manufacturer: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().nullable().exactOptional(),
    NumberDisplay: z.string().nullable().exactOptional(),
    Penalty: z.number().nullable().exactOptional(),
    Points: z.number().nullable().exactOptional(),
    PoleFinalPosition: z.number().nullable().exactOptional(),
    Poles: z.number().nullable().exactOptional(),
    PositionDifferential: z.number().nullable().exactOptional(),
    QualifyingSpeed: z.number().nullable().exactOptional(),
    RaceID: z.int().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    StartPosition: z.number().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Wins: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DriverRace')

const DriverRaceProjectionSchema = z
  .object({
    Bonus: z.number().nullable().exactOptional(),
    Created: z.string().nullable().exactOptional(),
    CurrentPosition: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    DriverID: z.int().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FastestLaps: z.number().nullable().exactOptional(),
    FinalPosition: z.number().nullable().exactOptional(),
    Laps: z.number().nullable().exactOptional(),
    LapsLed: z.number().nullable().exactOptional(),
    Manufacturer: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().nullable().exactOptional(),
    NumberDisplay: z.string().nullable().exactOptional(),
    Penalty: z.number().nullable().exactOptional(),
    Points: z.number().nullable().exactOptional(),
    PoleFinalPosition: z.number().nullable().exactOptional(),
    Poles: z.number().nullable().exactOptional(),
    PositionDifferential: z.number().nullable().exactOptional(),
    QualifyingSpeed: z.number().nullable().exactOptional(),
    RaceID: z.int().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    StartPosition: z.number().nullable().exactOptional(),
    StatID: z.int().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Wins: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DriverRaceProjection')

const RaceSchema = z
  .object({
    ActualLaps: z.int().nullable().exactOptional(),
    Broadcast: z.string().nullable().exactOptional(),
    Canceled: z.boolean().exactOptional(),
    Created: z.string().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    IsInProgress: z.boolean().exactOptional(),
    IsOver: z.boolean().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PoleWinnerID: z.int().nullable().exactOptional(),
    RaceID: z.int().exactOptional(),
    RescheduledDateTime: z.string().nullable().exactOptional(),
    RescheduledDay: z.string().nullable().exactOptional(),
    ScheduledLaps: z.int().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeriesID: z.int().exactOptional(),
    SeriesName: z.string().nullable().exactOptional(),
    Track: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    WinnerID: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Race')

const RaceResultSchema = z
  .object({
    DriverRaces: z.array(DriverRaceSchema).exactOptional(),
    Race: RaceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RaceResult')

const SeriesSchema = z
  .object({ Name: z.string().nullable().exactOptional(), SeriesID: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('Series')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getFormatDriverRaceProjectionsRaceidRoute = createRoute({
  method: 'get',
  path: '/{format}/DriverRaceProjections/{raceid}',
  summary: 'Driver Race Projections (Entry List)',
  operationId: 'DriverRaceProjectionsEntryList',
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
      raceid: z
        .string()
        .openapi({
          param: {
            description:
              'Unique FantasyData Race ID.\nExample:<code>1</code>, <code>2</code>, etc.',
            in: 'path',
            name: 'raceid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(DriverRaceProjectionSchema) } },
    },
  },
})

export const getFormatDriverDriveridRoute = createRoute({
  method: 'get',
  path: '/{format}/driver/{driverid}',
  summary: 'Driver Details',
  operationId: 'DriverDetails',
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
      driverid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Driver ID.\nExample:<code>80000268</code>.',
            in: 'path',
            name: 'driverid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: DriverSchema } } },
  },
})

export const getFormatDriversRoute = createRoute({
  method: 'get',
  path: '/{format}/drivers',
  summary: 'Drivers',
  operationId: 'Drivers',
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
    200: { description: '', content: { 'application/json': { schema: z.array(DriverSchema) } } },
  },
})

export const getFormatRaceresultRaceidRoute = createRoute({
  method: 'get',
  path: '/{format}/raceresult/{raceid}',
  summary: 'Race Results',
  operationId: 'RaceResults',
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
      raceid: z
        .string()
        .openapi({
          param: {
            description:
              'Unique FantasyData Race ID.\nExample:<code>1</code>, <code>2</code>, etc.',
            in: 'path',
            name: 'raceid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RaceResultSchema } } },
  },
})

export const getFormatRacesSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/races/{season}',
  summary: 'Races / Schedule',
  operationId: 'RacesSchedule',
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
      season: z
        .string()
        .openapi({
          param: {
            description: 'Year of the season.\n<br>Examples: <code>2015</code>, <code>2016</code>.',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(RaceSchema) } } },
  },
})

export const getFormatSeriesRoute = createRoute({
  method: 'get',
  path: '/{format}/series',
  summary: 'Series',
  operationId: 'Series',
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
    200: { description: '', content: { 'application/json': { schema: z.array(SeriesSchema) } } },
  },
})
