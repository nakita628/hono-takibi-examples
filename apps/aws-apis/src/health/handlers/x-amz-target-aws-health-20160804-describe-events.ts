import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHealth20160804DescribeEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHealth20160804DescribeEventsHandler = app.openapi(
  postXAmzTargetAWSHealth20160804DescribeEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
