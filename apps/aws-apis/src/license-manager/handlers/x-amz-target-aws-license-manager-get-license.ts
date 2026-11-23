import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerGetLicenseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerGetLicenseHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerGetLicenseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
