import { createRoute, z } from '@hono/zod-openapi'

const LimitParamParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(50),
  )
  .default(20)
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'limit',
      required: false,
      schema: { type: 'integer', minimum: 1, maximum: 50, default: 20 },
      description: 'The numbers of items to return.',
    },
  })

export const getAnythingIdRoute = createRoute({
  method: 'get',
  path: '/anything/{id}',
  summary: '[get] Summary',
  description: '[get] Description',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            description: 'ID parameter',
            schema: { type: 'number' },
            required: true,
          },
        }),
    }),
    headers: z.object({
      'x-extra-id': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'header', name: 'x-extra-id', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postAnythingIdRoute = createRoute({
  method: 'post',
  path: '/anything/{id}',
  summary: '[post] Summary',
  description: '[post] Description',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            description: 'ID parameter',
            schema: { type: 'number' },
            required: true,
          },
        }),
    }),
    headers: z.object({
      'x-extra-id': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'header', name: 'x-extra-id', schema: { type: 'string' }, required: false },
        }),
    }),
    query: z.object({ limit: LimitParamParamsSchema }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingIdActionRoute = createRoute({
  method: 'get',
  path: '/anything/{id}/{action}',
  summary: '[get] Summary',
  description: '[get] Description',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            description: 'ID parameter',
            schema: { type: 'number' },
            required: true,
          },
        }),
      action: z
        .enum(['lists', 'statistics'])
        .openapi({
          param: {
            in: 'path',
            name: 'action',
            description: 'Action parameter',
            schema: { type: 'string', enum: ['lists', 'statistics'] },
            required: true,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingIdActionIdRoute = createRoute({
  method: 'get',
  path: '/anything/{id}/{action}/{id}',
  summary: '[get] Summary',
  description: '[get] Description',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({ param: { in: 'path', name: 'id', schema: { type: 'number' }, required: true } }),
      action: z
        .enum(['lists', 'statistics'])
        .openapi({
          param: {
            in: 'path',
            name: 'action',
            description: 'Action parameter',
            schema: { type: 'string', enum: ['lists', 'statistics'] },
            required: true,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAnythingIdOverrideRoute = createRoute({
  method: 'get',
  path: '/anything/{id}/override',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'A comma-separated list of IDs',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})
