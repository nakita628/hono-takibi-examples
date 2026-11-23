import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDescribeConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsDescribeConnectionHandler = app.openapi(
  postXAmzTargetAWSEventsDescribeConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
