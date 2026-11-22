import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerUntagResourceHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
