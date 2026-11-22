import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DescribeLogStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328DescribeLogStreamsHandler = app.openapi(
  postXAmzTargetLogs20140328DescribeLogStreamsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
