import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DeleteLogStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DeleteLogStreamHandler = app.openapi(
  postXAmzTargetLogs20140328DeleteLogStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
