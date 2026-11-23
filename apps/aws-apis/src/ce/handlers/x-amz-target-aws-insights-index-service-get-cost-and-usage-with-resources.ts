import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceGetCostAndUsageWithResourcesHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
