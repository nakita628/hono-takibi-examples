import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrdersRoute, postOrdersStatusBatchRoute, postOrdersStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersStatusBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
