import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsInsightsIndexServiceGetAnomalyMonitorsHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetAnomalyMonitorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
