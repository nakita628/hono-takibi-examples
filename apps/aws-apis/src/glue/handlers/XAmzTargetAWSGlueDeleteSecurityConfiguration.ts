import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteSecurityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteSecurityConfigurationHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteSecurityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
