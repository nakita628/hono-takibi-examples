import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartListJsonHandler = app.openapi(getCartListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
