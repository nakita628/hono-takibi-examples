import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DescribeProtectionGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616DescribeProtectionGroupHandler = app.openapi(
  postXAmzTargetAWSShield20160616DescribeProtectionGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
