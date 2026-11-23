import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerGetLicenseConversionTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerGetLicenseConversionTaskHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerGetLicenseConversionTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
