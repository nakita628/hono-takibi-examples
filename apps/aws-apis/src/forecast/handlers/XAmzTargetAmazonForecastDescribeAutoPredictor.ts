import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeAutoPredictorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDescribeAutoPredictorHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeAutoPredictorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
