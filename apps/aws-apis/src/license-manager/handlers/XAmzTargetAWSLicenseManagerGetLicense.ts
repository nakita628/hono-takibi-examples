import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerGetLicenseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerGetLicenseHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerGetLicenseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
