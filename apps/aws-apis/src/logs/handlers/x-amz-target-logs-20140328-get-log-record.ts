import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328GetLogRecordRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328GetLogRecordHandler = app.openapi(
  postXAmzTargetLogs20140328GetLogRecordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
