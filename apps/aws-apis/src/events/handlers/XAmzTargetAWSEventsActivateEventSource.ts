import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsActivateEventSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsActivateEventSourceHandler = app.openapi(
  postXAmzTargetAWSEventsActivateEventSourceRoute,
  (c) => {},
)
