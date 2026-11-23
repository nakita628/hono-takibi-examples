import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceListQuerySuggestionsBlockListsHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListQuerySuggestionsBlockListsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
