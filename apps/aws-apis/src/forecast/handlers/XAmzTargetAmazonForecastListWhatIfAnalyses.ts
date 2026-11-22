import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListWhatIfAnalysesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastListWhatIfAnalysesHandler = app.openapi(
  postXAmzTargetAmazonForecastListWhatIfAnalysesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
