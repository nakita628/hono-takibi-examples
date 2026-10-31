import { createRoute, z } from '@hono/zod-openapi'

export const getGetareacodefromnumberRoute = createRoute({
  method: 'get',
  path: '/getareacodefromnumber',
  tags: ['Area Code Information'],
  summary: 'Gets area code information from a telephone number',
  description:
    'The area code will be parsed out of a telephone number and used to retrieve information about the area code.',
  operationId: 'getareacodefromnumber',
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
      number: z
        .string()
        .openapi({
          param: {
            description: 'Telephone number to retrieve area code information',
            in: 'query',
            name: 'number',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Telephone number area code information',
      content: {
        'application/json': {
          schema: z
            .object({
              Abbreviation: z.string().exactOptional(),
              AreaCode: z.string().exactOptional(),
              Code: z.string().exactOptional(),
              Credits: z.string().exactOptional(),
              Locale: z.string().exactOptional(),
              PrimaryCity: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'bad request - insufficient parameters' },
    402: { description: 'credits exhausted' },
    403: { description: 'invalid license API key' },
    404: { description: 'area code not found' },
    405: { description: 'method not allowed' },
    500: { description: 'internal server error' },
  },
})
