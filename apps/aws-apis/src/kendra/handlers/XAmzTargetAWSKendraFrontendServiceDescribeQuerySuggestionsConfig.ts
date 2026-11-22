import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
