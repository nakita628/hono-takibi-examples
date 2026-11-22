import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteOrdersIdRoute, getOrdersIdRoute, getOrdersRoute, postOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
