import { createRoute, z } from '@hono/zod-openapi'

export const postMakePdfRoute = createRoute({
  method: 'post',
  path: '/make-pdf',
  summary: 'Generate a PDF from HTML or URL.',
  request: {
    body: {
      description:
        'Pass the API key from easypdfserver.com and either HTML or URL to generate your PDF.',
      content: {
        'application/json': {
          schema: z
            .object({
              html: z.string().exactOptional(),
              key: z.string(),
              url: z.string().exactOptional(),
            })
            .openapi({ required: ['key'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Your PDF file',
      content: {
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})
