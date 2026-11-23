import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFacilitiesAllRoute,
  getFacilitiesIdRoute,
  getFacilitiesRoute,
  getIdsRoute,
  getNearbyRoute,
} from './routes'
import {
  getFacilitiesAllRouteHandler,
  getFacilitiesIdRouteHandler,
  getFacilitiesRouteHandler,
  getIdsRouteHandler,
  getNearbyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFacilitiesRoute, getFacilitiesRouteHandler)
  .openapi(getFacilitiesAllRoute, getFacilitiesAllRouteHandler)
  .openapi(getFacilitiesIdRoute, getFacilitiesIdRouteHandler)
  .openapi(getIdsRoute, getIdsRouteHandler)
  .openapi(getNearbyRoute, getNearbyRouteHandler)

export default app
