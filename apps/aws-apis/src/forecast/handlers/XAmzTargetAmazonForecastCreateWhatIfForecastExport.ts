import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateWhatIfForecastExportRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastCreateWhatIfForecastExportHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateWhatIfForecastExportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
