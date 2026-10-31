import { createRoute, z } from '@hono/zod-openapi'

const ErrorSchema = z
  .string()
  .openapi({ description: 'an error message', example: 'Error: html empty' })
  .openapi('Error')

const ResultSchema = z.string().openapi({ description: 'PDF document' }).openapi('Result')

const InlineResponse_200Schema = z.xor([ErrorSchema, ResultSchema]).openapi('InlineResponse_200')

const PerfectpdfApiBodySchema = z
  .object({
    api_key: z.string().openapi({ description: 'api key', example: 'abc123' }),
    html: z
      .string()
      .openapi({
        description: 'html/css markup',
        example:
          '<!doctype html><html><head><meta charset="UTF-8"><title>my title</title><script src="script.js"></script></head><body><div>My PDF</div></body></html>',
      }),
  })
  .openapi({ required: ['api_key', 'html'] })
  .openapi('PerfectpdfApiBody')

export const postPerfectpdfApiRoute = createRoute({
  method: 'post',
  path: '/perfectpdf/api',
  summary: 'Returns PDF document.',
  request: {
    body: { content: { 'application/json': { schema: PerfectpdfApiBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Either a PDF document or an error message',
      content: { 'text/html': { schema: InlineResponse_200Schema } },
    },
  },
})
