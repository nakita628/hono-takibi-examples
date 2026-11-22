import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616CreateProtectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616CreateProtectionHandler = app.openapi(
  postXAmzTargetAWSShield20160616CreateProtectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
