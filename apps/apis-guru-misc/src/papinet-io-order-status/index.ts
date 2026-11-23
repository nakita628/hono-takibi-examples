import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrdersOrderIdRoute, getOrdersRoute } from './routes'
import { getOrdersOrderIdRouteHandler, getOrdersRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getOrdersRoute, getOrdersRouteHandler)
  .openapi(getOrdersOrderIdRoute, getOrdersOrderIdRouteHandler)

export default app
