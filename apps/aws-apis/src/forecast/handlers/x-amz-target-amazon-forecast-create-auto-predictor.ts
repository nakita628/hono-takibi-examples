import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateAutoPredictorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastCreateAutoPredictorHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateAutoPredictorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
