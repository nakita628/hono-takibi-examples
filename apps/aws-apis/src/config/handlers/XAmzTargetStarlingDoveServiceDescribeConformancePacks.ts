import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeConformancePacksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeConformancePacksHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeConformancePacksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
