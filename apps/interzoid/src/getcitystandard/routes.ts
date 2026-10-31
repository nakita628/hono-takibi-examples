import { createRoute, z } from '@hono/zod-openapi'

export const getGetcitystandardRoute = createRoute({
  method: 'get',
  path: '/getcitystandard',
  tags: ['City Data Standardization'],
  summary: 'Gets a city name standard for US and international cities',
  description:
    'Gets a pre-selected city name standard for US and international cities for various permutations of a given city name.',
  operationId: 'getcitystandard',
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
            description: 'City name from which to retrieve the standardized version',
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
      description: 'Standardized city name data',
      content: {
        'application/json': {
          schema: z
            .object({
              CityStandard: z.string().exactOptional(),
              Code: z.string().exactOptional(),
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
