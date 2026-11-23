import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreatePredictorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastCreatePredictorHandler = app.openapi(
  postXAmzTargetAmazonForecastCreatePredictorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
