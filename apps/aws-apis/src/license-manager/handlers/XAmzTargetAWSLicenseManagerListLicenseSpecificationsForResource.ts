import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListLicenseSpecificationsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerListLicenseSpecificationsForResourceHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListLicenseSpecificationsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
