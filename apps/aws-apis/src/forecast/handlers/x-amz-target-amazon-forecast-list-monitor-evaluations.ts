import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListMonitorEvaluationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastListMonitorEvaluationsHandler = app.openapi(
  postXAmzTargetAmazonForecastListMonitorEvaluationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
