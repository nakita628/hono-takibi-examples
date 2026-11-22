import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeleteEventBusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDeleteEventBusHandler = app.openapi(
  postXAmzTargetAWSEventsDeleteEventBusRoute,
  (c) => {},
)
