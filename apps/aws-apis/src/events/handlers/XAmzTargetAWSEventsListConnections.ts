import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsListConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsListConnectionsHandler = app.openapi(
  postXAmzTargetAWSEventsListConnectionsRoute,
  (c) => {},
)
