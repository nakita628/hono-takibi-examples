import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreatePredictorBacktestExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastCreatePredictorBacktestExportJobHandler = app.openapi(
  postXAmzTargetAmazonForecastCreatePredictorBacktestExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
