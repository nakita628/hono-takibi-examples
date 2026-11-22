import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDescribeConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDescribeConnectionHandler = app.openapi(
  postXAmzTargetAWSEventsDescribeConnectionRoute,
  (c) => {},
)
