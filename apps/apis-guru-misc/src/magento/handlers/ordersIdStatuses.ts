import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OrdersIdStatusesRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersIdStatusesHandler = app.openapi(getV1OrdersIdStatusesRoute, (c) => {
  throw new Error('Not implemented')
})
