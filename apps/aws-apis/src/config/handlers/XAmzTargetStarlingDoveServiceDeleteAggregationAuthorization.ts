import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
