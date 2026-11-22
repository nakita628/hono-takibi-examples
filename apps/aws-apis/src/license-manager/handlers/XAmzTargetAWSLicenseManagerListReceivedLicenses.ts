import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListReceivedLicensesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerListReceivedLicensesHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListReceivedLicensesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
