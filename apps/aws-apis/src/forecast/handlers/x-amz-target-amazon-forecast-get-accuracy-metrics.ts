import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastGetAccuracyMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastGetAccuracyMetricsHandler = app.openapi(
  postXAmzTargetAmazonForecastGetAccuracyMetricsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
