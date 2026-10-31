import { createRoute, z } from '@hono/zod-openapi'

const BookSchema = z
  .object({
    id: z.string().exactOptional().openapi({ example: 'afd6' }),
    name: z.string().exactOptional().openapi({ example: 'The Shadow Out of Time' }),
    year: z.string().exactOptional().openapi({ example: '1934' }),
  })
  .openapi({ required: [] })
  .openapi('Book')

const SentenceSchema = z
  .object({
    book: BookSchema.exactOptional(),
    id: z.string().exactOptional().openapi({ example: 'd75b3350' }),
    sentence: z
      .string()
      .exactOptional()
      .openapi({
        example:
          'Around the first week in July I developed an unaccountable set of mixed emotions about that general northeasterly region.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Sentence')

export const getBooksRoute = createRoute({
  method: 'get',
  path: '/books',
  tags: ['Books'],
  summary: 'List all books',
  operationId: 'get-books',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({ data: z.array(BookSchema).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getBooksIdSentencesRoute = createRoute({
  method: 'get',
  path: '/books/{id}/sentences',
  tags: ['Sentences'],
  summary: 'Random sentences from a specific book',
  operationId: 'get-sentences-from-book',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Book ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 1, maximum: 100, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(SentenceSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSentencesRoute = createRoute({
  method: 'get',
  path: '/sentences',
  tags: ['Sentences'],
  summary: 'A random sentence',
  operationId: 'get-sentences',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(100),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 1, maximum: 100, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(SentenceSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSentencesIdRoute = createRoute({
  method: 'get',
  path: '/sentences/{id}',
  tags: ['Sentences'],
  summary: 'A specific sentence',
  operationId: 'get-specific-sentence',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Sentence ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({ data: SentenceSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})
