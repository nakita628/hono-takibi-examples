import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328PutLogEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328PutLogEventsHandler = app.openapi(
  postXAmzTargetLogs20140328PutLogEventsRoute,
  (c) => {},
)
