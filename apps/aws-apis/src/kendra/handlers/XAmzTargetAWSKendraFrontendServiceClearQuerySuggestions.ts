import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceClearQuerySuggestionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
