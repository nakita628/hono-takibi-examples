import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerGetServiceSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerGetServiceSettingsHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerGetServiceSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
