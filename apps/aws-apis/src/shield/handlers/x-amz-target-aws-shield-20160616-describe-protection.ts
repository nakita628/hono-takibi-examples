import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DescribeProtectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616DescribeProtectionHandler = app.openapi(
  postXAmzTargetAWSShield20160616DescribeProtectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
