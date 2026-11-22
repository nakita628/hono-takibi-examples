import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListDistributedGrantsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerListDistributedGrantsHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListDistributedGrantsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
