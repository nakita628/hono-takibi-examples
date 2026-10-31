import { createRoute, z } from '@hono/zod-openapi'

const CreateStatusSchema = z
  .object({
    id: z.string().exactOptional().openapi({ title: 'Id of the bin' }),
    status: z.int().exactOptional().openapi({ title: 'Update status (0: Success)' }),
    uri: z.string().exactOptional().openapi({ title: 'URI of the bin' }),
  })
  .openapi({ required: [] })
  .openapi('CreateStatus')

const DeleteStatusSchema = z
  .object({ status: z.int().exactOptional().openapi({ title: 'Update status (0: Success)' }) })
  .openapi({ required: [] })
  .openapi('DeleteStatus')

const ErrorSchema = z
  .object({
    message: z.string().exactOptional().openapi({ title: 'Error message' }),
    status: z.int().exactOptional().openapi({ title: 'Status (1: Error)' }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const UpdateStatusSchema = z
  .object({
    data: z.object({}).exactOptional().openapi({ title: 'Data updated' }),
    status: z.int().exactOptional().openapi({ title: 'Update status (0: Success)' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateStatus')

export const postBinRoute = createRoute({
  method: 'post',
  path: '/bin',
  summary: 'Create a json bin',
  responses: {
    200: {
      description: 'Bin information (id and URL)',
      content: { 'application/json': { schema: CreateStatusSchema } },
    },
    413: {
      description: "'JSON data too large' or 'Security key is too large'",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'Security key is required for private bin',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getBinIdRoute = createRoute({
  method: 'get',
  path: '/bin/{id}',
  summary: 'Return a json bin',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: 'Bin data', content: { 'application/json': { schema: z.object({}) } } },
    404: { description: 'Bin not found', content: { 'application/json': { schema: ErrorSchema } } },
    422: {
      description: 'Id must be specified',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putBinIdRoute = createRoute({
  method: 'put',
  path: '/bin/{id}',
  summary: 'Update a json bin',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'Bin data updated',
      content: { 'application/json': { schema: UpdateStatusSchema } },
    },
    401: {
      description: 'Wrong security key',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Bin not found', content: { 'application/json': { schema: ErrorSchema } } },
    413: {
      description: 'JSON data too large',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'Id must be specified',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteBinIdRoute = createRoute({
  method: 'delete',
  path: '/bin/{id}',
  summary: 'Delete a json bin',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'Status of the deletion',
      content: { 'application/json': { schema: DeleteStatusSchema } },
    },
    401: {
      description: 'Wrong security key',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Bin not found', content: { 'application/json': { schema: ErrorSchema } } },
    422: {
      description: 'Id must be specified',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchBinIdRoute = createRoute({
  method: 'patch',
  path: '/bin/{id}',
  summary: 'Partially update a json bin with JSON Merge Patch',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'Bin data updated',
      content: { 'application/json': { schema: UpdateStatusSchema } },
    },
    401: {
      description: 'Wrong security key',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Bin not found', content: { 'application/json': { schema: ErrorSchema } } },
    413: {
      description: 'JSON data too large',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'Id must be specified',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})
