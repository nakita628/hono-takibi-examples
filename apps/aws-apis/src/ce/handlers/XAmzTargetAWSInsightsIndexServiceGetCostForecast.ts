import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetCostForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceGetCostForecastHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetCostForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
