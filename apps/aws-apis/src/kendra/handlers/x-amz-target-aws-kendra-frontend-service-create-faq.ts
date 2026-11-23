import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceCreateFaqRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceCreateFaqHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceCreateFaqRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
