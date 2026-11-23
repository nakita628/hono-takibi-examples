import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDescribeEventSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsDescribeEventSourceHandler = app.openapi(
  postXAmzTargetAWSEventsDescribeEventSourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
