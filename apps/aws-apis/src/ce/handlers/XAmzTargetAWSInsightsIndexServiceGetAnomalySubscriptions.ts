import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptionsHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetAnomalySubscriptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
