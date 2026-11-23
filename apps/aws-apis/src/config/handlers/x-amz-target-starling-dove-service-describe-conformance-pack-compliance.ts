import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeConformancePackComplianceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeConformancePackComplianceHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeConformancePackComplianceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
