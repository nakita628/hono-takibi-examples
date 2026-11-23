import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceCreateAnomalyMonitorHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceCreateAnomalyMonitorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
