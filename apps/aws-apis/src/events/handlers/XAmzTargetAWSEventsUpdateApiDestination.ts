import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsUpdateApiDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsUpdateApiDestinationHandler = app.openapi(
  postXAmzTargetAWSEventsUpdateApiDestinationRoute,
  (c) => {},
)
