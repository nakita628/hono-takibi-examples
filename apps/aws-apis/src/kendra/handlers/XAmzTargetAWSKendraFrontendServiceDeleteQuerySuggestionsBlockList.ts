import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockListRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockListHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDeleteQuerySuggestionsBlockListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
