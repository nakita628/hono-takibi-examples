import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDataInsightsInsightIdQueryRoute,
  getDataInsightsInsightIdRoute,
  getDataInsightsRoute,
  getGeometriesGeometryRoute,
  getGeometriesRegionsIntersectingLatitudeLongitudeRoute,
  getTrafficCountsSegmentIdRoute,
  getTrafficRoadsNearestLatitudeLongitudeRoute,
} from './routes'
import {
  getDataInsightsInsightIdQueryRouteHandler,
  getDataInsightsInsightIdRouteHandler,
  getDataInsightsRouteHandler,
  getGeometriesGeometryRouteHandler,
  getGeometriesRegionsIntersectingLatitudeLongitudeRouteHandler,
  getTrafficCountsSegmentIdRouteHandler,
  getTrafficRoadsNearestLatitudeLongitudeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDataInsightsRoute, getDataInsightsRouteHandler)
  .openapi(getDataInsightsInsightIdRoute, getDataInsightsInsightIdRouteHandler)
  .openapi(getDataInsightsInsightIdQueryRoute, getDataInsightsInsightIdQueryRouteHandler)
  .openapi(getGeometriesGeometryRoute, getGeometriesGeometryRouteHandler)
  .openapi(
    getGeometriesRegionsIntersectingLatitudeLongitudeRoute,
    getGeometriesRegionsIntersectingLatitudeLongitudeRouteHandler,
  )
  .openapi(getTrafficCountsSegmentIdRoute, getTrafficCountsSegmentIdRouteHandler)
  .openapi(
    getTrafficRoadsNearestLatitudeLongitudeRoute,
    getTrafficRoadsNearestLatitudeLongitudeRouteHandler,
  )

export default app
