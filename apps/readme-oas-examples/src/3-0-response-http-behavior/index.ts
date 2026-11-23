import { OpenAPIHono } from '@hono/zod-openapi'
import { getCacheRoute, getStatus204Route, getStatus302Route } from './routes'
import {
  getCacheRouteHandler,
  getStatus204RouteHandler,
  getStatus302RouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCacheRoute, getCacheRouteHandler)
  .openapi(getStatus302Route, getStatus302RouteHandler)
  .openapi(getStatus204Route, getStatus204RouteHandler)

export default app
