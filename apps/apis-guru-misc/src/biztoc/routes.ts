import { createRoute, z } from '@hono/zod-openapi'

export const getAiNewsRoute = createRoute({
  method: 'get',
  path: '/ai/news',
  summary: 'Retrieves the latest news whose content contains the query string.',
  operationId: 'getNews',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Used to query news articles on their title and body. For example, ?query=apple will return news stories that have 'apple' in their title or body.",
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})
