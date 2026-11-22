import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListReceivedLicensesForOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
