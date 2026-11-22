import { OpenAPIHono } from '@hono/zod-openapi'
import { postListStreamKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const ListStreamKeysHandler = app.openapi(postListStreamKeysRoute, (c) => {
  throw new Error('Not implemented')
})
