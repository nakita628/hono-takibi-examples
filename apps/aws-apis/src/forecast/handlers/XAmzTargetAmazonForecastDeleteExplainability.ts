import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteExplainabilityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDeleteExplainabilityHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteExplainabilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
