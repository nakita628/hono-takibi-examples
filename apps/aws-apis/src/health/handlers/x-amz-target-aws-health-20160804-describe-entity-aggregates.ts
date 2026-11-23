import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHealth20160804DescribeEntityAggregatesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHealth20160804DescribeEntityAggregatesHandler = app.openapi(
  postXAmzTargetAWSHealth20160804DescribeEntityAggregatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
