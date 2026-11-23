import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListLicenseConversionTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerListLicenseConversionTasksHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListLicenseConversionTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
