import { createRoute, z } from '@hono/zod-openapi'

export const getGetweatherzipcodeRoute = createRoute({
  method: 'get',
  path: '/getweatherzipcode',
  tags: ['Weather by Zip Code'],
  summary: 'Gets current weather information for a US zip code',
  description: 'Use a US zip code to retrieve current weather information',
  operationId: 'getweatherzipcode',
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
      zip: z
        .string()
        .openapi({
          param: {
            description: 'Zip code for weather information',
            in: 'query',
            name: 'zip',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Current weather information for zip code',
      content: {
        'application/json': {
          schema: z
            .object({
              City: z.string().exactOptional(),
              Code: z.string().exactOptional(),
              Credits: z.string().exactOptional(),
              RelativeHumidity: z.string().exactOptional(),
              State: z.string().exactOptional(),
              TempC: z.string().exactOptional(),
              TempF: z.string().exactOptional(),
              VisibilityMiles: z.string().exactOptional(),
              Weather: z.string().exactOptional(),
              WindDir: z.string().exactOptional(),
              WindMPH: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'bad request - insufficient parameters' },
    402: { description: 'credits exhausted' },
    403: { description: 'invalid license API key' },
    404: { description: 'zip code not found' },
    405: { description: 'method not allowed' },
    500: { description: 'internal server error' },
  },
})
