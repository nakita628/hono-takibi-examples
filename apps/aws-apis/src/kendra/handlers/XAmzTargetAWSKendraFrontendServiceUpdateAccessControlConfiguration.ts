import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationHandler =
  app.openapi(postXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
