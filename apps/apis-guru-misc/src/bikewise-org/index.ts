import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2IncidentsIdRoute,
  getV2IncidentsRoute,
  getV2LocationsMarkersRoute,
  getV2LocationsRoute,
} from './routes'
import {
  getV2IncidentsIdRouteHandler,
  getV2IncidentsRouteHandler,
  getV2LocationsMarkersRouteHandler,
  getV2LocationsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2IncidentsRoute, getV2IncidentsRouteHandler)
  .openapi(getV2IncidentsIdRoute, getV2IncidentsIdRouteHandler)
  .openapi(getV2LocationsRoute, getV2LocationsRouteHandler)
  .openapi(getV2LocationsMarkersRoute, getV2LocationsMarkersRouteHandler)

export default app
