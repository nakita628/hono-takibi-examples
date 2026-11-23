import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListLoggingConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128ListLoggingConfigurationsHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListLoggingConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
