import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteExplainabilityExportRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDeleteExplainabilityExportHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteExplainabilityExportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
