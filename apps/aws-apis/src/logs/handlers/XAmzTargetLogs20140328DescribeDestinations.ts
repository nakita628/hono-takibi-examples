import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DescribeDestinationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328DescribeDestinationsHandler = app.openapi(
  postXAmzTargetLogs20140328DescribeDestinationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
