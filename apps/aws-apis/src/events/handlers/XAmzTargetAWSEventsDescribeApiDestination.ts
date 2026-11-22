import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDescribeApiDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDescribeApiDestinationHandler = app.openapi(
  postXAmzTargetAWSEventsDescribeApiDestinationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
