import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeleteLoggingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128DeleteLoggingConfigurationHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeleteLoggingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
