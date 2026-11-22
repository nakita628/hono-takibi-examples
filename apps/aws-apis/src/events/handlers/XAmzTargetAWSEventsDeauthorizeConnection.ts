import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeauthorizeConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsDeauthorizeConnectionHandler = app.openapi(
  postXAmzTargetAWSEventsDeauthorizeConnectionRoute,
  (c) => {},
)
