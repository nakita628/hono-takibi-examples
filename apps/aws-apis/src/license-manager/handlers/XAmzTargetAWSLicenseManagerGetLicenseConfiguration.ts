import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerGetLicenseConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerGetLicenseConfigurationHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerGetLicenseConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
