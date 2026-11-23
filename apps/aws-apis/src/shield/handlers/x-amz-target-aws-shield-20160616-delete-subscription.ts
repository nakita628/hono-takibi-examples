import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DeleteSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616DeleteSubscriptionHandler = app.openapi(
  postXAmzTargetAWSShield20160616DeleteSubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
