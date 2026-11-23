import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateWhatIfForecastExportRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastCreateWhatIfForecastExportHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateWhatIfForecastExportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
