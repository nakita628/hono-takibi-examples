import { OpenAPIHono } from '@hono/zod-openapi'
import { postCachekeyInvalidateRoute } from '../routes'

const app = new OpenAPIHono()

export const cachekeyHandler = app.openapi(postCachekeyInvalidateRoute, (c) => {
  throw new Error('Not implemented')
})
