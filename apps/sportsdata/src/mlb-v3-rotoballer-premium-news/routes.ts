import { createRoute, z } from '@hono/zod-openapi'

const NewsSchema = z
  .object({
    Author: z.string().nullable().exactOptional(),
    Categories: z.string().nullable().exactOptional(),
    Content: z.string().nullable().exactOptional(),
    NewsID: z.int().exactOptional(),
    OriginalSource: z.string().nullable().exactOptional(),
    OriginalSourceUrl: z.string().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlayerID2: z.int().nullable().exactOptional(),
    Source: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    Team2: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    TeamID2: z.int().nullable().exactOptional(),
    TermsOfUse: z.string().nullable().exactOptional(),
    TimeAgo: z.string().nullable().exactOptional(),
    Title: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('News')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getFormatRotoBallerPremiumNewsRoute = createRoute({
  method: 'get',
  path: '/{format}/RotoBallerPremiumNews',
  summary: 'Premium News',
  operationId: 'PremiumNews',
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
    200: { description: '', content: { 'application/json': { schema: z.array(NewsSchema) } } },
  },
})

export const getFormatRotoBallerPremiumNewsByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/RotoBallerPremiumNewsByDate/{date}',
  summary: 'Premium News by Date',
  operationId: 'PremiumNewsByDate',
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
              'The date of the news.\n<br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.',
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

export const getFormatRotoBallerPremiumNewsByPlayerIDPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/RotoBallerPremiumNewsByPlayerID/{playerid}',
  summary: 'Premium News by Player',
  operationId: 'PremiumNewsByPlayer',
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
            description: 'Unique FantasyData Player ID.\nExample:<code>10000507</code>.',
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
