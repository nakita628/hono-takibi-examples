import { createRoute, z } from '@hono/zod-openapi'

const DateTimeJsonResponseSchema = z
  .object({
    abbreviation: z.string().openapi({ description: 'the abbreviated name of the timezone' }),
    client_ip: z.string().openapi({ description: 'the IP of the client making the request' }),
    datetime: z
      .string()
      .openapi({
        description: 'an ISO8601-valid string representing the current, local date/time',
      }),
    day_of_week: z
      .int()
      .openapi({ description: 'current day number of the week, where sunday is 0' }),
    day_of_year: z.int().openapi({ description: 'ordinal date of the current year' }),
    dst: z
      .boolean()
      .openapi({ description: 'flag indicating whether the local time is in daylight savings' }),
    dst_from: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'an ISO8601-valid string representing the datetime when daylight savings started for this timezone',
      }),
    dst_offset: z
      .int()
      .openapi({
        description:
          'the difference in seconds between the current local time and daylight saving time for the location',
      }),
    dst_until: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'an ISO8601-valid string representing the datetime when daylight savings will end for this timezone',
      }),
    raw_offset: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'the difference in seconds between the current local time and the time in UTC, excluding any daylight saving difference (see dst_offset)',
      }),
    timezone: z
      .string()
      .openapi({ description: 'timezone in `Area/Location` or `Area/Location/Region` format' }),
    unixtime: z.int().openapi({ description: 'number of seconds since the Epoch' }),
    utc_datetime: z
      .string()
      .openapi({
        description: 'an ISO8601-valid string representing the current date/time in UTC',
      }),
    utc_offset: z
      .string()
      .openapi({ description: 'an ISO8601-valid string representing the offset from UTC' }),
    week_number: z.int().openapi({ description: 'the current week number' }),
  })
  .openapi({
    required: [
      'abbreviation',
      'client_ip',
      'datetime',
      'day_of_week',
      'day_of_year',
      'dst',
      'dst_offset',
      'timezone',
      'unixtime',
      'utc_datetime',
      'utc_offset',
      'week_number',
    ],
  })
  .openapi('DateTimeJsonResponse')

const DateTimeTextResponseSchema = z
  .string()
  .openapi({
    description:
      'time zone details, as per the DateTimeJsonResponse response, in the format `key: value`, one item per line',
  })
  .openapi('DateTimeTextResponse')

const ErrorJsonResponseSchema = z
  .object({ error: z.string().openapi({ description: 'details about the error encountered' }) })
  .openapi({ required: ['error'] })
  .openapi('ErrorJsonResponse')

const ErrorTextResponseSchema = z
  .string()
  .openapi({ description: 'details about the error encountered in plain text' })
  .openapi('ErrorTextResponse')

const ListJsonResponseSchema = z
  .array(z.string())
  .openapi({ description: 'a list of available timezones' })
  .openapi('ListJsonResponse')

const ListTextResponseSchema = z
  .string()
  .openapi({ description: 'a list of available timezones, one per line' })
  .openapi('ListTextResponse')

const ErrorJsonResponseResponse = {
  description: 'an error response in JSON format',
  content: { 'application/json': { schema: ErrorJsonResponseSchema } },
}

const ErrorTextResponseResponse = {
  description: 'an error response in plain text',
  content: { 'text/plain': { schema: ErrorTextResponseSchema } },
}

const SuccessfulDateTimeJsonResponseResponse = {
  description: 'the current time for the timezone requested in JSON format',
  content: { 'application/json': { schema: DateTimeJsonResponseSchema } },
}

const SuccessfulDateTimeTextResponseResponse = {
  description: 'the current time for the timezone requested in plain text',
  content: { 'text/plain': { schema: DateTimeTextResponseSchema } },
}

const SuccessfulListJsonResponseResponse = {
  description: 'the list of available timezones in JSON format',
  content: { 'application/json': { schema: ListJsonResponseSchema } },
}

const SuccessfulListTextResponseResponse = {
  description: 'the list of available timezones in plain text',
  content: { 'text/plain': { schema: ListTextResponseSchema } },
}

export const getIpRoute = createRoute({
  method: 'get',
  path: '/ip',
  summary:
    'request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.',
  responses: { 200: SuccessfulDateTimeJsonResponseResponse, default: ErrorJsonResponseResponse },
})

export const getIpTxtRoute = createRoute({
  method: 'get',
  path: '/ip.txt',
  summary:
    'request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.',
  responses: { 200: SuccessfulDateTimeTextResponseResponse, default: ErrorTextResponseResponse },
})

export const getIpIpv4Route = createRoute({
  method: 'get',
  path: '/ip/{ipv4}',
  summary:
    'request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.',
  request: {
    params: z.object({
      ipv4: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ipv4', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: SuccessfulDateTimeJsonResponseResponse, default: ErrorJsonResponseResponse },
})

export const getIpIpv4TxtRoute = createRoute({
  method: 'get',
  path: '/ip/{ipv4}.txt',
  summary:
    'request the current time based on the ip of the request. note: this is a "best guess" obtained from open-source data.',
  request: {
    params: z.object({
      ipv4: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ipv4', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: SuccessfulDateTimeTextResponseResponse, default: ErrorTextResponseResponse },
})

export const getTimezoneRoute = createRoute({
  method: 'get',
  path: '/timezone',
  summary: 'a listing of all timezones.',
  responses: { default: SuccessfulListJsonResponseResponse },
})

export const getTimezoneTxtRoute = createRoute({
  method: 'get',
  path: '/timezone.txt',
  summary: 'a listing of all timezones.',
  responses: { default: SuccessfulListTextResponseResponse },
})

export const getTimezoneAreaRoute = createRoute({
  method: 'get',
  path: '/timezone/{area}',
  summary: 'a listing of all timezones available for that area.',
  request: {
    params: z.object({
      area: z
        .string()
        .openapi({
          param: { in: 'path', name: 'area', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: SuccessfulListJsonResponseResponse, default: ErrorJsonResponseResponse },
})

export const getTimezoneAreaTxtRoute = createRoute({
  method: 'get',
  path: '/timezone/{area}.txt',
  summary: 'a listing of all timezones available for that area.',
  request: {
    params: z.object({
      area: z
        .string()
        .openapi({
          param: { in: 'path', name: 'area', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: SuccessfulListTextResponseResponse, default: ErrorTextResponseResponse },
})

export const getTimezoneAreaLocationRoute = createRoute({
  method: 'get',
  path: '/timezone/{area}/{location}',
  summary: 'request the current time for a timezone.',
  request: {
    params: z.object({
      area: z
        .string()
        .openapi({
          param: { in: 'path', name: 'area', required: true, schema: { type: 'string' } },
        }),
      location: z
        .string()
        .openapi({
          param: { in: 'path', name: 'location', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: SuccessfulDateTimeJsonResponseResponse, default: ErrorJsonResponseResponse },
})

export const getTimezoneAreaLocationTxtRoute = createRoute({
  method: 'get',
  path: '/timezone/{area}/{location}.txt',
  summary: 'request the current time for a timezone.',
  request: {
    params: z.object({
      area: z
        .string()
        .openapi({
          param: { in: 'path', name: 'area', required: true, schema: { type: 'string' } },
        }),
      location: z
        .string()
        .openapi({
          param: { in: 'path', name: 'location', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: SuccessfulDateTimeTextResponseResponse, default: ErrorTextResponseResponse },
})

export const getTimezoneAreaLocationRegionRoute = createRoute({
  method: 'get',
  path: '/timezone/{area}/{location}/{region}',
  summary: 'request the current time for a timezone.',
  request: {
    params: z.object({
      area: z
        .string()
        .openapi({
          param: { in: 'path', name: 'area', required: true, schema: { type: 'string' } },
        }),
      location: z
        .string()
        .openapi({
          param: { in: 'path', name: 'location', required: true, schema: { type: 'string' } },
        }),
      region: z
        .string()
        .openapi({
          param: { in: 'path', name: 'region', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: SuccessfulDateTimeJsonResponseResponse, default: ErrorJsonResponseResponse },
})

export const getTimezoneAreaLocationRegionTxtRoute = createRoute({
  method: 'get',
  path: '/timezone/{area}/{location}/{region}.txt',
  summary: 'request the current time for a timezone.',
  request: {
    params: z.object({
      area: z
        .string()
        .openapi({
          param: { in: 'path', name: 'area', required: true, schema: { type: 'string' } },
        }),
      location: z
        .string()
        .openapi({
          param: { in: 'path', name: 'location', required: true, schema: { type: 'string' } },
        }),
      region: z
        .string()
        .openapi({
          param: { in: 'path', name: 'region', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: SuccessfulDateTimeTextResponseResponse, default: ErrorTextResponseResponse },
})
