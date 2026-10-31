import { createRoute, z } from '@hono/zod-openapi'

const ApiKeySecurityScheme = { type: 'http', scheme: 'basic' }

export const getPetIdRoute = createRoute({
  method: 'get',
  path: '/pet/{id}',
  tags: ['pet'],
  summary: 'Find a pet',
  description: 'This operation will find a pet in the database.',
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
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 400: { description: 'Invalid status value' } },
  security: [],
})

export const putPetIdRoute = createRoute({
  method: 'put',
  path: '/pet/{id}',
  tags: ['pet'],
  summary: 'Update a pet',
  description: 'This operation will update a pet in the database.',
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
          z.int(),
        )
        .openapi({
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 400: { description: 'Invalid id value' } },
  security: [{ apiKey: [] }],
})
