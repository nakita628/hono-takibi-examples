import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListReceivedLicensesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerListReceivedLicensesHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListReceivedLicensesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
