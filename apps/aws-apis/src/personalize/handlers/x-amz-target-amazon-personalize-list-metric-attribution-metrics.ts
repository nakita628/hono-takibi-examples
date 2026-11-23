import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListMetricAttributionMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeListMetricAttributionMetricsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListMetricAttributionMetricsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
