import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSetHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceUpdateFeaturedResultsSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
