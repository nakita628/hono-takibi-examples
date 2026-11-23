import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceUpdateAnomalySubscriptionHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceUpdateAnomalySubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
