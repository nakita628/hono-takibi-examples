import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1OrdersIdCancelRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersIdCancelHandler = app.openapi(postV1OrdersIdCancelRoute, (c) => {
  throw new Error('Not implemented')
})
