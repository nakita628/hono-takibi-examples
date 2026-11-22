import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCreateLicenseConversionTaskForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
