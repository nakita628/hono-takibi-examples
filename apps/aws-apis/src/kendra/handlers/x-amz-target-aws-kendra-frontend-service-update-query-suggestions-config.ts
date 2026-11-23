import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceUpdateQuerySuggestionsConfigHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceUpdateQuerySuggestionsConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
