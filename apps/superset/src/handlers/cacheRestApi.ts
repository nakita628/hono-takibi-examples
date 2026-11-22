import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1CachekeyInvalidateRoute } from '../routes'

const app = new OpenAPIHono()

export const cacheRestApiHandler = app.openapi(postApiV1CachekeyInvalidateRoute, (c) => {
  throw new Error('Not implemented')
})
