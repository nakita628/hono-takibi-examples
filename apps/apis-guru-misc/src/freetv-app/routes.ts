import { createRoute, z } from '@hono/zod-openapi'

const NewsItemSchema = z
  .object({
    created: z.string().exactOptional().openapi({ title: 'News Published Time' }),
    ref: z.string().exactOptional().openapi({ title: 'News Url' }),
    thumbnail: z.string().exactOptional().openapi({ title: 'News Thumbnail' }),
    title: z.string().exactOptional().openapi({ title: 'News Title' }),
  })
  .openapi({ required: [] })
  .openapi('NewsItem')

const ApiResponseSchema = z
  .object({
    getLatestNewsForChatGPT: z
      .array(NewsItemSchema)
      .openapi({ description: 'The list of latest news.', title: 'Result of Latest News' }),
  })
  .openapi({ required: ['getLatestNewsForChatGPT'], title: 'ApiResponse' })
  .openapi('ApiResponse')

export const getServicesRoute = createRoute({
  method: 'get',
  path: '/services',
  summary: 'Query the latest news',
  description: 'Get the current latest news to user',
  operationId: 'getLatestNews',
  request: {
    query: z.object({
      mobile: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.literal(1),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'mobile',
            required: true,
            schema: { enum: [1], type: 'integer' },
          },
        }),
      funcs: z
        .literal('getLatestNewsForChatGPT')
        .openapi({
          param: {
            in: 'query',
            name: 'funcs',
            required: true,
            schema: { enum: ['getLatestNewsForChatGPT'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApiResponseSchema } } },
  },
})
