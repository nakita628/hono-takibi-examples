import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrdersOrderIdRoute, getOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
