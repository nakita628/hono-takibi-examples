import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceCreateThesaurusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceCreateThesaurusHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceCreateThesaurusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
