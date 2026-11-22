import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUsV1VenuesDistanceQueryRoute,
  postUsV1VenuesPolygonQueryRoute,
  postUsV1VenuesRouteQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const restrictedPublicVenuesHandler = app
  .openapi(postUsV1VenuesDistanceQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1VenuesPolygonQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsV1VenuesRouteQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
