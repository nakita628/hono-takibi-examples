import { createRoute, z } from '@hono/zod-openapi'

export const getGetareacodeRoute = createRoute({
  method: 'get',
  path: '/getareacode',
  tags: ['Area Code Information'],
  summary: 'Gets telephone area code information',
  description: 'Gets telephone area code information for a given area code.',
  operationId: 'getareacode',
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
      areacode: z
        .string()
        .openapi({
          param: {
            description: 'Telephone area code to retrieve area code information',
            in: 'query',
            name: 'areacode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Telephone area code information',
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
