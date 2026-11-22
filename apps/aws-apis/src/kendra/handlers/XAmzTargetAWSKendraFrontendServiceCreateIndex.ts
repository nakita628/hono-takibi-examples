import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceCreateIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceCreateIndexHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceCreateIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
