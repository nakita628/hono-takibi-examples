import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceCreateFeaturedResultsSetHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
