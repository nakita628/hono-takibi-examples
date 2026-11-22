import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiOrders1137Route, getApiOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getApiOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrders1137Route, (c) => {
    throw new Error('Not implemented')
  })
