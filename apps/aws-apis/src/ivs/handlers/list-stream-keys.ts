import { OpenAPIHono } from '@hono/zod-openapi'
import { postListStreamKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const listStreamKeysHandler = app.openapi(postListStreamKeysRoute, (c) => {
  throw new Error('Not implemented')
})
