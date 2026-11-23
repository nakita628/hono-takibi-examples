import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
