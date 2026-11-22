import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeDatasetImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDescribeDatasetImportJobHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeDatasetImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
