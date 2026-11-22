import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OrdersIdRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersIdHandler = app.openapi(getV1OrdersIdRoute, (c) => {
  throw new Error('Not implemented')
})
