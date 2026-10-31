import { createRoute, z } from '@hono/zod-openapi'

export const getVisualCrossingWebServicesRestServicesTimelineLocationRoute = createRoute({
  method: 'get',
  path: '/VisualCrossingWebServices/rest/services/timeline/{location}',
  tags: ['Timeline Weather API (15-day forecast request)'],
  summary: 'Historical and Forecast Weather API',
  description:
    'Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.',
  request: {
    params: z.object({
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Locaton of interest as an address, partial address or decimal latitude,longtude value',
            example: 'London,UK',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      contentType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'data format of the output either json or CSV',
            example: 'json',
            in: 'query',
            name: 'contentType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unitGroup: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: 'us',
            in: 'query',
            name: 'unitGroup',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'data to include in the output (required for CSV format - days,hours,alerts,current,events )',
            example: 'days',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lang: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language to use for weather descriptions',
            example: 'us',
            in: 'query',
            name: 'lang',
            schema: { type: 'string' },
            required: false,
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            example: 'INSERT_YOUR_KEY',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Auto generated using Swagger Inspector' } },
  servers: [{ url: 'https://weather.visualcrossing.com' }],
})

export const getVisualCrossingWebServicesRestServicesTimelineLocationStartdateRoute = createRoute({
  method: 'get',
  path: '/VisualCrossingWebServices/rest/services/timeline/{location}/{startdate}',
  tags: ['Timeline Weather API (single date request)'],
  summary: 'Historical and Forecast Weather API',
  description:
    'Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.',
  request: {
    params: z.object({
      location: z
        .string()
        .openapi({
          param: {
            example: 'London,UK',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      startdate: z
        .string()
        .openapi({
          param: {
            example: '2022-02-01T00:00:00.000Z',
            in: 'path',
            name: 'startdate',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      contentType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'data format of the output either json or CSV',
            example: 'json',
            in: 'query',
            name: 'contentType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unitGroup: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: 'us',
            in: 'query',
            name: 'unitGroup',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'data to include in the output (required for CSV format - days,hours,alerts,current,events )',
            example: 'days',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lang: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language to use for weather descriptions',
            example: 'us',
            in: 'query',
            name: 'lang',
            schema: { type: 'string' },
            required: false,
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            example: 'INSERT_YOUR_KEY',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Auto generated using Swagger Inspector' } },
  servers: [{ url: 'https://weather.visualcrossing.com' }],
})

export const getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateRoute =
  createRoute({
    method: 'get',
    path: '/VisualCrossingWebServices/rest/services/timeline/{location}/{startdate}/{enddate}',
    tags: ['Timeline Weather API (date range request)'],
    summary: 'Historical and Forecast Weather API',
    description:
      'Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.',
    request: {
      params: z.object({
        location: z
          .string()
          .openapi({
            param: {
              example: 'London,UK',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        startdate: z
          .string()
          .openapi({
            param: {
              example: '2022-02-01T00:00:00.000Z',
              in: 'path',
              name: 'startdate',
              required: true,
              schema: { type: 'string' },
            },
          }),
        enddate: z
          .string()
          .openapi({
            param: {
              example: '2022-03-01T00:00:00.000Z',
              in: 'path',
              name: 'enddate',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        contentType: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'data format of the output either json or CSV',
              example: 'json',
              in: 'query',
              name: 'contentType',
              schema: { type: 'string' },
              required: false,
            },
          }),
        unitGroup: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              example: 'us',
              in: 'query',
              name: 'unitGroup',
              schema: { type: 'string' },
              required: false,
            },
          }),
        include: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'data to include in the output (required for CSV format - days,hours,alerts,current,events )',
              example: 'days',
              in: 'query',
              name: 'include',
              schema: { type: 'string' },
              required: false,
            },
          }),
        lang: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Language to use for weather descriptions',
              example: 'us',
              in: 'query',
              name: 'lang',
              schema: { type: 'string' },
              required: false,
            },
          }),
        key: z
          .string()
          .openapi({
            param: {
              example: 'INSERT_YOUR_KEY',
              in: 'query',
              name: 'key',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Auto generated using Swagger Inspector' } },
    servers: [{ url: 'https://weather.visualcrossing.com' }],
  })

export const getVisualCrossingWebServicesRestServicesWeatherdataForecastRoute = createRoute({
  method: 'get',
  path: '/VisualCrossingWebServices/rest/services/weatherdata/forecast',
  tags: ['Weather Forecast'],
  summary: 'Weather Forecast API',
  description:
    'Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.',
  request: {
    query: z.object({
      sendAsDatasource: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            example: 'false',
            in: 'query',
            name: 'sendAsDatasource',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      allowAsynch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            example: 'false',
            in: 'query',
            name: 'allowAsynch',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      shortColumnNames: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            example: 'false',
            in: 'query',
            name: 'shortColumnNames',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      locations: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: 'Sterling%2C%20VA%2C%20US',
            in: 'query',
            name: 'locations',
            schema: { type: 'string' },
            required: false,
          },
        }),
      aggregateHours: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: '24',
            in: 'query',
            name: 'aggregateHours',
            schema: { type: 'string' },
            required: false,
          },
        }),
      contentType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: 'json',
            in: 'query',
            name: 'contentType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unitGroup: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: 'us',
            in: 'query',
            name: 'unitGroup',
            schema: { type: 'string' },
            required: false,
          },
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: 'INSERT_YOUR_KEY',
            in: 'query',
            name: 'key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Auto generated using Swagger Inspector' } },
  servers: [{ url: 'https://weather.visualcrossing.com' }],
})

export const getVisualCrossingWebServicesRestServicesWeatherdataHistoryRoute = createRoute({
  method: 'get',
  path: '/VisualCrossingWebServices/rest/services/weatherdata/history',
  tags: ['Historical Weather'],
  summary: 'Retrieves hourly or daily historical weather records.',
  description:
    'The weather history data is suitable for retrieving hourly or daily historical weather records.',
  request: {
    query: z.object({
      maxDistance: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: '-1',
            in: 'query',
            name: 'maxDistance',
            schema: { type: 'string' },
            required: false,
          },
        }),
      shortColumnNames: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            example: 'false',
            in: 'query',
            name: 'shortColumnNames',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      endDateTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: '2020-02-04T00%3A00%3A00',
            in: 'query',
            name: 'endDateTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      aggregateHours: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: '24',
            in: 'query',
            name: 'aggregateHours',
            schema: { type: 'string' },
            required: false,
          },
        }),
      collectStationContributions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            example: 'false',
            in: 'query',
            name: 'collectStationContributions',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      startDateTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: '2020-01-28T00%3A00%3A00',
            in: 'query',
            name: 'startDateTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxStations: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: '-1',
            in: 'query',
            name: 'maxStations',
            schema: { type: 'string' },
            required: false,
          },
        }),
      allowAsynch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            example: 'false',
            in: 'query',
            name: 'allowAsynch',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      locations: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: 'Sterling%2C%20VA%2C%20US',
            in: 'query',
            name: 'locations',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeNormals: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            example: 'false',
            in: 'query',
            name: 'includeNormals',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      contentType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: 'json',
            in: 'query',
            name: 'contentType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unitGroup: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: 'us',
            in: 'query',
            name: 'unitGroup',
            schema: { type: 'string' },
            required: false,
          },
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: 'INSERT_YOUR_KEY',
            in: 'query',
            name: 'key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Auto generated using Swagger Inspector' } },
  servers: [{ url: 'https://weather.visualcrossing.com' }],
})
