import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedbackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceProvideAnomalyFeedbackHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceProvideAnomalyFeedbackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
