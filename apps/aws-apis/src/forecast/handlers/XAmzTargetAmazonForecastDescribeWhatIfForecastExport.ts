import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeWhatIfForecastExportRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDescribeWhatIfForecastExportHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeWhatIfForecastExportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
