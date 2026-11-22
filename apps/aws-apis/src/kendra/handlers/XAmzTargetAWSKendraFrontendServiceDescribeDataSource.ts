import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDescribeDataSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDescribeDataSourceHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDescribeDataSourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
