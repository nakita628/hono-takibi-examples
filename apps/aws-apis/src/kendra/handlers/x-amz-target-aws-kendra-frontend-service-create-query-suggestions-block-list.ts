import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceCreateQuerySuggestionsBlockListHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
