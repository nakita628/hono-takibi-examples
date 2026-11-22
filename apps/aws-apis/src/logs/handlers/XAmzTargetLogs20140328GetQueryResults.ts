import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328GetQueryResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328GetQueryResultsHandler = app.openapi(
  postXAmzTargetLogs20140328GetQueryResultsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
