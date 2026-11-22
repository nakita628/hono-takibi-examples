import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsUpdateConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsUpdateConnectionHandler = app.openapi(
  postXAmzTargetAWSEventsUpdateConnectionRoute,
  (c) => {},
)
