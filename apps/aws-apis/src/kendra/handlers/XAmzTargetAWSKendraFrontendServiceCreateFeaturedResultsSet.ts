import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceCreateFeaturedResultsSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
