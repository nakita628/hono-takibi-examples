import { createRoute, z } from '@hono/zod-openapi'

const UserResponseSchema = z
  .any()
  .openapi({ example: { user: { email: 'test@example.com', name: 'Test user name' } } })
  .openapi('UserResponse')

const _400ResponseRefResponse = { description: 'Validation failed', content: {} }

export const getExampleRoute = createRoute({
  method: 'get',
  path: '/example',
  description: 'Showcase of responses with an `example` property present.',
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        TestHeader: {
          description: 'A test example header',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'A test example header', param: { required: false } }),
        },
      }),
    },
    204: { description: 'OK', content: {} },
  },
})

export const getExamplesRoute = createRoute({
  method: 'get',
  path: '/examples',
  description: 'Showcase of responses with an `examples` property present.',
  responses: {
    201: { description: 'OK', content: {} },
    202: { description: 'OK', content: {} },
    400: _400ResponseRefResponse,
    default: { description: 'OK', content: {} },
  },
})
