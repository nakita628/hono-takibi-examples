import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListMonitorEvaluationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastListMonitorEvaluationsHandler = app.openapi(
  postXAmzTargetAmazonForecastListMonitorEvaluationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
