import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerListReceivedGrantsForOrganizationHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
