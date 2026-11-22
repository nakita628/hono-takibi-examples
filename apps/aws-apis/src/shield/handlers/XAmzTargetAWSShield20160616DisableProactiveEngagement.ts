import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DisableProactiveEngagementRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616DisableProactiveEngagementHandler = app.openapi(
  postXAmzTargetAWSShield20160616DisableProactiveEngagementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
