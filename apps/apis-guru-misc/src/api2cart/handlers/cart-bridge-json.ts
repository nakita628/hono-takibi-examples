import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartBridgeJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartBridgeJsonHandler = app.openapi(getCartBridgeJsonRoute, (c) => {
  throw new Error('Not implemented')
})
