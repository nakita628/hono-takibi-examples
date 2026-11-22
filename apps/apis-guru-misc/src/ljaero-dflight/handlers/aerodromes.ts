import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUsV1AerodromesDistanceQueryRoute,
  postUsV1AerodromesPolygonQueryRoute,
  postUsV1AerodromesRouteQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aerodromesHandler = app
  .openapi(postUsV1AerodromesDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1AerodromesPolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1AerodromesRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
