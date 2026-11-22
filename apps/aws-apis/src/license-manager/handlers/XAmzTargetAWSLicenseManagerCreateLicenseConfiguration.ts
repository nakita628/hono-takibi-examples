import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCreateLicenseConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerCreateLicenseConfigurationHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCreateLicenseConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
