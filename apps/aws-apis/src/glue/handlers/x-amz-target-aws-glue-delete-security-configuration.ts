import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteSecurityConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteSecurityConfigurationHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteSecurityConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
