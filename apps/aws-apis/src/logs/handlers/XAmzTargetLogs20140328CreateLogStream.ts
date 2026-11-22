import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328CreateLogStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328CreateLogStreamHandler = app.openapi(
  postXAmzTargetLogs20140328CreateLogStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
