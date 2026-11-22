import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCheckoutBorrowLicenseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerCheckoutBorrowLicenseHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCheckoutBorrowLicenseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
