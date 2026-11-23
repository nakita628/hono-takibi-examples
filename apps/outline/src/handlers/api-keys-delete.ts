import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiKeysDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKeysDeleteHandler = app.openapi(postApiKeysDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
