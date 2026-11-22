import { OpenAPIHono } from '@hono/zod-openapi'
import { postCachekeyInvalidateRoute } from '../routes'

const app = new OpenAPIHono()

export const cacheRestApiHandler = app.openapi(postCachekeyInvalidateRoute, (c) => {
  throw new Error('Not implemented')
})
