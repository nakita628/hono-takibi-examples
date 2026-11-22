import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824PutLoggingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824PutLoggingConfigurationHandler = app.openapi(
  postXAmzTargetAWSWAF20150824PutLoggingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
