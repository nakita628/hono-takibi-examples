import { createRoute, z } from '@hono/zod-openapi'

const PlayerInfoSchema = z
  .object({
    Name: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerInfo')

const ArticleSchema = z
  .object({
    ArticleID: z.int().exactOptional(),
    Author: z.string().nullable().exactOptional(),
    Content: z.string().nullable().exactOptional(),
    Players: z.array(PlayerInfoSchema).exactOptional(),
    Source: z.string().nullable().exactOptional(),
    TermsOfUse: z.string().nullable().exactOptional(),
    Title: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Article')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getFormatRotoBallerArticlesRoute = createRoute({
  method: 'get',
  path: '/{format}/RotoBallerArticles',
  summary: 'RotoBaller Articles',
  operationId: 'RotoballerArticles',
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
      content: {
        'application/json': {
          schema: z.array(ArticleSchema),
          examples: {
            response: {
              value:
                '[\r\n  {\r\n    "ArticleID": 0,\r\n    "Title": "string",\r\n    "Source": "string",\r\n    "Updated": "string",\r\n    "Content": "string",\r\n    "Url": "string",\r\n    "TermsOfUse": "string",\r\n    "Author": "string",\r\n    "Players": [\r\n      {\r\n        "PlayerID": 0,\r\n        "Name": "string",\r\n        "TeamID": 0,\r\n        "Team": "string",\r\n        "Position": "string"\r\n      }\r\n    ]\r\n  }\r\n]',
            },
          },
        },
      },
    },
  },
})

export const getFormatRotoBallerArticlesByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/RotoBallerArticlesByDate/{date}',
  summary: 'RotoBaller Articles By Date',
  operationId: 'RotoballerArticlesByDate',
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
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(ArticleSchema),
          examples: {
            response: {
              value:
                '[\r\n  {\r\n    "ArticleID": 0,\r\n    "Title": "string",\r\n    "Source": "string",\r\n    "Updated": "string",\r\n    "Content": "string",\r\n    "Url": "string",\r\n    "TermsOfUse": "string",\r\n    "Author": "string",\r\n    "Players": [\r\n      {\r\n        "PlayerID": 0,\r\n        "Name": "string",\r\n        "TeamID": 0,\r\n        "Team": "string",\r\n        "Position": "string"\r\n      }\r\n    ]\r\n  }\r\n]',
            },
          },
        },
      },
    },
  },
})

export const getFormatRotoBallerArticlesByPlayerIDPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/RotoBallerArticlesByPlayerID/{playerid}',
  summary: 'RotoBaller Articles By Player',
  operationId: 'RotoballerArticlesByPlayer',
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
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(ArticleSchema),
          examples: {
            response: {
              value:
                '[\r\n  {\r\n    "ArticleID": 0,\r\n    "Title": "string",\r\n    "Source": "string",\r\n    "Updated": "string",\r\n    "Content": "string",\r\n    "Url": "string",\r\n    "TermsOfUse": "string",\r\n    "Author": "string",\r\n    "Players": [\r\n      {\r\n        "PlayerID": 0,\r\n        "Name": "string",\r\n        "TeamID": 0,\r\n        "Team": "string",\r\n        "Position": "string"\r\n      }\r\n    ]\r\n  }\r\n]',
            },
          },
        },
      },
    },
  },
})
