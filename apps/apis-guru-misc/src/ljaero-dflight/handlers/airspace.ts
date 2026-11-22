import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUsV1AirspaceDistanceQueryRoute,
  postUsV1AirspacePolygonQueryRoute,
  postUsV1AirspaceRouteQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const airspaceHandler = app
  .openapi(postUsV1AirspaceDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1AirspacePolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1AirspaceRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
