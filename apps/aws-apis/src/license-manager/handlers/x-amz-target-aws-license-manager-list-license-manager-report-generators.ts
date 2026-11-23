import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListLicenseManagerReportGeneratorsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerListLicenseManagerReportGeneratorsHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListLicenseManagerReportGeneratorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
