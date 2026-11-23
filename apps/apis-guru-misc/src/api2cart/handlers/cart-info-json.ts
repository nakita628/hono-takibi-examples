import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartInfoJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartInfoJsonHandler = app.openapi(getCartInfoJsonRoute, (c) => {
  throw new Error('Not implemented')
})
