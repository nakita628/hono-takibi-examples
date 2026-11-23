import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAirQualityRoute,
  getFindPlacesPrefixRoute,
  getFindPlacesRoute,
  getMapRoute,
  getNearestPlaceRoute,
  getPointRoute,
  getTimeMachineRoute,
} from './routes'
import {
  getAirQualityRouteHandler,
  getFindPlacesPrefixRouteHandler,
  getFindPlacesRouteHandler,
  getMapRouteHandler,
  getNearestPlaceRouteHandler,
  getPointRouteHandler,
  getTimeMachineRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAirQualityRoute, getAirQualityRouteHandler)
  .openapi(getFindPlacesRoute, getFindPlacesRouteHandler)
  .openapi(getFindPlacesPrefixRoute, getFindPlacesPrefixRouteHandler)
  .openapi(getMapRoute, getMapRouteHandler)
  .openapi(getNearestPlaceRoute, getNearestPlaceRouteHandler)
  .openapi(getPointRoute, getPointRouteHandler)
  .openapi(getTimeMachineRoute, getTimeMachineRouteHandler)

export default app
