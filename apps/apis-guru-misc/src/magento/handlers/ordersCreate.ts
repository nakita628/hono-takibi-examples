import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1OrdersCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersCreateHandler = app.openapi(putV1OrdersCreateRoute, (c) => {
  throw new Error('Not implemented')
})
