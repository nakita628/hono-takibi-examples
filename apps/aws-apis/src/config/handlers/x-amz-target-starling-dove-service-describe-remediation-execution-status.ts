import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
