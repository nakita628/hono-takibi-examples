import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerDeleteGrantRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerDeleteGrantHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerDeleteGrantRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
