import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetUsageForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceGetUsageForecastHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetUsageForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
