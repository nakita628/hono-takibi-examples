import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHealth20160804DescribeEventAggregatesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHealth20160804DescribeEventAggregatesHandler = app.openapi(
  postXAmzTargetAWSHealth20160804DescribeEventAggregatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
