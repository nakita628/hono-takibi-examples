import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSInsightsIndexServiceGetAnomaliesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSInsightsIndexServiceGetAnomaliesHandler = app.openapi(
  postXAmzTargetAWSInsightsIndexServiceGetAnomaliesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
