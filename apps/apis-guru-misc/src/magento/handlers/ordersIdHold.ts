import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1OrdersIdHoldRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersIdHoldHandler = app.openapi(postV1OrdersIdHoldRoute, (c) => {
  throw new Error('Not implemented')
})
