import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetCostForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceGetCostForecastHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetCostForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
