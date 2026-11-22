import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDescribeIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDescribeIndexHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDescribeIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
