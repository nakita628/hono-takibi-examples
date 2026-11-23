import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerGetAccessTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerGetAccessTokenHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerGetAccessTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
