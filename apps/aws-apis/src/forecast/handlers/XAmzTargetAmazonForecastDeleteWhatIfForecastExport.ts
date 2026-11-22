import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteWhatIfForecastExportRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDeleteWhatIfForecastExportHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteWhatIfForecastExportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
