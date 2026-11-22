import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetSecurityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetSecurityConfigurationHandler = app.openapi(
  postXAmzTargetAWSGlueGetSecurityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
