import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerGetServiceSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerGetServiceSettingsHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerGetServiceSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
