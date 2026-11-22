import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDescribeDatasetHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
