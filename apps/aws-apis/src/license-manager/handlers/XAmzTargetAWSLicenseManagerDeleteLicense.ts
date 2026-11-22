import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerDeleteLicenseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerDeleteLicenseHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerDeleteLicenseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
