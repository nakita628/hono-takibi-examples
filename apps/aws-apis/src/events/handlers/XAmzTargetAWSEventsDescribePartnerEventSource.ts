import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDescribePartnerEventSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDescribePartnerEventSourceHandler = app.openapi(
  postXAmzTargetAWSEventsDescribePartnerEventSourceRoute,
  (c) => {},
)
