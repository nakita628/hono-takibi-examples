import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceDeleteAnomalyMonitorHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceDeleteAnomalyMonitorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
