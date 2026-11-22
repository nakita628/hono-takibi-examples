import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListLicenseVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerListLicenseVersionsHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListLicenseVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
