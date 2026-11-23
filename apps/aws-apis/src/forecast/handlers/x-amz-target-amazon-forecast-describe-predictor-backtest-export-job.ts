import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribePredictorBacktestExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDescribePredictorBacktestExportJobHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribePredictorBacktestExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
