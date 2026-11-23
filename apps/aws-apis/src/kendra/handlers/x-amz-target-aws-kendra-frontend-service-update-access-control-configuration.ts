import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceUpdateAccessControlConfigurationHandler =
  app.openapi(postXAmzTargetAWSKendraFrontendServiceUpdateAccessControlConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
