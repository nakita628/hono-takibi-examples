import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetSecurityConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetSecurityConfigurationsHandler = app.openapi(
  postXAmzTargetAWSGlueGetSecurityConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
