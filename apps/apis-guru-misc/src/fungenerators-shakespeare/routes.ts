import { createRoute, z } from '@hono/zod-openapi'

const XFungeneratorsApiSecretSecurityScheme = {
  in: 'header',
  name: 'X-Fungenerators-Api-Secret',
  type: 'apiKey',
}

export const getShakespeareGenerateInsultRoute = createRoute({
  method: 'get',
  path: '/shakespeare/generate/insult',
  tags: ['Generation'],
  description: 'Generate random Shakespeare style insults.',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'No of insults to generate',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getShakespeareGenerateLoremIpsumRoute = createRoute({
  method: 'get',
  path: '/shakespeare/generate/lorem-ipsum',
  tags: ['Generation'],
  description: 'Generate Shakespeare lorem ipsum.',
  request: {
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of element to generate `paragraphs/sentences/words`.',
            in: 'query',
            name: 'type',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'No of elements to generate',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getShakespeareGenerateNameRoute = createRoute({
  method: 'get',
  path: '/shakespeare/generate/name',
  tags: ['Generation'],
  description: 'Generate random Shakespearen names.',
  request: {
    query: z.object({
      variation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Variation to generate `male/female`.',
            in: 'query',
            name: 'variation',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'No of names to generate',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'integer', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getShakespeareQuoteRoute = createRoute({
  method: 'get',
  path: '/shakespeare/quote',
  tags: ['Works'],
  description: 'Get a random Shakespeare quote.',
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getShakespeareTranslateRoute = createRoute({
  method: 'get',
  path: '/shakespeare/translate',
  tags: ['Translation'],
  description: 'Translate from English to Shakespeare English.',
  request: {
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            description: 'Text to translate to Shakespeare English.',
            in: 'query',
            name: 'text',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})
