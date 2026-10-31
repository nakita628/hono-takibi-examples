import { createRoute, z } from '@hono/zod-openapi'

export const getGetstateabbreviationRoute = createRoute({
  method: 'get',
  path: '/getstateabbreviation',
  tags: ['State Data Standardization'],
  summary: 'Gets a two-letter abbreviation for a state or province name data',
  description:
    'Gets a two-letter abbreviation for a state or province given a permutation of state or province data.',
  operationId: 'getstateabbreviation',
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
      state: z
        .string()
        .openapi({
          param: {
            description:
              'State (or province) name from which to retrieve the two letter abbreviation.',
            in: 'query',
            name: 'state',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'State (or province) standardized two-letter abbreviation',
      content: {
        'application/json': {
          schema: z
            .object({
              Abbreviation: z.string().exactOptional(),
              Code: z.string().exactOptional(),
              Credits: z.string().exactOptional(),
              State: z.string().exactOptional(),
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
