import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrdersLagoIdRoute, getOrdersRoute, postOrdersLagoIdExecuteRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrdersLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersLagoIdExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
