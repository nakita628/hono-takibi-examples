import { createRoute, z } from '@hono/zod-openapi'

export const getGetemailinfoRoute = createRoute({
  method: 'get',
  path: '/getemailinfo',
  tags: ['Email Address Information'],
  summary: 'Gets email validation information for an email address',
  description: 'Get email validation information and other demographics for an email address.',
  operationId: 'getemailinfo',
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
      email: z
        .string()
        .openapi({
          param: {
            description: 'Email address to retrieve validation information',
            in: 'query',
            name: 'email',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Email validation and demographic information',
      content: {
        'application/json': {
          schema: z
            .object({
              Code: z.string().exactOptional(),
              Credits: z.string().exactOptional(),
              Email: z.string().exactOptional(),
              Geolocation: z.string().exactOptional(),
              Info: z.string().exactOptional(),
              IsDisposable: z.string().exactOptional(),
              IsEducational: z.string().exactOptional(),
              IsGeneric: z.string().exactOptional(),
              IsGovernment: z.string().exactOptional(),
              IsOrganizational: z.string().exactOptional(),
              IsVulgar: z.string().exactOptional(),
              Response: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'bad request - insufficient parameters' },
    402: { description: 'credits exhausted' },
    403: { description: 'invalid license API key' },
    404: { description: 'email address not valid' },
    405: { description: 'method not allowed' },
    500: { description: 'internal server error' },
  },
})
