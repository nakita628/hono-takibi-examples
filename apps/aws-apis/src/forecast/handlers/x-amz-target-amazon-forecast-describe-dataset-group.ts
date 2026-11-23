import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeDatasetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDescribeDatasetGroupHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeDatasetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
