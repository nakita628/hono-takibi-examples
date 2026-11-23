import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeConformancePackStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeConformancePackStatusHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeConformancePackStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
