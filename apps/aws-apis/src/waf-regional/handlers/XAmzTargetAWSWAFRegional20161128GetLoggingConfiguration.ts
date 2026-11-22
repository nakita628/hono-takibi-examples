import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetLoggingConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128GetLoggingConfigurationHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetLoggingConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
