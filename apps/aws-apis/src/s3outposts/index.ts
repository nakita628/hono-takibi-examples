import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteS3OutpostsDeleteEndpointEndpointIdOutpostIdRoute,
  getS3OutpostsListEndpointsRoute,
  getS3OutpostsListOutpostsWithS3Route,
  getS3OutpostsListSharedEndpointsOutpostIdRoute,
  postS3OutpostsCreateEndpointRoute,
} from './routes'
import {
  deleteS3OutpostsDeleteEndpointEndpointIdOutpostIdRouteHandler,
  getS3OutpostsListEndpointsRouteHandler,
  getS3OutpostsListOutpostsWithS3RouteHandler,
  getS3OutpostsListSharedEndpointsOutpostIdRouteHandler,
  postS3OutpostsCreateEndpointRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postS3OutpostsCreateEndpointRoute, postS3OutpostsCreateEndpointRouteHandler)
  .openapi(
    deleteS3OutpostsDeleteEndpointEndpointIdOutpostIdRoute,
    deleteS3OutpostsDeleteEndpointEndpointIdOutpostIdRouteHandler,
  )
  .openapi(getS3OutpostsListEndpointsRoute, getS3OutpostsListEndpointsRouteHandler)
  .openapi(getS3OutpostsListOutpostsWithS3Route, getS3OutpostsListOutpostsWithS3RouteHandler)
  .openapi(
    getS3OutpostsListSharedEndpointsOutpostIdRoute,
    getS3OutpostsListSharedEndpointsOutpostIdRouteHandler,
  )

export default app
