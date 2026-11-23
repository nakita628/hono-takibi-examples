import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGeneratorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerUpdateLicenseManagerReportGeneratorHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerUpdateLicenseManagerReportGeneratorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
