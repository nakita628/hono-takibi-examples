import { createRoute, z } from '@hono/zod-openapi'

export const getGetglobalnumberinfoRoute = createRoute({
  method: 'get',
  path: '/getglobalnumberinfo',
  tags: ['Global Phone Number Information'],
  summary: 'Get demographic information for a global telephone number',
  description:
    'Get demographic information for a global telephone number, including city and country information, primary languages spoken, and mobile device identification.',
  operationId: 'getglobalnumberinfo',
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
      intlnumber: z
        .string()
        .openapi({
          param: {
            description: 'International number (with country code) to retrieve information for',
            in: 'query',
            name: 'intlnumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Global telephone demographic information',
      content: {
        'application/json': {
          schema: z
            .object({
              Code: z.string().exactOptional(),
              Country: z.string().exactOptional(),
              Credits: z.string().exactOptional(),
              Language2: z.string().exactOptional(),
              Language3: z.string().exactOptional(),
              Mobile: z.string().exactOptional(),
              PrimaryCity: z.string().exactOptional(),
              PrimaryLanguage: z.string().exactOptional(),
              Region: z.string().exactOptional(),
              Wealth: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'bad request - insufficient parameters' },
    402: { description: 'credits exhausted' },
    403: { description: 'invalid license API key' },
    404: { description: 'telephone number not found' },
    405: { description: 'method not allowed' },
    500: { description: 'internal server error' },
  },
})
