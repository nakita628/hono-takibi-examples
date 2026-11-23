import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrderListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderListJsonHandler = app.openapi(getOrderListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
