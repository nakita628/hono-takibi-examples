import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartDisconnectJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartDisconnectJsonHandler = app.openapi(getCartDisconnectJsonRoute, (c) => {
  throw new Error('Not implemented')
})
