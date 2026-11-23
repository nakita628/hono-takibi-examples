import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCheckInLicenseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerCheckInLicenseHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCheckInLicenseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
