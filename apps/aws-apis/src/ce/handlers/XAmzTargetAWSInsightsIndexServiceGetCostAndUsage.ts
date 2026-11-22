import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetCostAndUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceGetCostAndUsageHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetCostAndUsageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
