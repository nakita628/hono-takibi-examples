import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DeleteProtectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616DeleteProtectionHandler = app.openapi(
  postXAmzTargetAWSShield20160616DeleteProtectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
