import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListResourceInventoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerListResourceInventoryHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListResourceInventoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
