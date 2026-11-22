import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
