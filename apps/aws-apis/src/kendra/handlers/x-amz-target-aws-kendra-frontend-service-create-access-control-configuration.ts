import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceCreateAccessControlConfigurationHandler =
  app.openapi(postXAmzTargetAWSKendraFrontendServiceCreateAccessControlConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
