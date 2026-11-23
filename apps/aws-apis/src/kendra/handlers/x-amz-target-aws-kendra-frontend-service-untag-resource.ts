import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceUntagResourceHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
