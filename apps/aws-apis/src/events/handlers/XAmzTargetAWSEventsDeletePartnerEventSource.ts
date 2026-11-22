import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeletePartnerEventSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDeletePartnerEventSourceHandler = app.openapi(
  postXAmzTargetAWSEventsDeletePartnerEventSourceRoute,
  (c) => {},
)
