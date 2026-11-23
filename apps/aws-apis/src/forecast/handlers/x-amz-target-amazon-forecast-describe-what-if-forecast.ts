import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeWhatIfForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDescribeWhatIfForecastHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeWhatIfForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
