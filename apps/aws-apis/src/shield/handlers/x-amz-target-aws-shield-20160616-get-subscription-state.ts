import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616GetSubscriptionStateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616GetSubscriptionStateHandler = app.openapi(
  postXAmzTargetAWSShield20160616GetSubscriptionStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
