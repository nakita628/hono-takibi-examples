import { createRoute, z } from '@hono/zod-openapi'

const XFungeneratorsApiSecretSecurityScheme = {
  in: 'header',
  name: 'X-Fungenerators-Api-Secret',
  type: 'apiKey',
}

export const getRiddleRoute = createRoute({
  method: 'get',
  path: '/riddle',
  tags: ['Private Riddles'],
  description:
    'Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.',
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of the riddle to fetch',
            in: 'query',
            name: 'id',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const putRiddleRoute = createRoute({
  method: 'put',
  path: '/riddle',
  tags: ['Private Riddles'],
  description: 'Create a random Riddle entry.',
  request: {
    query: z.object({
      question: z
        .string()
        .openapi({
          param: {
            description: 'Riddle Question',
            in: 'query',
            name: 'question',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      category: z
        .string()
        .openapi({
          param: {
            description: 'Category of the riddle',
            in: 'query',
            name: 'category',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      answer: z
        .string()
        .openapi({
          param: {
            description: 'Answer(s) to the riddle question',
            in: 'query',
            name: 'answer',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const postRiddleRoute = createRoute({
  method: 'post',
  path: '/riddle',
  tags: ['Private Riddles'],
  description:
    "Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.",
  request: {
    query: z.object({
      question: z
        .string()
        .openapi({
          param: {
            description: 'Riddle Question',
            in: 'query',
            name: 'question',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      category: z
        .string()
        .openapi({
          param: {
            description: 'Category of the riddle',
            in: 'query',
            name: 'category',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
      answer: z
        .string()
        .openapi({
          param: {
            description: 'Answer(s) to the riddle question',
            in: 'query',
            name: 'answer',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const deleteRiddleRoute = createRoute({
  method: 'delete',
  path: '/riddle',
  tags: ['Private Riddles'],
  description: 'Create a random Riddle entry.',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Riddle ID',
            in: 'query',
            name: 'id',
            required: true,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getRiddleRandomRoute = createRoute({
  method: 'get',
  path: '/riddle/random',
  tags: ['Random Riddle'],
  description: 'Get a random riddle for a given category(optional)',
  request: {
    query: z.object({
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Category to get the riddle from',
            in: 'query',
            name: 'category',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})

export const getRiddleSearchRoute = createRoute({
  method: 'get',
  path: '/riddle/search',
  tags: ['Random Riddle'],
  description:
    'Search for random riddle which has the text in the query, for a given category(optional).',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Text to search for in the riddle',
            in: 'query',
            name: 'query',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Category to get the riddle from',
            in: 'query',
            name: 'category',
            required: false,
            schema: { format: 'string', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200  response', content: {} },
    401: { description: '401  response', content: {} },
  },
  security: [{ 'X-Fungenerators-Api-Secret': [] }],
})
