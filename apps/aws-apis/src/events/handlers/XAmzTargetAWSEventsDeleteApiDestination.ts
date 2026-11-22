import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeleteApiDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDeleteApiDestinationHandler = app.openapi(
  postXAmzTargetAWSEventsDeleteApiDestinationRoute,
  (c) => {},
)
