import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCreateGrantVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerCreateGrantVersionHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCreateGrantVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
