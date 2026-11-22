import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OrdersItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersItemsHandler = app.openapi(getV1OrdersItemsRoute, (c) => {
  throw new Error('Not implemented')
})
