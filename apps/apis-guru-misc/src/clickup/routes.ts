import { createRoute, z } from '@hono/zod-openapi'

const QuestionsCollectionSchema = z.any().openapi('QuestionsCollection')

export const getQuestionsRoute = createRoute({
  method: 'get',
  path: '/questions',
  tags: [],
  summary: 'List All Questions',
  operationId: 'List All Questions',
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postQuestionsRoute = createRoute({
  method: 'post',
  path: '/questions',
  tags: [],
  summary: 'Create a New Question',
  description:
    'You may create your own question using this action. It takes a JSON\nobject containing a question and a collection of answers in the\nform of choices.',
  operationId: 'Create a New Question',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              choices: z.array(z.string()).exactOptional(),
              question: z.string().exactOptional(),
            })
            .openapi({
              example: {
                choices: ['Swift', 'Python', 'Objective-C', 'Ruby'],
                question: 'Favourite programming language?',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {},
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})
