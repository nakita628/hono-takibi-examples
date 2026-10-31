import { createRoute, z } from '@hono/zod-openapi'

export const getGetcompanymatchRoute = createRoute({
  method: 'get',
  path: '/getcompanymatch',
  tags: ['Company Name Similarity Key'],
  summary: 'Gets a similarity key for matching purposes for company name data',
  description: 'Gets a similarity key for matching purposes for company name data',
  operationId: 'getcompanymatch',
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
      company: z
        .string()
        .openapi({
          param: {
            description: 'Company name from which to generate similarity key',
            in: 'query',
            name: 'company',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Generated similarity key for company name data',
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
