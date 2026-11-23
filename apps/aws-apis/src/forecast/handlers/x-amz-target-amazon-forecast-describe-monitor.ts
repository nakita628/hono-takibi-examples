import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeMonitorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDescribeMonitorHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeMonitorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
