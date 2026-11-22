import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListReceivedGrantsForOrganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
