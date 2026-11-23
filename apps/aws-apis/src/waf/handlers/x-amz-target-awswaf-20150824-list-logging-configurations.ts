import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListLoggingConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824ListLoggingConfigurationsHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListLoggingConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
