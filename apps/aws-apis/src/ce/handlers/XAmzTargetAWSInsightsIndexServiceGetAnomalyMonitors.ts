import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
