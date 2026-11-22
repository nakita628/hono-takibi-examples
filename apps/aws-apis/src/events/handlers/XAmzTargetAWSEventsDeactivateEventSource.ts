import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeactivateEventSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDeactivateEventSourceHandler = app.openapi(
  postXAmzTargetAWSEventsDeactivateEventSourceRoute,
  (c) => {},
)
