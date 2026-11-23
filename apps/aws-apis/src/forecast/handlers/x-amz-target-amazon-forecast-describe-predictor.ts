import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribePredictorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDescribePredictorHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribePredictorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
