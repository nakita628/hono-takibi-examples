import { createRoute, z } from '@hono/zod-openapi'

export const getGetfullnameparsedmatchRoute = createRoute({
  method: 'get',
  path: '/getfullnameparsedmatch',
  tags: ['Full Name Parsed Similarity Key'],
  summary: 'Gets a similarity key for matching purposes for parsed full name data',
  description:
    'Gets a similarity key for matching purposes for parsed full name data, where the first name and last name are split into separate fields in the source data rather than combined.',
  operationId: 'getfullnameparsedmatch',
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
      firstname: z
        .string()
        .openapi({
          param: {
            description: 'First name from which to generate similarity key',
            in: 'query',
            name: 'firstname',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lastname: z
        .string()
        .openapi({
          param: {
            description: 'Last name from which to generate similarity key',
            in: 'query',
            name: 'lastname',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Generated similarity key for parsed full name data',
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
