import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GetLoggingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729GetLoggingConfigurationHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GetLoggingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
