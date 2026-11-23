import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DescribeSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616DescribeSubscriptionHandler = app.openapi(
  postXAmzTargetAWSShield20160616DescribeSubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
