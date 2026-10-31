import { createRoute, z } from '@hono/zod-openapi'

const ApiKeySecurityScheme = { in: 'query', name: 'api_key', type: 'apiKey' }

export const getApodRoute = createRoute({
  method: 'get',
  path: '/apod',
  tags: ['request tag'],
  summary: 'Returns images',
  description: 'Returns the picture of the day',
  request: {
    query: z.object({
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The date of the APOD image to retrieve',
            in: 'query',
            name: 'date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hd: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve the URL for the high resolution image',
            in: 'query',
            name: 'hd',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.any().openapi({ 'x-thing': 'ok' })) } },
    },
    400: { description: 'Date must be between Jun 16, 1995 and Mar 28, 2019.' },
  },
  security: [{ api_key: [] }],
})
