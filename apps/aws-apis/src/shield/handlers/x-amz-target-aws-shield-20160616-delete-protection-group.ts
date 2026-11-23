import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DeleteProtectionGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616DeleteProtectionGroupHandler = app.openapi(
  postXAmzTargetAWSShield20160616DeleteProtectionGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
