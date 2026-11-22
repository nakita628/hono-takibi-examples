import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OrdersRoute, postV1OrdersIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getV1OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrdersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
