import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616ListResourcesInProtectionGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616ListResourcesInProtectionGroupHandler = app.openapi(
  postXAmzTargetAWSShield20160616ListResourcesInProtectionGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
