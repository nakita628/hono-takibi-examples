import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OrdersItemsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersItemsIdHandler = app.openapi(getV1OrdersItemsIdRoute, (c) => {
  throw new Error('Not implemented')
})
