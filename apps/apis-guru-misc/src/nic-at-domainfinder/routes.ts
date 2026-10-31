import { createRoute, z } from '@hono/zod-openapi'

export const getApiV1SuggestRoute = createRoute({
  method: 'get',
  path: '/api/v1/suggest',
  summary: 'Get .at domain name suggestions',
  description:
    'Provides a list of available .at domain names related to the given input term or domain',
  request: {
    query: z.object({
      term: z
        .string()
        .openapi({
          param: {
            description: 'Domainname/term to obtain suggestions for',
            example: 'mydomain',
            in: 'query',
            name: 'term',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of domain suggestions',
      content: {
        'application/json': {
          schema: z
            .object({ '': z.array(z.string()).exactOptional() })
            .openapi({ example: ['mynewdomain.at', 'newdomain.at'], required: [] }),
        },
      },
    },
  },
})
