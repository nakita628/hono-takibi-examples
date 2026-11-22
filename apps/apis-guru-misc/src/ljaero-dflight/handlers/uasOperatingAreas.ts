import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUsV1UoaDistanceQueryRoute,
  postUsV1UoaPolygonQueryRoute,
  postUsV1UoaRouteQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uasOperatingAreasHandler = app
  .openapi(postUsV1UoaDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1UoaPolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1UoaRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
