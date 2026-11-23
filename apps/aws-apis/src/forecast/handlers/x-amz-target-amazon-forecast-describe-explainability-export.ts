import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeExplainabilityExportRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDescribeExplainabilityExportHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeExplainabilityExportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
