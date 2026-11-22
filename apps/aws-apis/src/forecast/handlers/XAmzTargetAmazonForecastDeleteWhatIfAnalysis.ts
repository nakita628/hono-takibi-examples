import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteWhatIfAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDeleteWhatIfAnalysisHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteWhatIfAnalysisRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
