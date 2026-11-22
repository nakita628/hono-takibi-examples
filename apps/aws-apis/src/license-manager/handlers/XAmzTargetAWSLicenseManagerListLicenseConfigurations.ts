import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListLicenseConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerListLicenseConfigurationsHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListLicenseConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
