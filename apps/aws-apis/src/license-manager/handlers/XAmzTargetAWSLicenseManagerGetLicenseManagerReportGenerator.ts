import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerGetLicenseManagerReportGeneratorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerGetLicenseManagerReportGeneratorHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerGetLicenseManagerReportGeneratorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
