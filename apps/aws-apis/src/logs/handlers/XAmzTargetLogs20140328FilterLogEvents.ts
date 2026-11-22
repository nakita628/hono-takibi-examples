import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328FilterLogEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328FilterLogEventsHandler = app.openapi(
  postXAmzTargetLogs20140328FilterLogEventsRoute,
  (c) => {},
)
