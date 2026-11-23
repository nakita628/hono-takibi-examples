import { OpenAPIHono } from '@hono/zod-openapi'
import { getJb2008Route, getNrlmsise00Route, getWamIpeRoute } from './routes'
import { getJb2008RouteHandler, getNrlmsise00RouteHandler, getWamIpeRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getJb2008Route, getJb2008RouteHandler)
  .openapi(getNrlmsise00Route, getNrlmsise00RouteHandler)
  .openapi(getWamIpeRoute, getWamIpeRouteHandler)

export default app
