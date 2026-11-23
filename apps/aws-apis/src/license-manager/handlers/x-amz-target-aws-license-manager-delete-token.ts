import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerDeleteTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerDeleteTokenHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerDeleteTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
