import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeComplianceByResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeComplianceByResourceHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeComplianceByResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
