import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteExplainabilityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDeleteExplainabilityHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteExplainabilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
