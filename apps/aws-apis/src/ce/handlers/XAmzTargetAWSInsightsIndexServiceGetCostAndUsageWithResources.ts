import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetCostAndUsageWithResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
