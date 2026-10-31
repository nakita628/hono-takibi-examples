import { createRoute, z } from '@hono/zod-openapi'

export const getGetglobaltimeRoute = createRoute({
  method: 'get',
  path: '/getglobaltime',
  tags: ['Current Global Time'],
  summary: 'Gets the current time for a global locale',
  description:
    'Gets the current time for a global locale (city, state, region, or country such as Chicago, London, Paris, Seoul, Spain, Buenos Aires, Hawaii, Moscow, Tokyo, Hanoi, etc.)',
  operationId: 'getglobaltime',
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
      locale: z
        .string()
        .openapi({
          param: {
            description: 'Geographic locale to get the current time for',
            in: 'query',
            name: 'locale',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Current global time in many forms and related information',
      content: {
        'application/json': {
          schema: z
            .object({
              ClockTime: z.string().exactOptional(),
              Code: z.string().exactOptional(),
              Credits: z.string().exactOptional(),
              CurrentDate: z.string().exactOptional(),
              CurrentTime: z.string().exactOptional(),
              Day: z.string().exactOptional(),
              Hour: z.string().exactOptional(),
              Locale: z.string().exactOptional(),
              Minute: z.string().exactOptional(),
              Month: z.string().exactOptional(),
              MonthNumber: z.string().exactOptional(),
              Second: z.string().exactOptional(),
              TimeStamp: z.string().exactOptional(),
              Weekday: z.string().exactOptional(),
              Year: z.string().exactOptional(),
              Zone: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'bad request - insufficient parameters' },
    402: { description: 'credits exhausted' },
    403: { description: 'invalid license API key' },
    404: { description: 'locale not found' },
    405: { description: 'method not allowed' },
    500: { description: 'internal server error' },
  },
})
