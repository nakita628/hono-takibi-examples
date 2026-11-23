import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDescribeArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsDescribeArchiveHandler = app.openapi(
  postXAmzTargetAWSEventsDescribeArchiveRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
