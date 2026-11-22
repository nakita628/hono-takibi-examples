import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616CreateProtectionGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616CreateProtectionGroupHandler = app.openapi(
  postXAmzTargetAWSShield20160616CreateProtectionGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
