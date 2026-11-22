import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3OrdersIdRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app.openapi(getV3OrdersIdRoute, (c) => {
  throw new Error('Not implemented')
})
