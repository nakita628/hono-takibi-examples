import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthRoute, getVersionRoute, postLocateRoute } from './routes'
import { getHealthRouteHandler, getVersionRouteHandler, postLocateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(postLocateRoute, postLocateRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)

export default app
