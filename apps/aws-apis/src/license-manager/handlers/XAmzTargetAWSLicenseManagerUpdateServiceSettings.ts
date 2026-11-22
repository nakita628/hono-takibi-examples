import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerUpdateServiceSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerUpdateServiceSettingsHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerUpdateServiceSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
