import { createRoute, z } from '@hono/zod-openapi'

const SnapshotSchema = z
  .object({
    status: z
      .int()
      .exactOptional()
      .openapi({ description: 'The HTTP status of the URL requested' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp of the snapshot in [RFC 3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html) format',
      }),
    url: z.string().exactOptional().openapi({ description: 'The URL requested' }),
  })
  .openapi({ required: [] })
  .openapi('Snapshot')

const ArchivedResultSchema = z
  .object({
    snapshot: SnapshotSchema,
    tag: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user-supplied tag for use in collation' }),
    timestamp: z
      .string()
      .openapi({
        description:
          'The _intepreted_ timestamp requested, in [RFC 3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html) format',
      }),
    url: z.string().openapi({ description: 'The URL requested' }),
  })
  .openapi({ required: ['url', 'timestamp', 'snapshot'] })
  .openapi('ArchivedResult')

const AvailabilityRequestSchema = z
  .object({
    closest: z
      .enum(['either', 'after', 'before'])
      .exactOptional()
      .openapi({
        description: 'The direction to find the closest snapshot to the requested timestamp',
      }),
    tag: z
      .string()
      .exactOptional()
      .openapi({ description: 'A user-supplied tag, used for collation' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp requested in ISO 8601 format. The following formats are acceptable: - YYYY - YYYY-MM - YYYY-MM-DD - YYYY-MM-DDTHH:mm:SSz - YYYY-MM-DD:HH:mm+00:00\n',
      }),
    url: z.string().openapi({ description: 'The URL requested' }),
  })
  .openapi({ required: ['url'] })
  .openapi('AvailabilityRequest')

const AvailabilityRequestsSchema = z
  .array(AvailabilityRequestSchema)
  .openapi({
    example: [
      { tag: '0', timestamp: '2016-04-07T19:39:18Z', url: 'http://www.entish.org' },
      { tag: '1', url: 'http://www.cnn.com/' },
      { tag: '2', timestamp: '2016-04-07T19:39:18Z', url: 'http://www.youcantfindthis.cat' },
    ],
  })
  .openapi('AvailabilityRequests')

const AvailabilityResultsSchema = z
  .object({ results: z.array(ArchivedResultSchema).openapi({ description: 'A list of results' }) })
  .openapi({ required: ['results'] })
  .openapi('AvailabilityResults')

const ErrorSchema = z
  .object({ code: z.int().exactOptional(), message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Error')

const AvailabilityResultsResponse = {
  description: 'Nominal Availability results',
  content: {
    'application/javascript': { schema: AvailabilityResultsSchema },
    'application/json': { schema: AvailabilityResultsSchema },
  },
}

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.\n',
      in: 'query',
      name: 'callback',
      required: false,
      schema: { type: 'string' },
    },
  })

const ClosestParamsSchema = z
  .enum(['either', 'before', 'after'])
  .default('either')
  .exactOptional()
  .openapi({
    param: {
      description:
        'The direction specifies whether to match archived timestamps that are before the provided one, after, or the default either (closest in either direction). Must be before, after, or either. May be overidden by individual requests.\n',
      in: 'query',
      name: 'closest',
      required: false,
      schema: { default: 'either', enum: ['either', 'before', 'after'], type: 'string' },
    },
  })

const StatusCodeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.union([
      z.literal(200),
      z.literal(201),
      z.literal(202),
      z.literal(203),
      z.literal(204),
      z.literal(205),
      z.literal(206),
      z.literal(300),
      z.literal(301),
      z.literal(302),
      z.literal(303),
      z.literal(304),
      z.literal(305),
      z.literal(306),
      z.literal(307),
      z.literal(308),
      z.literal(400),
      z.literal(401),
      z.literal(402),
      z.literal(403),
      z.literal(404),
      z.literal(405),
      z.literal(406),
      z.literal(407),
      z.literal(408),
      z.literal(409),
      z.literal(410),
      z.literal(411),
      z.literal(412),
      z.literal(413),
      z.literal(414),
      z.literal(415),
      z.literal(416),
      z.literal(417),
      z.literal(418),
      z.literal(421),
      z.literal(426),
      z.literal(428),
      z.literal(429),
      z.literal(431),
      z.literal(500),
      z.literal(501),
      z.literal(502),
      z.literal(503),
      z.literal(504),
      z.literal(505),
      z.literal(506),
      z.literal(507),
      z.literal(511),
    ]),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'HTTP status codes to filter by. Only results with these codes will be returned\n',
      explode: true,
      in: 'query',
      name: 'status_code',
      required: false,
      schema: {
        enum: [
          200, 201, 202, 203, 204, 205, 206, 300, 301, 302, 303, 304, 305, 306, 307, 308, 400, 401,
          402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421,
          426, 428, 429, 431, 500, 501, 502, 503, 504, 505, 506, 507, 511,
        ],
        type: 'integer',
      },
    },
  })

const TagParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The optional tag can have any value, and is returned with the results; it can be used to help collate input and output values.\n',
      in: 'query',
      name: 'tag',
      required: false,
      schema: { type: 'string' },
    },
  })

const TimeoutParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .default(5)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Timeout is the maximum number of seconds to wait for the availability API to get its underlying results from the CDX server. The default value is 5.0.\n',
      in: 'query',
      name: 'timeout',
      required: false,
      schema: { default: 5, type: 'number' },
    },
  })

const TimestampParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Timestamp requested in ISO 8601 format. The following formats are acceptable:\n - YYYY\n - YYYY-MM\n - YYYY-MM-DD\n - YYYY-MM-DDTHH:mm:SSz\n - YYYY-MM-DD:HH:mm+00:00\n',
      in: 'query',
      name: 'timestamp',
      required: false,
      schema: { type: 'string' },
    },
  })

const UrlParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'A single URL to query.',
      in: 'query',
      name: 'url',
      required: true,
      schema: { type: 'string' },
    },
  })

export const getWaybackV1AvailableRoute = createRoute({
  method: 'get',
  path: '/wayback/v1/available',
  request: {
    query: z.object({
      url: UrlParamsSchema,
      timestamp: TimestampParamsSchema,
      callback: CallbackParamsSchema,
      timeout: TimeoutParamsSchema,
      closest: ClosestParamsSchema,
      status_code: StatusCodeParamsSchema,
      tag: TagParamsSchema,
    }),
  },
  responses: {
    200: AvailabilityResultsResponse,
    default: {
      description: 'Unexpected error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
      },
    },
  },
})

export const postWaybackV1AvailableRoute = createRoute({
  method: 'post',
  path: '/wayback/v1/available',
  request: {
    query: z.object({
      url: UrlParamsSchema,
      timestamp: TimestampParamsSchema,
      callback: CallbackParamsSchema,
      timeout: TimeoutParamsSchema,
      closest: ClosestParamsSchema,
      status_code: StatusCodeParamsSchema,
      tag: TagParamsSchema,
    }),
    body: {
      content: {
        'application/json': { schema: AvailabilityRequestsSchema },
        'application/x-www-form-urlencoded': { schema: AvailabilityRequestsSchema },
        'text/csv': { schema: AvailabilityRequestsSchema },
      },
    },
  },
  responses: {
    200: AvailabilityResultsResponse,
    default: {
      description: 'Unexpected error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
      },
    },
  },
})
