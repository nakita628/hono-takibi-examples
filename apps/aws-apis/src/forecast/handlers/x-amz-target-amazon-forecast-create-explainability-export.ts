import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateExplainabilityExportRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastCreateExplainabilityExportHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateExplainabilityExportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
