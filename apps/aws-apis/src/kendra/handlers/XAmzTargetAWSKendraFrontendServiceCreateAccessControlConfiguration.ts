import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationHandler =
  app.openapi(postXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
