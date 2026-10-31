import { createRoute, z } from '@hono/zod-openapi'

export const getGetweatherRoute = createRoute({
  method: 'get',
  path: '/getweather',
  tags: ['Weather by City and State'],
  summary: 'Gets current weather information for a US city and state',
  description: 'Use city and state to retrieve current US weather information.',
  operationId: 'getweather',
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
            description: 'City for weather information',
            in: 'query',
            name: 'city',
            required: true,
            schema: { type: 'string' },
          },
        }),
      state: z
        .string()
        .openapi({
          param: {
            description: 'State for weather information',
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
      description: 'Current weather information for a US city',
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
    404: { description: 'city/state not found' },
    405: { description: 'method not allowed' },
    500: { description: 'internal server error' },
  },
})
