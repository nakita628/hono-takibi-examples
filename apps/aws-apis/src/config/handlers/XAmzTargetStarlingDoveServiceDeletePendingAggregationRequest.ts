import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeletePendingAggregationRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDeletePendingAggregationRequestHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeletePendingAggregationRequestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
