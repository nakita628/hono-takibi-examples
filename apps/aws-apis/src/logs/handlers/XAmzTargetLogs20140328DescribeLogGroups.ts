import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DescribeLogGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328DescribeLogGroupsHandler = app.openapi(
  postXAmzTargetLogs20140328DescribeLogGroupsRoute,
  (c) => {},
)
