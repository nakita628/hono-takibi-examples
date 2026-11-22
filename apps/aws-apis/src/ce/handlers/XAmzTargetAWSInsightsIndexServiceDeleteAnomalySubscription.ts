import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscriptionHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceDeleteAnomalySubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
