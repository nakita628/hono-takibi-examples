import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListPredictorsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastListPredictorsHandler = app.openapi(
  postXAmzTargetAmazonForecastListPredictorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
