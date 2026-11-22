import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockListRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockListHandler =
  app.openapi(postXAmzTargetAWSKendraFrontendServiceDescribeQuerySuggestionsBlockListRoute, (c) => {
    throw new Error('Not implemented')
  })
