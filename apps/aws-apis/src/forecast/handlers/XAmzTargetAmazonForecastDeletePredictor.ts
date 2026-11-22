import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeletePredictorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDeletePredictorHandler = app.openapi(
  postXAmzTargetAmazonForecastDeletePredictorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
