import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeWhatIfAnalysisRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDescribeWhatIfAnalysisHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeWhatIfAnalysisRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
