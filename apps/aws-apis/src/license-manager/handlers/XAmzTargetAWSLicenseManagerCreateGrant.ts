import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCreateGrantRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerCreateGrantHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCreateGrantRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
