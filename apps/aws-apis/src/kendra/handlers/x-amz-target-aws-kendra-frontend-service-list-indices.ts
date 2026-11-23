import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListIndicesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceListIndicesHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListIndicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
