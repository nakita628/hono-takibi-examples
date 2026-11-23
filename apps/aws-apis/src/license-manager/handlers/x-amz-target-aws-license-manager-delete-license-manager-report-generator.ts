import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGeneratorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerDeleteLicenseManagerReportGeneratorHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerDeleteLicenseManagerReportGeneratorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
