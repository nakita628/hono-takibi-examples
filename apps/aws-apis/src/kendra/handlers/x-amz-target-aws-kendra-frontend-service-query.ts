import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceQueryHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
