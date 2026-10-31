import { createRoute, z } from '@hono/zod-openapi'

export const getCityRoute = createRoute({
  method: 'get',
  path: '/city',
  description: 'Get City name by using latitude and longitude',
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'key', required: true, schema: { type: 'string' } },
        }),
      lng: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'query', name: 'lng', required: true, schema: { type: 'number' } },
        }),
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: { in: 'query', name: 'lat', required: true, schema: { type: 'number' } },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get response from longitude latitude lookup',
      content: {
        'application/json; charset=utf-8': {
          schema: z.string(),
          examples: {
            '0': { value: '{"country":"","region":"","city":"","latitude":"","longitude":""}' },
          },
        },
      },
    },
  },
})
