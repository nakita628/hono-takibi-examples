import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHealth20160804DescribeEventDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHealth20160804DescribeEventDetailsHandler = app.openapi(
  postXAmzTargetAWSHealth20160804DescribeEventDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
