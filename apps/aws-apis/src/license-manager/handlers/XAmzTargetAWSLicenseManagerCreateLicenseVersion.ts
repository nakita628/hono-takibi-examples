import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCreateLicenseVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerCreateLicenseVersionHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCreateLicenseVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
