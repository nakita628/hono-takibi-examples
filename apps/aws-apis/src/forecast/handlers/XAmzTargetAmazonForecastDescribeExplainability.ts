import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeExplainabilityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDescribeExplainabilityHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeExplainabilityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
