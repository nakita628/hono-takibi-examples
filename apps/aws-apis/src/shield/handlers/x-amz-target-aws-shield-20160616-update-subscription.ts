import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616UpdateSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616UpdateSubscriptionHandler = app.openapi(
  postXAmzTargetAWSShield20160616UpdateSubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
