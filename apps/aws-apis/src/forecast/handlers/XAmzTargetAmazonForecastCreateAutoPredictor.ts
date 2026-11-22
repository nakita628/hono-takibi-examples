import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateAutoPredictorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastCreateAutoPredictorHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateAutoPredictorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
