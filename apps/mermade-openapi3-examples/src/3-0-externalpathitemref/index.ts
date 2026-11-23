import { OpenAPIHono } from '@hono/zod-openapi'
import { getTest2Route, getTestRoute } from './routes'
import { getTest2RouteHandler, getTestRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getTestRoute, getTestRouteHandler)
  .openapi(getTest2Route, getTest2RouteHandler)

export default app
