import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrdersOrderIdRoute, postOrdersOrderIdCancelRoute, postOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(postOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
