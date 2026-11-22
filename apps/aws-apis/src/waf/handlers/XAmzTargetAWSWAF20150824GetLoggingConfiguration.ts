import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetLoggingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824GetLoggingConfigurationHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetLoggingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
