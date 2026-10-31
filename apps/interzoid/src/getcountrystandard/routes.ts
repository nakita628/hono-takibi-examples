import { createRoute, z } from '@hono/zod-openapi'

export const getGetcountrystandardRoute = createRoute({
  method: 'get',
  path: '/getcountrystandard',
  tags: ['Country Name Standardization'],
  summary: 'Gets country name standard',
  description:
    'Gets a pre-selected country name standard for various permutations of a given country name.',
  operationId: 'getcountrystandard',
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
      country: z
        .string()
        .openapi({
          param: {
            description: 'Country name from which to retrieve the standardized version',
            in: 'query',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Standardized country name data',
      content: {
        'application/json': {
          schema: z
            .object({
              Code: z.string().exactOptional(),
              CountryStandard: z.string().exactOptional(),
              Credits: z.string().exactOptional(),
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
