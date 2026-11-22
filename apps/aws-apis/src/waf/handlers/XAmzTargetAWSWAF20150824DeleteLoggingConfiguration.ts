import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeleteLoggingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824DeleteLoggingConfigurationHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeleteLoggingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
