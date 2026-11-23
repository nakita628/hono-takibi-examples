import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerUpdateServiceSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerUpdateServiceSettingsHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerUpdateServiceSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
