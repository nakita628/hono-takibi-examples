import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsHandler =
  app.openapi(postXAmzTargetPerformanceInsightsv20180227ListAvailableResourceMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
