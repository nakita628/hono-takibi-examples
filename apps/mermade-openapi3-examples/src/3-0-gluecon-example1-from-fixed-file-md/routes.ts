import { createRoute, z } from '@hono/zod-openapi'

export const putFilesFilenameRoute = createRoute({
  method: 'put',
  path: '/files/{filename}',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: { name: 'filename', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  responses: { default: { description: 'OK' } },
})
