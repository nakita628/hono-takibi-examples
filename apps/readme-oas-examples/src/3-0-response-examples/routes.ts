import { createRoute, z } from '@hono/zod-openapi'

const UserResponseSchema = z
  .any()
  .openapi({ example: { $ref: '#/components/schemas/UserResponseExample' } })
  .openapi('UserResponse')

const UserResponseExampleSchema = z.any().openapi('UserResponseExample')

const _400ResponseRefResponse = { description: 'Validation failed' }

export const getExampleRoute = createRoute({
  method: 'get',
  path: '/example',
  description: 'Showcase of responses with an `example` property present.',
  responses: {
    200: {
      description: 'OK',
      headers: z.object({
        TestHeader: z
          .string()
          .exactOptional()
          .openapi({ description: 'A test example header', param: { required: false } }),
      }),
    },
    204: { description: 'OK' },
  },
})

export const getExamplesRoute = createRoute({
  method: 'get',
  path: '/examples',
  description: 'Showcase of responses with an `examples` property present.',
  responses: {
    201: { description: 'OK' },
    202: { description: 'OK' },
    400: _400ResponseRefResponse,
    default: { description: 'OK' },
  },
})
