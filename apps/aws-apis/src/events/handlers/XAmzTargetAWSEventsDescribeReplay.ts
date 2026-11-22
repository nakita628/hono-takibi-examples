import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDescribeReplayRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDescribeReplayHandler = app.openapi(
  postXAmzTargetAWSEventsDescribeReplayRoute,
  (c) => {},
)
