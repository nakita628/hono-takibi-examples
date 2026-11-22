import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
