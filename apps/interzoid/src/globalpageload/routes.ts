import { createRoute, z } from '@hono/zod-openapi'

export const getGlobalpageloadRoute = createRoute({
  method: 'get',
  path: '/globalpageload',
  tags: ['Page Load Performance Time'],
  summary:
    'Gets page load (or an API call) performance from a specified global geography such as Paris, Tokyo, Virginia, Mumbai, Frankfurt, London, Seoul, California, Sao Paolo, and many more.',
  description: 'Gets page load performance from a specified geography\n',
  operationId: 'globalpageload',
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
      origin: z
        .string()
        .openapi({
          param: {
            description:
              'Geographic location to perform the measurement from (Paris, Hong Kong, Seoul, Mumbai, Sao Paolo, London, etc. see API home page for full list)',
            in: 'query',
            name: 'origin',
            required: true,
            schema: { type: 'string' },
          },
        }),
      url: z
        .string()
        .openapi({
          param: {
            description: 'specific URL to perform load test time',
            in: 'query',
            name: 'url',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Page load performance measurement response',
      content: {
        'application/json': {
          schema: z
            .object({
              Code: z.string().exactOptional(),
              Contents: z.string().exactOptional(),
              Credits: z.string().exactOptional(),
              Origin: z.string().exactOptional(),
              PageResponseStatus: z.string().exactOptional(),
              Seconds: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'bad request - insufficient parameters' },
    402: { description: 'credits exhausted' },
    403: { description: 'invalid license API key' },
    404: { description: 'origin or url note found' },
    405: { description: 'method not allowed' },
    500: { description: 'internal server error' },
  },
})
