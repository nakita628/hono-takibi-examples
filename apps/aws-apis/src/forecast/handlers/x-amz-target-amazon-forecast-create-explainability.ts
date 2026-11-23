import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateExplainabilityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastCreateExplainabilityHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateExplainabilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
