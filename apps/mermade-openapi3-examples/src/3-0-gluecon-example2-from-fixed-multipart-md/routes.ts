import { createRoute, z } from '@hono/zod-openapi'

export const postSubmitRoute = createRoute({
  method: 'post',
  path: '/submit',
  request: {
    body: {
      content: {
        'multipart/mixed': {
          schema: z
            .object({
              id: z.uuid().exactOptional(),
              address: z.object({}).exactOptional(),
              historyMetadata: z
                .object({})
                .exactOptional()
                .openapi({ description: 'metadata in XML format' }),
              profileImage: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
          encoding: {
            historyMetadata: { contentType: 'application/xml; charset=utf-8' },
            profileImage: { contentType: 'image/png, image/jpeg' },
          },
        },
      },
    },
  },
  responses: { 200: { description: 'Success!' } },
})
