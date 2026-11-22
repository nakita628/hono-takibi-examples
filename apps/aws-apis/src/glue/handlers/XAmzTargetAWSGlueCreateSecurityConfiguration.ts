import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateSecurityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCreateSecurityConfigurationHandler = app.openapi(
  postXAmzTargetAWSGlueCreateSecurityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
