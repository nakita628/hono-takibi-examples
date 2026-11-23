import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerListReceivedLicensesForOrganizationHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
