import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAreasRoute,
  getEventsRoute,
  getJurisdictiongeographyRoute,
  getJurisdictionRoute,
} from './routes'
import {
  getAreasRouteHandler,
  getEventsRouteHandler,
  getJurisdictiongeographyRouteHandler,
  getJurisdictionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAreasRoute, getAreasRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(getJurisdictionRoute, getJurisdictionRouteHandler)
  .openapi(getJurisdictiongeographyRoute, getJurisdictiongeographyRouteHandler)

export default app
