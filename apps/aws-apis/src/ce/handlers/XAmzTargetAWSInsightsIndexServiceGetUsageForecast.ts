import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetUsageForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceGetUsageForecastHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetUsageForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
