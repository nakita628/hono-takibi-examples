import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListUsageForLicenseConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerListUsageForLicenseConfigurationHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListUsageForLicenseConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
