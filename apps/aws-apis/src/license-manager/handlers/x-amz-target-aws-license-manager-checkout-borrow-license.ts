import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCheckoutBorrowLicenseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerCheckoutBorrowLicenseHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCheckoutBorrowLicenseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
