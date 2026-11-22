import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeWhatIfForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDescribeWhatIfForecastHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeWhatIfForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
