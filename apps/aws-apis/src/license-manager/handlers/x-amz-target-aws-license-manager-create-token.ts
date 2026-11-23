import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCreateTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerCreateTokenHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCreateTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
