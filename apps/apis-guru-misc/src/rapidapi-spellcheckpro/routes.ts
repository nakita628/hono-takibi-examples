import { createRoute, z } from '@hono/zod-openapi'

export const postCheckSpellingRoute = createRoute({
  method: 'post',
  path: '/check_spelling',
  summary: 'Check Spelling (Russian)',
  description: 'Check Spelling (Russian)',
  operationId: 'checkSpellingRussian',
  request: {
    headers: z.object({
      'X-RapidAPI-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-RapidAPI-Key',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              lang_code: z.string().exactOptional().openapi({ example: 'ru' }),
              text: z.string().exactOptional().openapi({ example: 'Добрый вее!' }),
            })
            .openapi({ required: [] }),
          example: { lang_code: 'ru', text: 'Добрый вее!' },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})
