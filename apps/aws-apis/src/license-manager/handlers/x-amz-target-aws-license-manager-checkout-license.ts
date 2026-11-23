import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCheckoutLicenseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerCheckoutLicenseHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCheckoutLicenseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
