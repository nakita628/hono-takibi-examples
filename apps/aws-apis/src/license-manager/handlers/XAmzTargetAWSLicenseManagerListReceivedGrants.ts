import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListReceivedGrantsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerListReceivedGrantsHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListReceivedGrantsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
