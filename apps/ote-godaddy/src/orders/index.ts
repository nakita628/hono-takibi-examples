import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OrdersOrderIdRoute, getV1OrdersRoute } from './routes'
import { getV1OrdersOrderIdRouteHandler, getV1OrdersRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1OrdersRoute, getV1OrdersRouteHandler)
  .openapi(getV1OrdersOrderIdRoute, getV1OrdersOrderIdRouteHandler)

export default app
