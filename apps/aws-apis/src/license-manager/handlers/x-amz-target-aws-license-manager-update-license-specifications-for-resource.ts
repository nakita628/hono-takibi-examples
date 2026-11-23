import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerUpdateLicenseSpecificationsForResourceHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerUpdateLicenseSpecificationsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
