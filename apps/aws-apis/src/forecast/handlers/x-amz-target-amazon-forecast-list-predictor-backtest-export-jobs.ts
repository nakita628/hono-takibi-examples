import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListPredictorBacktestExportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastListPredictorBacktestExportJobsHandler = app.openapi(
  postXAmzTargetAmazonForecastListPredictorBacktestExportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
