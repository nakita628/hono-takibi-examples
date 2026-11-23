import { OpenAPIHono } from '@hono/zod-openapi'
import { getDealItemRoute, getEventEventIdRoute, getEventItemRoute, getEventRoute } from './routes'
import {
  getDealItemRouteHandler,
  getEventEventIdRouteHandler,
  getEventItemRouteHandler,
  getEventRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDealItemRoute, getDealItemRouteHandler)
  .openapi(getEventRoute, getEventRouteHandler)
  .openapi(getEventEventIdRoute, getEventEventIdRouteHandler)
  .openapi(getEventItemRoute, getEventItemRouteHandler)

export default app
