import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeletePredictorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDeletePredictorHandler = app.openapi(
  postXAmzTargetAmazonForecastDeletePredictorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
