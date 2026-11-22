import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128PutLoggingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128PutLoggingConfigurationHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128PutLoggingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
