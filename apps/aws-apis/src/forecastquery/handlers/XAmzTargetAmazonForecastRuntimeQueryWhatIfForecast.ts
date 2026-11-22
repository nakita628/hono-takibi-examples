import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastRuntimeQueryWhatIfForecastHandler = app.openapi(
  postXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
