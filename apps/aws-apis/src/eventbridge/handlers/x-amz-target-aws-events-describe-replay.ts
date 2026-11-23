import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDescribeReplayRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsDescribeReplayHandler = app.openapi(
  postXAmzTargetAWSEventsDescribeReplayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
