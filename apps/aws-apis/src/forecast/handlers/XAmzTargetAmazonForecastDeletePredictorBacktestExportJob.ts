import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeletePredictorBacktestExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDeletePredictorBacktestExportJobHandler = app.openapi(
  postXAmzTargetAmazonForecastDeletePredictorBacktestExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
