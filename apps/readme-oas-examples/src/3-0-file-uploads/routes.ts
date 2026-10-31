import { createRoute, z } from '@hono/zod-openapi'

export const postAnythingImagePngRoute = createRoute({
  method: 'post',
  path: '/anything/image-png',
  tags: ['image/png'],
  summary: '`image/png` uploads',
  description:
    'Support for a `requestBody` with an `image/png` media type to upload a single image binary.\n\nhttps://swagger.io/docs/specification/describing-request-body/file-upload/',
  request: {
    body: {
      content: { 'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const putAnythingMultipartFormdataRoute = createRoute({
  method: 'put',
  path: '/anything/multipart-formdata',
  tags: ['multipart/form-data'],
  summary: 'Multiple files',
  description:
    'Support for a `requestBody` with a `multipart/form-data` containing multiple files.\n\nhttps://swagger.io/docs/specification/describing-request-body/file-upload/',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              filename: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.file().openapi({ type: 'string', format: 'binary' })),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingMultipartFormdataRoute = createRoute({
  method: 'post',
  path: '/anything/multipart-formdata',
  tags: ['multipart/form-data'],
  summary: 'Single file',
  description:
    'Support for a `requestBody` with a `multipart/form-data` media type.\n\nhttps://swagger.io/docs/specification/describing-request-body/file-upload/',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              orderId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional(),
              userId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional(),
              documentFile: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})
