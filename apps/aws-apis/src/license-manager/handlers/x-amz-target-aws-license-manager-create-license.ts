import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCreateLicenseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerCreateLicenseHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCreateLicenseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
