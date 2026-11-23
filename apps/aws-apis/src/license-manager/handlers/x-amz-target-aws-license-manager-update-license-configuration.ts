import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerUpdateLicenseConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerUpdateLicenseConfigurationHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerUpdateLicenseConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
