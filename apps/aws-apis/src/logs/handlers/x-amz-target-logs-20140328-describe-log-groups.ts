import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DescribeLogGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DescribeLogGroupsHandler = app.openapi(
  postXAmzTargetLogs20140328DescribeLogGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
