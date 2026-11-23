import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteWhatIfForecastExportRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDeleteWhatIfForecastExportHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteWhatIfForecastExportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
