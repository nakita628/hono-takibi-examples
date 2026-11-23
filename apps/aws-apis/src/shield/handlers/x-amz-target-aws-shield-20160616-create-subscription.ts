import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616CreateSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616CreateSubscriptionHandler = app.openapi(
  postXAmzTargetAWSShield20160616CreateSubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
