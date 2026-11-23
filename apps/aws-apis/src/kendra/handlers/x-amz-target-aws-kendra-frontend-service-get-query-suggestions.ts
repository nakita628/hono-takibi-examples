import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceGetQuerySuggestionsHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceGetQuerySuggestionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
