import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328GetLogGroupFieldsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328GetLogGroupFieldsHandler = app.openapi(
  postXAmzTargetLogs20140328GetLogGroupFieldsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
