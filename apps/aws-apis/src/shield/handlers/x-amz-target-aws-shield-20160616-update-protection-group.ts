import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616UpdateProtectionGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616UpdateProtectionGroupHandler = app.openapi(
  postXAmzTargetAWSShield20160616UpdateProtectionGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
