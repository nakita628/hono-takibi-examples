import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetSecurityConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetSecurityConfigurationsHandler = app.openapi(
  postXAmzTargetAWSGlueGetSecurityConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
