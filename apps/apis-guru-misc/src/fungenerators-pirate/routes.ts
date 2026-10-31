import { createRoute, z } from '@hono/zod-openapi'

const XFungeneratorsApiSecretSecurityScheme = {
  in: 'header',
  name: 'X-Fungenerators-Api-Secret',
  type: 'apiKey',
}

export const getPirateGenerateInsultRoute = createRoute({
  method: 'get',
  path: '/pirate/generate/insult',
  tags: ['Generation'],
  description: 'Generate random pirate insults.',
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

export const getPirateGenerateLoremIpsumRoute = createRoute({
  method: 'get',
  path: '/pirate/generate/lorem-ipsum',
  tags: ['Generation'],
  description: 'Generate pirate lorem ipsum.',
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

export const getPirateGenerateNameRoute = createRoute({
  method: 'get',
  path: '/pirate/generate/name',
  tags: ['Generation'],
  description: 'Generate random pirate names.',
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

export const getPirateTranslateRoute = createRoute({
  method: 'get',
  path: '/pirate/translate',
  tags: ['Translation'],
  description: 'Translate from English to pirate.',
  request: {
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            description: 'Text to translate to pirate lingo.',
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
