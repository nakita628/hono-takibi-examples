import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListTokensRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerListTokensHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListTokensRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
