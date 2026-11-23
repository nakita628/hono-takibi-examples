import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListFaqsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceListFaqsHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListFaqsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
