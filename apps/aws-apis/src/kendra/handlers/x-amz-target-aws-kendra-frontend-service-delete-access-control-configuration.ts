import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceDeleteAccessControlConfigurationHandler =
  app.openapi(postXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
