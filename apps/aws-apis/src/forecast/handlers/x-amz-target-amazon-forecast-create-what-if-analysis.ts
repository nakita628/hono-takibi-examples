import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateWhatIfAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastCreateWhatIfAnalysisHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateWhatIfAnalysisRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
