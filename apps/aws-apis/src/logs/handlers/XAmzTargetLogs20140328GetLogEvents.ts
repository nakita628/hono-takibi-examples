import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328GetLogEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328GetLogEventsHandler = app.openapi(
  postXAmzTargetLogs20140328GetLogEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
