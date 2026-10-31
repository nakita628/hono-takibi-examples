import { createRoute, z } from '@hono/zod-openapi'

export const getContentJsonRoute = createRoute({
  method: 'get',
  path: '/content.json',
  summary: 'Execute a SQLite SQL query against the content database',
  description: 'Accepts SQLite SQL query, returns JSON. Does not allow PRAGMA statements.',
  operationId: 'query',
  request: {
    query: z.object({
      sql: z
        .string()
        .openapi({
          param: {
            description: 'The SQL query to be executed',
            in: 'query',
            name: 'sql',
            required: true,
            schema: { type: 'string' },
          },
        }),
      _shape: z
        .literal('array')
        .openapi({
          param: {
            description: 'The shape of the response data. Must be "array"',
            in: 'query',
            name: '_shape',
            required: true,
            schema: { enum: ['array'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful SQL results',
      content: { 'application/json': { schema: z.array(z.object({})) } },
    },
    400: { description: 'Bad request' },
    500: { description: 'Internal server error' },
  },
})
