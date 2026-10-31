import { createRoute, z } from '@hono/zod-openapi'

const SearchResponseResponse = { description: 'Search results', content: {} }

const CountParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'count', schema: { type: 'number' }, required: false } })

const InUrlPrefixesParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { in: 'query', name: 'inUrlPrefixes', schema: { type: 'string' }, required: false },
  })

const QParamsSchema = z
  .string()
  .openapi({ param: { in: 'query', name: 'q', required: true, schema: { type: 'string' } } })

const StartParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .exactOptional()
  .openapi({ param: { in: 'query', name: 'start', schema: { type: 'number' }, required: false } })

const SubdomainsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { in: 'query', name: 'subdomains', schema: { type: 'string' }, required: false },
  })

export const getDescriptionRoute = createRoute({
  method: 'get',
  path: '/description',
  tags: ['Description'],
  summary: 'OpenSearch description document',
  externalDocs: {
    description: 'OpenSearch github repository',
    url: 'https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-description-document',
  },
  responses: { 200: { description: 'Open Search Description', content: {} } },
})

export const getQueryRoute = createRoute({
  method: 'get',
  path: '/query',
  tags: ['Query'],
  summary: 'Search results',
  externalDocs: {
    description: 'OpenSearch github repository',
    url: 'https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements',
  },
  request: {
    query: z.object({
      q: QParamsSchema,
      start: StartParamsSchema,
      count: CountParamsSchema,
      subdomains: SubdomainsParamsSchema,
      inUrlPrefixes: InUrlPrefixesParamsSchema,
    }),
  },
  responses: { 200: SearchResponseResponse },
})

export const getQueryExtensionRoute = createRoute({
  method: 'get',
  path: '/query.{extension}',
  tags: ['Query'],
  summary: 'Search results',
  externalDocs: {
    description: 'OpenSearch github repository',
    url: 'https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements',
  },
  request: {
    params: z.object({
      extension: z
        .enum(['atom', 'rss', 'html', 'json'])
        .openapi({
          param: {
            description: 'extension',
            in: 'path',
            name: 'extension',
            required: true,
            schema: { enum: ['atom', 'rss', 'html', 'json'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      q: QParamsSchema,
      start: StartParamsSchema,
      count: CountParamsSchema,
      subdomains: SubdomainsParamsSchema,
      inUrlPrefixes: InUrlPrefixesParamsSchema,
    }),
  },
  responses: { 200: SearchResponseResponse },
})
