import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDescribeArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDescribeArchiveHandler = app.openapi(
  postXAmzTargetAWSEventsDescribeArchiveRoute,
  (c) => {},
)
