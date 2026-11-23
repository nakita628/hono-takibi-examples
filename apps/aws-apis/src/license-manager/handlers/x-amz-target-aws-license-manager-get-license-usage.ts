import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerGetLicenseUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerGetLicenseUsageHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerGetLicenseUsageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
