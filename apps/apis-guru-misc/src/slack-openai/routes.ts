import { createRoute, z } from '@hono/zod-openapi'

const ResultSchema = z
  .object({ message: z.string().exactOptional(), permalink: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Result')

const SearchRequestSchema = z
  .object({ query: z.string().openapi({ description: 'Search query' }) })
  .openapi({ required: ['query'] })
  .openapi('SearchRequest')

export const postAiAlphaSearchMessagesRoute = createRoute({
  method: 'post',
  path: '/ai.alpha.search.messages',
  description: 'Search for messages matching a query',
  operationId: 'ai_alpha_search_messages',
  request: {
    body: { content: { 'application/json': { schema: SearchRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success response',
      content: {
        'application/json': {
          schema: z
            .object({
              ok: z
                .boolean()
                .openapi({
                  description: 'Boolean indicating whether or not the request was successful',
                }),
              results: z.array(ResultSchema).exactOptional(),
            })
            .openapi({ required: ['ok'] }),
        },
      },
    },
  },
})
