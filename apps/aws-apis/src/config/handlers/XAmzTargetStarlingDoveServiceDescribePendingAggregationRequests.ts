import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
