import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreatePredictorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastCreatePredictorHandler = app.openapi(
  postXAmzTargetAmazonForecastCreatePredictorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
