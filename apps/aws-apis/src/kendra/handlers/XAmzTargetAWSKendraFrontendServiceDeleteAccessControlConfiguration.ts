import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationHandler =
  app.openapi(postXAmzTargetAWSKendraFrontendServiceDeleteAccessControlConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
