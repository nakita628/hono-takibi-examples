import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
