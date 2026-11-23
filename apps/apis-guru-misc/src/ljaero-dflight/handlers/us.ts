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
} from '../routes'

const app = new OpenAPIHono()

export const usHandler = app
  .openapi(postUsV1AerodromesDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1AerodromesPolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1AerodromesRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1AirspaceDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1AirspacePolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1AirspaceRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1ObstaclesDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1ObstaclesPolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1ObstaclesRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1RestrictionsDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1RestrictionsPolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1RestrictionsRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1SsaDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1SsaPolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1SsaRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1UoaDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1UoaPolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1UoaRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1VenuesDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1VenuesPolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1VenuesRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1WxForecastDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1WxForecastPolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1WxForecastRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
