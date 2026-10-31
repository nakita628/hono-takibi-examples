import { createRoute, z } from '@hono/zod-openapi'

export const getNamesRoute = createRoute({
  method: 'get',
  path: '/names',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(z.string()),
          examples: {
            list: {
              summary: 'List of Names',
              description:
                'A long and _very_ detailed description of this representation that includes rich text.',
              value: ['Bob', 'Diane', 'Mary', 'Bill'],
            },
            empty: { summary: 'Empty', value: [] },
          },
        },
      },
    },
  },
})
