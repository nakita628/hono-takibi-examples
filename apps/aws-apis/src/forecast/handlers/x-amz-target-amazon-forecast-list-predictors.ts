import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListPredictorsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastListPredictorsHandler = app.openapi(
  postXAmzTargetAmazonForecastListPredictorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
