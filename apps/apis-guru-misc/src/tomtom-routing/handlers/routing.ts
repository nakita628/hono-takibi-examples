import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRoutingVersionNumberCalculateReachableRangeOriginContentTypeRoute,
  getRoutingVersionNumberCalculateRouteLocationsContentTypeRoute,
  postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRoute,
  postRoutingVersionNumberCalculateRouteLocationsContentTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routingHandler = app
  .openapi(getRoutingVersionNumberCalculateReachableRangeOriginContentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutingVersionNumberCalculateRouteLocationsContentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutingVersionNumberCalculateRouteLocationsContentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
