import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328PutLogEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328PutLogEventsHandler = app.openapi(
  postXAmzTargetLogs20140328PutLogEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
