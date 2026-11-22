import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsCreateEventBusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsCreateEventBusHandler = app.openapi(
  postXAmzTargetAWSEventsCreateEventBusRoute,
  (c) => {},
)
