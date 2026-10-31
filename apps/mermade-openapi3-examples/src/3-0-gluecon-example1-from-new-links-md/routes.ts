import { createRoute, z } from '@hono/zod-openapi'

export const getUsersUsernameRoute = createRoute({
  method: 'get',
  path: '/users/{username}',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A representation of a user',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.int().exactOptional(),
              firstname: z.string().exactOptional(),
              lastname: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          example: { id: 243, firstname: 'Reginald', lastname: 'McDougall' },
        },
      },
      links: {
        userPhotoLink: { operationId: 'getPhoto', parameters: { userid: '$response.body#/id' } },
      },
    },
  },
})

export const getUsersUseridPhotoRoute = createRoute({
  method: 'get',
  path: '/users/{userid}/photo',
  operationId: 'getPhoto',
  request: {
    params: z.object({
      userid: z
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
          param: { name: 'userid', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { 200: { description: 'A photo image', content: {} } },
})
