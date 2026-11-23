import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
