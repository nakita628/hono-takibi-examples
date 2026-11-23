import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328FilterLogEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328FilterLogEventsHandler = app.openapi(
  postXAmzTargetLogs20140328FilterLogEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
