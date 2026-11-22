import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1OrdersIdUnholdRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersIdUnholdHandler = app.openapi(postV1OrdersIdUnholdRoute, (c) => {
  throw new Error('Not implemented')
})
