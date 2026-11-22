import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
