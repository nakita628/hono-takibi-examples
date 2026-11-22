import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerRejectGrantRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerRejectGrantHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerRejectGrantRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
