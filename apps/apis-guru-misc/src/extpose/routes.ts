import { createRoute, z } from '@hono/zod-openapi'

const ExtensionSchema = z
  .object({
    avg_rating: z.float32().exactOptional(),
    extension_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    install_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    prev_avg_rating: z.float32().exactOptional(),
    prev_install_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    prev_rating_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    rating_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    update_ts: z.iso.datetime({ offset: true }).exactOptional(),
    url: z.url().exactOptional(),
  })
  .openapi({
    example: {
      avg_rating: 4.5,
      extension_id: 4186,
      install_count: 2333,
      prev_avg_rating: 4.57142857142857,
      prev_install_count: 1225,
      prev_rating_count: 7,
      rating_count: 10,
      update_ts: 'Tue, 24 Sep 2019 22:16:41 GMT',
      url: 'https://chrome.google.com/webstore/detail/bitcoin-price-ticker/bgddejjmhilkdllbakkgddjodommlimc',
    },
    required: [],
  })
  .openapi('Extension')

const ApiKeySecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

export const getUserExtensionsRoute = createRoute({
  method: 'get',
  path: '/user-extensions',
  tags: ['user'],
  summary: 'Get User Extensions',
  description:
    'This endpoint allows you to get list of your extensions including extensions from the watchlist.',
  operationId: 'getUserExtensions',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(ExtensionSchema) } },
    },
    400: { description: 'Invalid status value', content: {} },
  },
  security: [{ api_key: [] }],
})
