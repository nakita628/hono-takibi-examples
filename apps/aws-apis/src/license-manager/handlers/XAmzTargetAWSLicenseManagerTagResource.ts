import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerTagResourceHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
