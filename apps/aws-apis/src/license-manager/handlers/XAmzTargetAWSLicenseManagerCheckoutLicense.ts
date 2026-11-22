import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCheckoutLicenseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerCheckoutLicenseHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCheckoutLicenseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
