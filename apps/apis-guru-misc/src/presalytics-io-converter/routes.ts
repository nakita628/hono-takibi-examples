import { createRoute, z } from '@hono/zod-openapi'

export const postSvgconvertRoute = createRoute({
  method: 'post',
  path: '/svgconvert',
  summary: 'converts pptx file to svg image',
  operationId: 'svgconvert',
  request: {
    body: {
      description: 'Fizepath to pptx file',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ title: 'File to Convert', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Url of svg file',
      content: {
        'application/json': {
          schema: z
            .object({ blob_name: z.string().exactOptional(), blob_url: z.string().exactOptional() })
            .openapi({ title: 'File Url', required: [] }),
        },
      },
    },
    400: { description: 'Bad Request.' },
    415: { description: 'Invalid file type' },
  },
})
