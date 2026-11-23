import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUsV1AerodromesDistanceQueryRoute,
  postUsV1AerodromesPolygonQueryRoute,
  postUsV1AerodromesRouteQueryRoute,
  postUsV1AirspaceDistanceQueryRoute,
  postUsV1AirspacePolygonQueryRoute,
  postUsV1AirspaceRouteQueryRoute,
  postUsV1ObstaclesDistanceQueryRoute,
  postUsV1ObstaclesPolygonQueryRoute,
  postUsV1ObstaclesRouteQueryRoute,
  postUsV1RestrictionsDistanceQueryRoute,
  postUsV1RestrictionsPolygonQueryRoute,
  postUsV1RestrictionsRouteQueryRoute,
  postUsV1SsaDistanceQueryRoute,
  postUsV1SsaPolygonQueryRoute,
  postUsV1SsaRouteQueryRoute,
  postUsV1UoaDistanceQueryRoute,
  postUsV1UoaPolygonQueryRoute,
  postUsV1UoaRouteQueryRoute,
  postUsV1VenuesDistanceQueryRoute,
  postUsV1VenuesPolygonQueryRoute,
  postUsV1VenuesRouteQueryRoute,
  postUsV1WxForecastDistanceQueryRoute,
  postUsV1WxForecastPolygonQueryRoute,
  postUsV1WxForecastRouteQueryRoute,
} from './routes'
import {
  postUsV1AerodromesDistanceQueryRouteHandler,
  postUsV1AerodromesPolygonQueryRouteHandler,
  postUsV1AerodromesRouteQueryRouteHandler,
  postUsV1AirspaceDistanceQueryRouteHandler,
  postUsV1AirspacePolygonQueryRouteHandler,
  postUsV1AirspaceRouteQueryRouteHandler,
  postUsV1ObstaclesDistanceQueryRouteHandler,
  postUsV1ObstaclesPolygonQueryRouteHandler,
  postUsV1ObstaclesRouteQueryRouteHandler,
  postUsV1RestrictionsDistanceQueryRouteHandler,
  postUsV1RestrictionsPolygonQueryRouteHandler,
  postUsV1RestrictionsRouteQueryRouteHandler,
  postUsV1SsaDistanceQueryRouteHandler,
  postUsV1SsaPolygonQueryRouteHandler,
  postUsV1SsaRouteQueryRouteHandler,
  postUsV1UoaDistanceQueryRouteHandler,
  postUsV1UoaPolygonQueryRouteHandler,
  postUsV1UoaRouteQueryRouteHandler,
  postUsV1VenuesDistanceQueryRouteHandler,
  postUsV1VenuesPolygonQueryRouteHandler,
  postUsV1VenuesRouteQueryRouteHandler,
  postUsV1WxForecastDistanceQueryRouteHandler,
  postUsV1WxForecastPolygonQueryRouteHandler,
  postUsV1WxForecastRouteQueryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postUsV1AerodromesDistanceQueryRoute, postUsV1AerodromesDistanceQueryRouteHandler)
  .openapi(postUsV1AerodromesPolygonQueryRoute, postUsV1AerodromesPolygonQueryRouteHandler)
  .openapi(postUsV1AerodromesRouteQueryRoute, postUsV1AerodromesRouteQueryRouteHandler)
  .openapi(postUsV1AirspaceDistanceQueryRoute, postUsV1AirspaceDistanceQueryRouteHandler)
  .openapi(postUsV1AirspacePolygonQueryRoute, postUsV1AirspacePolygonQueryRouteHandler)
  .openapi(postUsV1AirspaceRouteQueryRoute, postUsV1AirspaceRouteQueryRouteHandler)
  .openapi(postUsV1ObstaclesDistanceQueryRoute, postUsV1ObstaclesDistanceQueryRouteHandler)
  .openapi(postUsV1ObstaclesPolygonQueryRoute, postUsV1ObstaclesPolygonQueryRouteHandler)
  .openapi(postUsV1ObstaclesRouteQueryRoute, postUsV1ObstaclesRouteQueryRouteHandler)
  .openapi(postUsV1RestrictionsDistanceQueryRoute, postUsV1RestrictionsDistanceQueryRouteHandler)
  .openapi(postUsV1RestrictionsPolygonQueryRoute, postUsV1RestrictionsPolygonQueryRouteHandler)
  .openapi(postUsV1RestrictionsRouteQueryRoute, postUsV1RestrictionsRouteQueryRouteHandler)
  .openapi(postUsV1SsaDistanceQueryRoute, postUsV1SsaDistanceQueryRouteHandler)
  .openapi(postUsV1SsaPolygonQueryRoute, postUsV1SsaPolygonQueryRouteHandler)
  .openapi(postUsV1SsaRouteQueryRoute, postUsV1SsaRouteQueryRouteHandler)
  .openapi(postUsV1UoaDistanceQueryRoute, postUsV1UoaDistanceQueryRouteHandler)
  .openapi(postUsV1UoaPolygonQueryRoute, postUsV1UoaPolygonQueryRouteHandler)
  .openapi(postUsV1UoaRouteQueryRoute, postUsV1UoaRouteQueryRouteHandler)
  .openapi(postUsV1VenuesDistanceQueryRoute, postUsV1VenuesDistanceQueryRouteHandler)
  .openapi(postUsV1VenuesPolygonQueryRoute, postUsV1VenuesPolygonQueryRouteHandler)
  .openapi(postUsV1VenuesRouteQueryRoute, postUsV1VenuesRouteQueryRouteHandler)
  .openapi(postUsV1WxForecastDistanceQueryRoute, postUsV1WxForecastDistanceQueryRouteHandler)
  .openapi(postUsV1WxForecastPolygonQueryRoute, postUsV1WxForecastPolygonQueryRouteHandler)
  .openapi(postUsV1WxForecastRouteQueryRoute, postUsV1WxForecastRouteQueryRouteHandler)

export default app
