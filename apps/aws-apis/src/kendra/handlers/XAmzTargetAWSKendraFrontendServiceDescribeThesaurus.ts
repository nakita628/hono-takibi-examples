import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDescribeThesaurusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDescribeThesaurusHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDescribeThesaurusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
