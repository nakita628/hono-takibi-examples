import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUsV1SsaDistanceQueryRoute,
  postUsV1SsaPolygonQueryRoute,
  postUsV1SsaRouteQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const specialSecurityAreasHandler = app
  .openapi(postUsV1SsaDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1SsaPolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1SsaRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
