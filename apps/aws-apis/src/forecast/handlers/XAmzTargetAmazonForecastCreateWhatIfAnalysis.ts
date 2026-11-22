import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateWhatIfAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastCreateWhatIfAnalysisHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateWhatIfAnalysisRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
