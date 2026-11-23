import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListResourceInventoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerListResourceInventoryHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListResourceInventoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
