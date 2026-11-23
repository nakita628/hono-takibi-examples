import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRoutingVersionNumberCalculateReachableRangeOriginContentTypeRoute,
  getRoutingVersionNumberCalculateRouteLocationsContentTypeRoute,
  postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRoute,
  postRoutingVersionNumberCalculateRouteLocationsContentTypeRoute,
} from './routes'
import {
  getRoutingVersionNumberCalculateReachableRangeOriginContentTypeRouteHandler,
  getRoutingVersionNumberCalculateRouteLocationsContentTypeRouteHandler,
  postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRouteHandler,
  postRoutingVersionNumberCalculateRouteLocationsContentTypeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getRoutingVersionNumberCalculateReachableRangeOriginContentTypeRoute,
    getRoutingVersionNumberCalculateReachableRangeOriginContentTypeRouteHandler,
  )
  .openapi(
    postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRoute,
    postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRouteHandler,
  )
  .openapi(
    getRoutingVersionNumberCalculateRouteLocationsContentTypeRoute,
    getRoutingVersionNumberCalculateRouteLocationsContentTypeRouteHandler,
  )
  .openapi(
    postRoutingVersionNumberCalculateRouteLocationsContentTypeRoute,
    postRoutingVersionNumberCalculateRouteLocationsContentTypeRouteHandler,
  )

export default app
