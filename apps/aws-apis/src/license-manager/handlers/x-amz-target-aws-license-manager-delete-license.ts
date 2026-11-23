import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerDeleteLicenseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerDeleteLicenseHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerDeleteLicenseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
