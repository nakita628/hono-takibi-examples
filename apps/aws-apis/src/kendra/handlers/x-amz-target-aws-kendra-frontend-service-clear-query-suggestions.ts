import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceClearQuerySuggestionsHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
