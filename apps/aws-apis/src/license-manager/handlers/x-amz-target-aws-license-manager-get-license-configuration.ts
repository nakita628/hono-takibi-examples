import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerGetLicenseConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerGetLicenseConfigurationHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerGetLicenseConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
