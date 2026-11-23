import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeForecastExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDescribeForecastExportJobHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeForecastExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
