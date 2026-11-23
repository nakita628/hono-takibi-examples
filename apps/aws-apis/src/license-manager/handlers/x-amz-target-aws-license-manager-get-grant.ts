import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerGetGrantRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerGetGrantHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerGetGrantRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
