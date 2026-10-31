import { createRoute, z } from '@hono/zod-openapi'

const CursorSchema = z.string().openapi({ description: 'A scroll handle' }).openapi('Cursor')

const ErrorSchema = z
  .object({ code: z.int32().exactOptional(), message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Error')

const FieldSchema = z.string().openapi({ description: 'The name of a field' }).openapi('Field')

const HitSchema = z
  .object({})
  .openapi({ description: 'One item returned (object of fields and values)' })
  .openapi('Hit')

const OrganicResultSchema = z
  .object({
    count: z
      .int()
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({ description: 'Number of results returned' }),
    items: z.array(HitSchema).exactOptional(),
    total: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({ description: 'Approximate number of results meeting query' }),
  })
  .openapi({ description: 'The result of a organic search request', required: [] })
  .openapi('OrganicResult')

const ScrapeResultSchema = z
  .object({
    count: z
      .int()
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({ description: 'Number of results returned' }),
    cursor: CursorSchema.exactOptional(),
    items: z.array(HitSchema).exactOptional(),
    previous: CursorSchema.exactOptional(),
    total: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({ description: 'Total number of results from this cursor point' }),
  })
  .openapi({ description: 'The result of a scrape request', required: [] })
  .openapi('ScrapeResult')

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.',
      in: 'query',
      name: 'callback',
      required: false,
      schema: { type: 'string' },
    },
  })

const CursorParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Cursor for scrolling (used for subsequent calls)',
      in: 'query',
      name: 'cursor',
      required: false,
      schema: { type: 'string' },
    },
  })

const FieldParamsSchema = z
  .string()
  .min(1)
  .max(250)
  .default('identifier')
  .exactOptional()
  .openapi({
    param: {
      description: 'Metadata field',
      explode: true,
      in: 'query',
      name: 'field',
      required: false,
      schema: { default: 'identifier', maxLength: 250, minLength: 1, type: 'string' },
    },
  })

const QueryParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Lucene-type search query',
      in: 'query',
      name: 'q',
      schema: { type: 'string' },
      required: false,
    },
  })

const SizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(10).max(10000),
  )
  .default(1000)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of query results to return',
      in: 'query',
      name: 'size',
      required: false,
      schema: { default: 1000, maximum: 10000, minimum: 10, type: 'integer' },
    },
  })

const SortParamsSchema = z
  .string()
  .min(5)
  .max(250)
  .exactOptional()
  .openapi({
    param: {
      description: 'sort collations',
      explode: true,
      in: 'query',
      name: 'sort',
      required: false,
      schema: { maxLength: 250, minLength: 5, type: 'string' },
    },
  })

const TotalOnlyParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description: 'Request total only; do not return hits',
      in: 'query',
      name: 'total_only',
      required: false,
      schema: { default: false, type: 'boolean' },
    },
  })

export const getSearchV1FieldsRoute = createRoute({
  method: 'get',
  path: '/search/v1/fields',
  description: 'Fields that can be requested',
  request: { query: z.object({ callback: CallbackParamsSchema }) },
  responses: {
    200: {
      description: 'Fields that can be requested',
      content: {
        'application/javascript': { schema: z.array(FieldSchema) },
        'application/json': { schema: z.array(FieldSchema) },
      },
    },
  },
})

export const getSearchV1OrganicRoute = createRoute({
  method: 'get',
  path: '/search/v1/organic',
  description: 'Return relevance-based results from search queries\n',
  request: {
    query: z.object({
      q: QueryParamsSchema,
      field: FieldParamsSchema,
      size: SizeParamsSchema,
      total_only: TotalOnlyParamsSchema,
      callback: CallbackParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Organic Search API. Returns results in descending relevance order',
      content: {
        'application/javascript': { schema: OrganicResultSchema },
        'application/json': { schema: OrganicResultSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
      },
    },
  },
})

export const getSearchV1ScrapeRoute = createRoute({
  method: 'get',
  path: '/search/v1/scrape',
  description: 'Scrape search results from Internet Archive, allowing a scrolling cursor\n',
  request: {
    query: z.object({
      q: QueryParamsSchema,
      field: FieldParamsSchema,
      sort: SortParamsSchema,
      size: SizeParamsSchema,
      cursor: CursorParamsSchema,
      total_only: TotalOnlyParamsSchema,
      callback: CallbackParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Scaping API',
      content: {
        'application/javascript': { schema: ScrapeResultSchema },
        'application/json': { schema: ScrapeResultSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
      },
    },
  },
})
