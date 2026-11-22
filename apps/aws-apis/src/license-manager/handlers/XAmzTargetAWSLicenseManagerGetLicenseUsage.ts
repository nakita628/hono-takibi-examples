import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerGetLicenseUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerGetLicenseUsageHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerGetLicenseUsageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
