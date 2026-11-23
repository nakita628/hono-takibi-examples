import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDescribeIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceDescribeIndexHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDescribeIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
