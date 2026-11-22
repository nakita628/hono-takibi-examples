import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListLicensesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerListLicensesHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListLicensesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
