import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeRemediationExceptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeRemediationExceptionsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeRemediationExceptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
