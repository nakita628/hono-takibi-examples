import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeletePendingAggregationRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDeletePendingAggregationRequestHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeletePendingAggregationRequestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
