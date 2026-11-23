import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCreateGrantRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerCreateGrantHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCreateGrantRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
