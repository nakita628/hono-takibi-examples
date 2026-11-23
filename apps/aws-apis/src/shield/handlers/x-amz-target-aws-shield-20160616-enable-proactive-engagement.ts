import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616EnableProactiveEngagementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616EnableProactiveEngagementHandler = app.openapi(
  postXAmzTargetAWSShield20160616EnableProactiveEngagementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
