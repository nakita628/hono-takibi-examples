import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceCreateAnomalySubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceCreateAnomalySubscriptionHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceCreateAnomalySubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
