import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeDatasetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDescribeDatasetGroupHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeDatasetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
