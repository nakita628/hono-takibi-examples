import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerCreateLicenseConversionTaskForResourceHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
