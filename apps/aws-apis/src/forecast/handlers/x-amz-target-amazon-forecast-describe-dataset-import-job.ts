import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeDatasetImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDescribeDatasetImportJobHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeDatasetImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
