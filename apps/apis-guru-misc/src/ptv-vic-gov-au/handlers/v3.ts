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
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(getV3DeparturesRouteTypeRouteTypeStopStopIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DirectionsRouteRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DirectionsDirectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DirectionsDirectionIdRouteTypeRouteTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DisruptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DisruptionsModesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DisruptionsRouteRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DisruptionsRouteRouteIdStopStopIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DisruptionsStopStopIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DisruptionsDisruptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3OutletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3OutletsLocationLatitudeLongitudeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PatternRunRunRefRouteTypeRouteTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3RouteTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3RoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3RoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3RunsRouteRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3RunsRouteRouteIdRouteTypeRouteTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3RunsRunRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3RunsRunRefRouteTypeRouteTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchSearchTermRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StopsLocationLatitudeLongitudeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StopsRouteRouteIdRouteTypeRouteTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StopsStopIdRouteTypeRouteTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
