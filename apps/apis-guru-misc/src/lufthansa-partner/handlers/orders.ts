import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrdersOrdersOrderIDNameRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app.openapi(getOrdersOrdersOrderIDNameRoute, (c) => {
  throw new Error('Not implemented')
})
