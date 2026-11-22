import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDescribeEventBusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDescribeEventBusHandler = app.openapi(
  postXAmzTargetAWSEventsDescribeEventBusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
