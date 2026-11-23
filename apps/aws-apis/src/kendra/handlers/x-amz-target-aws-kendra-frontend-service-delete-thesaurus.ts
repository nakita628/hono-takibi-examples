import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDeleteThesaurusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceDeleteThesaurusHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDeleteThesaurusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
