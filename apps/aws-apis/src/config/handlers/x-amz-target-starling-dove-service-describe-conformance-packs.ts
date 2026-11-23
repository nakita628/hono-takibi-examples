import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeConformancePacksRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeConformancePacksHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeConformancePacksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
