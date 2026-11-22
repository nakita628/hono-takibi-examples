import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockListRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockListHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsBlockListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
