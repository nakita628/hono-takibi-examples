import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DescribeQueriesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DescribeQueriesHandler = app.openapi(
  postXAmzTargetLogs20140328DescribeQueriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
