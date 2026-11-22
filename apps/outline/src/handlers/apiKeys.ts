import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiKeysCreateRoute, postApiKeysDeleteRoute, postApiKeysListRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(postApiKeysCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeysListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeysDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
