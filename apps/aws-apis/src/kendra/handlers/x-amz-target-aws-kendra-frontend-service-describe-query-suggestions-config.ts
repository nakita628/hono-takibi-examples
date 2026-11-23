import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceDescribeQuerySuggestionsConfigHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
