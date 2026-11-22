import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeConformancePackComplianceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeConformancePackComplianceHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeConformancePackComplianceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
