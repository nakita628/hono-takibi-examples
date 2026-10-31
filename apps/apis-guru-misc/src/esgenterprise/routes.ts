import { createRoute, z } from '@hono/zod-openapi'

const ApiKeySecurityScheme = { in: 'query', name: 'token', type: 'apiKey' }

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: ['rating'],
  summary: 'List all company ESG Ratings',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            description: 'Company name or stock symbol',
            in: 'query',
            name: 'q',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of ESG Ratings',
      content: {
        'application/json': {
          schema: z
            .object({
              company_name: z.string().exactOptional(),
              environment_score: z.float64().exactOptional(),
              governance_score: z.float64().exactOptional(),
              last_processing_date: z.iso.date().exactOptional(),
              social_score: z.float64().exactOptional(),
              total: z.float64().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'x-next': {
          description: 'ESG ratings',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'ESG ratings', param: { required: false } }),
        },
      }),
    },
  },
  security: [{ api_key: [] }],
})
