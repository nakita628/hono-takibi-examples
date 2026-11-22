import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsCreateApiDestinationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsCreateApiDestinationHandler = app.openapi(
  postXAmzTargetAWSEventsCreateApiDestinationRoute,
  (c) => {},
)
