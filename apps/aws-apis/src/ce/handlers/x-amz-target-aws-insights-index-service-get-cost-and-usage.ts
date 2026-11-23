import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetCostAndUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceGetCostAndUsageHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetCostAndUsageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
