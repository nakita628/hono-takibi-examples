import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1OrdersParentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersParentIdHandler = app.openapi(putV1OrdersParentIdRoute, (c) => {
  throw new Error('Not implemented')
})
