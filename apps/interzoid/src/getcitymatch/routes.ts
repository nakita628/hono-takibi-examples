import { createRoute, z } from '@hono/zod-openapi'

export const getGetcitymatchRoute = createRoute({
  method: 'get',
  path: '/getcitymatch',
  tags: ['City Name Similarity Key'],
  summary: 'Gets a similarity key for matching purposes for city name data',
  description: 'Gets a similarity key for matching purposes for city name data.',
  operationId: 'getcitymatch',
  request: {
    query: z.object({
      license: z
        .string()
        .openapi({
          param: {
            description: 'Your Interzoid license API key. Register at www.interzoid.com/register',
            in: 'query',
            name: 'license',
            required: true,
            schema: { type: 'string' },
          },
        }),
      city: z
        .string()
        .openapi({
          param: {
            description: 'City name from which to generate similarity key',
            in: 'query',
            name: 'city',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Generated similarity key for city name data',
      content: {
        'application/json': {
          schema: z
            .object({
              Code: z.string().exactOptional(),
              Credits: z.string().exactOptional(),
              Simkey: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'bad request - insufficient parameters' },
    402: { description: 'credits exhausted' },
    403: { description: 'invalid license API key' },
    405: { description: 'method not allowed' },
    500: { description: 'internal server error' },
  },
})
