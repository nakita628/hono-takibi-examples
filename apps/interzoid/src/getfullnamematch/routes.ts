import { createRoute, z } from '@hono/zod-openapi'

export const getGetfullnamematchRoute = createRoute({
  method: 'get',
  path: '/getfullnamematch',
  tags: ['Full Name Match Similarity Key'],
  summary: 'Gets a similarity key for matching purposes for full name data',
  description:
    'Gets a similarity key for matching purposes for full name data, where first and last name are part of the same field.',
  operationId: 'getfullnamematch',
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
      fullname: z
        .string()
        .openapi({
          param: {
            description: 'Full name from which to generate similarity key',
            in: 'query',
            name: 'fullname',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Generated similarity key for full name data',
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
