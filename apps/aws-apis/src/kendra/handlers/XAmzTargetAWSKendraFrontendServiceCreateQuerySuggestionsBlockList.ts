import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceCreateQuerySuggestionsBlockListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
