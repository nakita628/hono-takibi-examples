import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceUpdateIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceUpdateIndexHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceUpdateIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
