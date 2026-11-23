import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchperpackageRoute, getSearchRoute } from './routes'
import { getSearchperpackageRouteHandler, getSearchRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getSearchperpackageRoute, getSearchperpackageRouteHandler)

export default app
