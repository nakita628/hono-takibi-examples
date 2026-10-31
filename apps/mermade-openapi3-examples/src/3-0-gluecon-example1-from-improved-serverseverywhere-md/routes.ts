import { createRoute, z } from '@hono/zod-openapi'

export const getPassportsIdRoute = createRoute({
  method: 'get',
  path: '/passports/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Ok' } },
})

export const postPassportsIdRoute = createRoute({
  method: 'post',
  path: '/passports/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: z.any() } } },
  },
  responses: { 200: { description: 'Ok' } },
  servers: [{ url: 'https://supersecure-api.example.com' }],
})

export const getImagesFilenameRoute = createRoute({
  method: 'get',
  path: '/images/{filename}',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: { name: 'filename', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Ok' } },
})

export const putImagesFilenameRoute = createRoute({
  method: 'put',
  path: '/images/{filename}',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: { name: 'filename', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Ok' } },
})

export const deleteImagesFilenameRoute = createRoute({
  method: 'delete',
  path: '/images/{filename}',
  request: {
    params: z.object({
      filename: z
        .string()
        .openapi({
          param: { name: 'filename', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Ok' } },
})
