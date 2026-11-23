import { OpenAPIHono } from '@hono/zod-openapi'
import { postCartClearCacheJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartClearCacheJsonHandler = app.openapi(postCartClearCacheJsonRoute, (c) => {
  throw new Error('Not implemented')
})
