import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3DeparturesRouteTypeRouteTypeStopStopIdRoute,
  getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdRoute,
  getV3DirectionsDirectionIdRoute,
  getV3DirectionsDirectionIdRouteTypeRouteTypeRoute,
  getV3DirectionsRouteRouteIdRoute,
  getV3DisruptionsDisruptionIdRoute,
  getV3DisruptionsModesRoute,
  getV3DisruptionsRoute,
  getV3DisruptionsRouteRouteIdRoute,
  getV3DisruptionsRouteRouteIdStopStopIdRoute,
  getV3DisruptionsStopStopIdRoute,
  getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneRoute,
  getV3OutletsLocationLatitudeLongitudeRoute,
  getV3OutletsRoute,
  getV3PatternRunRunRefRouteTypeRouteTypeRoute,
  getV3RoutesRoute,
  getV3RoutesRouteIdRoute,
  getV3RouteTypesRoute,
  getV3RunsRouteRouteIdRoute,
  getV3RunsRouteRouteIdRouteTypeRouteTypeRoute,
  getV3RunsRunRefRoute,
  getV3RunsRunRefRouteTypeRouteTypeRoute,
  getV3SearchSearchTermRoute,
  getV3StopsLocationLatitudeLongitudeRoute,
  getV3StopsRouteRouteIdRouteTypeRouteTypeRoute,
  getV3StopsStopIdRouteTypeRouteTypeRoute,
} from './routes'
import {
  getV3DeparturesRouteTypeRouteTypeStopStopIdRouteHandler,
  getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdRouteHandler,
  getV3DirectionsDirectionIdRouteHandler,
  getV3DirectionsDirectionIdRouteTypeRouteTypeRouteHandler,
  getV3DirectionsRouteRouteIdRouteHandler,
  getV3DisruptionsDisruptionIdRouteHandler,
  getV3DisruptionsModesRouteHandler,
  getV3DisruptionsRouteHandler,
  getV3DisruptionsRouteRouteIdRouteHandler,
  getV3DisruptionsRouteRouteIdStopStopIdRouteHandler,
  getV3DisruptionsStopStopIdRouteHandler,
  getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneRouteHandler,
  getV3OutletsLocationLatitudeLongitudeRouteHandler,
  getV3OutletsRouteHandler,
  getV3PatternRunRunRefRouteTypeRouteTypeRouteHandler,
  getV3RoutesRouteHandler,
  getV3RoutesRouteIdRouteHandler,
  getV3RouteTypesRouteHandler,
  getV3RunsRouteRouteIdRouteHandler,
  getV3RunsRouteRouteIdRouteTypeRouteTypeRouteHandler,
  getV3RunsRunRefRouteHandler,
  getV3RunsRunRefRouteTypeRouteTypeRouteHandler,
  getV3SearchSearchTermRouteHandler,
  getV3StopsLocationLatitudeLongitudeRouteHandler,
  getV3StopsRouteRouteIdRouteTypeRouteTypeRouteHandler,
  getV3StopsStopIdRouteTypeRouteTypeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV3DeparturesRouteTypeRouteTypeStopStopIdRoute,
    getV3DeparturesRouteTypeRouteTypeStopStopIdRouteHandler,
  )
  .openapi(
    getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdRoute,
    getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdRouteHandler,
  )
  .openapi(getV3DirectionsRouteRouteIdRoute, getV3DirectionsRouteRouteIdRouteHandler)
  .openapi(getV3DirectionsDirectionIdRoute, getV3DirectionsDirectionIdRouteHandler)
  .openapi(
    getV3DirectionsDirectionIdRouteTypeRouteTypeRoute,
    getV3DirectionsDirectionIdRouteTypeRouteTypeRouteHandler,
  )
  .openapi(getV3DisruptionsRoute, getV3DisruptionsRouteHandler)
  .openapi(getV3DisruptionsModesRoute, getV3DisruptionsModesRouteHandler)
  .openapi(getV3DisruptionsRouteRouteIdRoute, getV3DisruptionsRouteRouteIdRouteHandler)
  .openapi(
    getV3DisruptionsRouteRouteIdStopStopIdRoute,
    getV3DisruptionsRouteRouteIdStopStopIdRouteHandler,
  )
  .openapi(getV3DisruptionsStopStopIdRoute, getV3DisruptionsStopStopIdRouteHandler)
  .openapi(getV3DisruptionsDisruptionIdRoute, getV3DisruptionsDisruptionIdRouteHandler)
  .openapi(
    getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneRoute,
    getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneRouteHandler,
  )
  .openapi(getV3OutletsRoute, getV3OutletsRouteHandler)
  .openapi(
    getV3OutletsLocationLatitudeLongitudeRoute,
    getV3OutletsLocationLatitudeLongitudeRouteHandler,
  )
  .openapi(
    getV3PatternRunRunRefRouteTypeRouteTypeRoute,
    getV3PatternRunRunRefRouteTypeRouteTypeRouteHandler,
  )
  .openapi(getV3RouteTypesRoute, getV3RouteTypesRouteHandler)
  .openapi(getV3RoutesRoute, getV3RoutesRouteHandler)
  .openapi(getV3RoutesRouteIdRoute, getV3RoutesRouteIdRouteHandler)
  .openapi(getV3RunsRouteRouteIdRoute, getV3RunsRouteRouteIdRouteHandler)
  .openapi(
    getV3RunsRouteRouteIdRouteTypeRouteTypeRoute,
    getV3RunsRouteRouteIdRouteTypeRouteTypeRouteHandler,
  )
  .openapi(getV3RunsRunRefRoute, getV3RunsRunRefRouteHandler)
  .openapi(getV3RunsRunRefRouteTypeRouteTypeRoute, getV3RunsRunRefRouteTypeRouteTypeRouteHandler)
  .openapi(getV3SearchSearchTermRoute, getV3SearchSearchTermRouteHandler)
  .openapi(
    getV3StopsLocationLatitudeLongitudeRoute,
    getV3StopsLocationLatitudeLongitudeRouteHandler,
  )
  .openapi(
    getV3StopsRouteRouteIdRouteTypeRouteTypeRoute,
    getV3StopsRouteRouteIdRouteTypeRouteTypeRouteHandler,
  )
  .openapi(getV3StopsStopIdRouteTypeRouteTypeRoute, getV3StopsStopIdRouteTypeRouteTypeRouteHandler)

export default app
