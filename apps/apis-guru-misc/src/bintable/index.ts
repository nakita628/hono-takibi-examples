import { OpenAPIHono } from '@hono/zod-openapi'
import { getBalanceRoute, getBinRoute } from './routes'
import { getBalanceRouteHandler, getBinRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBalanceRoute, getBalanceRouteHandler)
  .openapi(getBinRoute, getBinRouteHandler)

export default app
