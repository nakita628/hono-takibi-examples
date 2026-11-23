import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceCreateIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceCreateIndexHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceCreateIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
