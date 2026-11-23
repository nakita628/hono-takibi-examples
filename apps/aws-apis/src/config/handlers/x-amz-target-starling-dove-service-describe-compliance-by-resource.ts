import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeComplianceByResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeComplianceByResourceHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeComplianceByResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
