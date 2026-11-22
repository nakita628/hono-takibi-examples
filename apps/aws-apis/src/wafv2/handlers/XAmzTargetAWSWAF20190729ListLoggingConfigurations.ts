import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729ListLoggingConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729ListLoggingConfigurationsHandler = app.openapi(
  postXAmzTargetAWSWAF20190729ListLoggingConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
