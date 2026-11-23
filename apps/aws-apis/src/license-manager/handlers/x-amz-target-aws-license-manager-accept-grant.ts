import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerAcceptGrantRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerAcceptGrantHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerAcceptGrantRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
