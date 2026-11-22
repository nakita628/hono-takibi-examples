import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceUpdateIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceUpdateIndexHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceUpdateIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
