import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerCreateLicenseManagerReportGeneratorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerCreateLicenseManagerReportGeneratorHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerCreateLicenseManagerReportGeneratorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
