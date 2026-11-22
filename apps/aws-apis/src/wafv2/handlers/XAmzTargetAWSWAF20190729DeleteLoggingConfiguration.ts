import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729DeleteLoggingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729DeleteLoggingConfigurationHandler = app.openapi(
  postXAmzTargetAWSWAF20190729DeleteLoggingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
