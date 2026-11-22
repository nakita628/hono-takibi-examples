import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitorHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceUpdateAnomalyMonitorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
