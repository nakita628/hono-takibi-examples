import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerDeleteLicenseConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerDeleteLicenseConfigurationHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerDeleteLicenseConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
