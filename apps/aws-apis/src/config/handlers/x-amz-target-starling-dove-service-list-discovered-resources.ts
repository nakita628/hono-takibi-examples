import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceListDiscoveredResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceListDiscoveredResourcesHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceListDiscoveredResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
