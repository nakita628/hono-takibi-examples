import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPerformanceInsightsv20180227GetResourceMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPerformanceInsightsv20180227GetResourceMetricsHandler = app.openapi(
  postXAmzTargetPerformanceInsightsv20180227GetResourceMetricsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
