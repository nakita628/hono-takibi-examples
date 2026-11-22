import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUsV1RestrictionsDistanceQueryRoute,
  postUsV1RestrictionsPolygonQueryRoute,
  postUsV1RestrictionsRouteQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flightRestrictionsHandler = app
  .openapi(postUsV1RestrictionsDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1RestrictionsPolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1RestrictionsRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
