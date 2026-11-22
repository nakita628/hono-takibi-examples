import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutAggregationAuthorizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServicePutAggregationAuthorizationHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutAggregationAuthorizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
